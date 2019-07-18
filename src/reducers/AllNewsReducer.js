import {
  FETCHING_ALL_NEWS,
  FETCH_ALL_NEWS_FAILURE,
  FETCH_ALL_NEWS_SUCCESS,
} from '../actions/types';


const initialState = {
  news: [],
  isFetching: false,
  error: false
};

export default function NewsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_ALL_NEWS:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_ALL_NEWS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        news: action.data
      };
    case FETCH_ALL_NEWS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
}
