import {
  FETCHING_SPORTS_NEWS,
  FETCH_SPORTS_NEWS_FAILURE,
  FETCH_SPORTS_NEWS_SUCCESS,
} from '../actions/types';
import Status from '../Status';


const initialState = {
  news: [],
  status: Status.DEFAULT
};

export default function SportsNewsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_SPORTS_NEWS:
      return {
        ...state,
        status: action.payload.status
      };
    case FETCH_SPORTS_NEWS_SUCCESS:
      return {
        ...state,
        status: action.payload.status,
        news: action.payload.data
      };
    case FETCH_SPORTS_NEWS_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        errorMessage: action.payload.errorMessage
      };
    default:
      return state;
  }
}
