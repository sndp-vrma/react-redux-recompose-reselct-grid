
```json
git clone https://github.com/sndp-vrma/react-redux-recompose-reselct-grid.git
yarn
yarn start
```
Searchable and Sortable Grid using React, Redux, Reselect and Recompose


### Recompose
[Recompose](https://github.com/acdlite/recompose/blob/master/docs/API.md) accepts a function that maps owner props to a new collection of props that are passed to the base component.


#### `src/App.js`

```js
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

```

[Reselect](https://github.com/reduxjs/reselect) is a simple library for creating memoized, composable **selector** functions. Reselect selectors can be used to efficiently compute derived data from the Redux store.

Reselect provides a function `createSelector` for creating memoized selectors. `createSelector` takes an array of input-selectors and a transform function as its arguments. If the Redux state tree is changed in a way that causes the value of an input-selector to change, the selector will call its transform function with the values of the input-selectors as arguments and return the result. If the values of the input-selectors are the same as the previous call to the selector, it will return the previously computed value instead of calling the transform function.

```js
export const getSortedMoviesCollection = createSelector(
  moviesSelector,
  sortSelector,
  searchSelector,
  (moviesCollection, sort, search) => {
    if(search && search.searchTerm){
      moviesCollection =  moviesCollection.filter(
        moviesCollection => { return moviesCollection[search.key] ?
        moviesCollection[search.key].toString().toLowerCase().indexOf(search.searchTerm.toString().toLowerCase()) >
        -1 : ''
      })
    }
    if (sort) {
      return orderBy(
        moviesCollection,
        c => orderByType(get(c, sort.key), sort.type),
        [sort.order || "desc"]
      );
    }
    return moviesCollection;
```

