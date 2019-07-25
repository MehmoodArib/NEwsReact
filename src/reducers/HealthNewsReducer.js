import {
  FETCHING_HEALTH_NEWS,
  FETCH_HEALTH_NEWS_FAILURE,
  FETCH_HEALTH_NEWS_SUCCESS,
} from '../actions/types';
import Status from '../Status';


const initialState = {
  news: [],
  status: Status.DEFAULT
};

export default function NewsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_HEALTH_NEWS:
      return {
        ...state,
        status: action.payload.status,
      };
    case FETCH_HEALTH_NEWS_SUCCESS:
      return {
        ...state,
        status: action.payload.status,
        news: action.payload.data
      };
    case FETCH_HEALTH_NEWS_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        errorMessage: action.payload.errorMessage
      };
    default:
      return state;
  }
}
