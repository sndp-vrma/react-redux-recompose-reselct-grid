import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { compose } from "recompose";

import * as actions from "./actions";
import { getSortedMoviesCollection, sortSelector, searchSelector } from "./selectors";
import SortLink from "./components/SortLink";
import SearchText from "./components/SearchText";
import { columns } from "./data"
import './App.css'
import Table from './components/Table'

function App({ collection, setSortParams, clearSortParams, sortParams, setSearchParams, searchParams }) {
      return (
      	<div>
	      <h1>Sortable Searchable Grid</h1>
	      	<div className="table">
	      		<table>
			        <thead>
			            <tr>
			                {columns.map(({ id, title }) => (
			                    <th key={id}>
                          <SortLink
                            label={title}
                            sortKey={id}
                            sort={sortParams}
                            onSort={(key, type) => setSortParams(key, type)}
                            onSortClear={() => clearSortParams()}
                          />
                        </th>
			                ))}
			            </tr>
                  <tr>
                      {columns.map(({ id, title }) => (
                          <th key={id}>
                          <SearchText
                            label={title}
                            searchKey={id}
                            search={searchParams}
                            onSearch={(event, key, type) => setSearchParams(event.target.value, id, type)}
                           />
                        </th>
                      ))}
                  </tr>
			        </thead>
			            <Table data={collection}/>
			    </table>
      		</div>
    		</div>
    	)
  }

const mapStateToProps = (state, props) => ({
  collection: getSortedMoviesCollection(state),
  sortParams: sortSelector(state),
  searchParams: searchSelector(state)
});

const mapDispatchToProps = dispatch => ({
  setSortParams: bindActionCreators(actions.setSortParams, dispatch),
  clearSortParams: bindActionCreators(actions.clearSortParams, dispatch),
  setSearchParams: bindActionCreators(actions.setSearchParams, dispatch)
});

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(App);