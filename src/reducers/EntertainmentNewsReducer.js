import {
  FETCHING_ENTERTAINMENT_NEWS,
  FETCH_ENTERTAINMENT_NEWS_FAILURE,
  FETCH_ENTERTAINMENT_NEWS_SUCCESS,
} from '../actions/types';


const initialState = {
  news: [],
  isFetching: false,
  error: false
};

export default function NewsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_ENTERTAINMENT_NEWS:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_ENTERTAINMENT_NEWS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        news: action.data
      };
    case FETCH_ENTERTAINMENT_NEWS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
}
