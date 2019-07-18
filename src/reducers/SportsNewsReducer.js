import {
  FETCHING_SPORTS_NEWS,
  FETCH_SPORTS_NEWS_FAILURE,
  FETCH_SPORTS_NEWS_SUCCESS,
} from '../actions/types';


const initialState = {
  news: [],
  isFetching: false,
  error: false
};

export default function NewsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_SPORTS_NEWS:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SPORTS_NEWS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        news: action.data
      };
    case FETCH_SPORTS_NEWS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
}
