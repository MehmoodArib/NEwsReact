import {
  FETCHING_SEARCH,
  FETCH_SEARCH_FAILURE,
  FETCH_SEARCH_SUCCESS
} from '../actions/types';
import Status from '../Status';


const initialState = {
  news: [],
  status: Status.DEFAULT
};

export default function SearchReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_SEARCH:
      return {
        ...state,
        status: action.payload.status,
      };
    case FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        status: action.payload.status,
        news: action.payload.data
      };
    case FETCH_SEARCH_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
