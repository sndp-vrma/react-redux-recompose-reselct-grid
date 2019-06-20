import { createSelector } from "reselect";
import get from "lodash/get";
import orderBy from "lodash/orderBy";

const moviesSelector = state => state.app && state.app.moviesList;

export const sortSelector = state => state.app && state.app.sortParams;

export const searchSelector = state => state.app && state.app.searchParams;

function orderByType(data, type) {
  switch (type) {
    case "date":
      return Date.parse(data);
    case "float":
      return parseFloat(data);
    default:
      return data;
  }
}

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
  }
);
