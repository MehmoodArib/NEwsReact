import {
  FETCHING_HEALTH_NEWS,
  FETCH_HEALTH_NEWS_FAILURE,
  FETCH_HEALTH_NEWS_SUCCESS,
} from '../actions/types';


const initialState = {
  news: [],
  isFetching: false,
  error: false
};

export default function NewsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_HEALTH_NEWS:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_HEALTH_NEWS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        news: action.data
      };
    case FETCH_HEALTH_NEWS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
}
