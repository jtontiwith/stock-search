import { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  searchText: '',
  activeSearch: '',
  stockData: null,
  latestSearches: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'set_search_text':
      return {
        ...state,
        searchText: action.payload,
      };
    case 'set_active_search':
      return {
        ...state,
        activeSearch: state.searchText,
        latestSearches: [...state.latestSearches, state.searchText],
      };
    case 'set_stock_data':
      return {
        ...state,
        stockData: action.payload,
      };
    default:
      throw new Error();
  }
}

const useStockSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(
        `https://api.polygon.io/v2/aggs/ticker/${state.activeSearch}/prev?adjusted=true&apiKey=VvxgpETfqVOeHkmhfN8qRYpy_p0NlyEw`
      );
      dispatch({ type: 'set_stock_data', payload: res.data.results[0] });
    };
    if (state.activeSearch.length) fetchData();
  }, [state.activeSearch]);
  return { state, dispatch };
};

export default useStockSearch;
