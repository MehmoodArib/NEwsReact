import {
  FETCHING_ENTERTAINMENT_NEWS,
  FETCH_ENTERTAINMENT_NEWS_FAILURE,
  FETCH_ENTERTAINMENT_NEWS_SUCCESS,
} from '../actions/types';
import Status from '../Status';


const initialState = {
  news: [],
  status: Status.DEFAULT
};

export default function NewsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_ENTERTAINMENT_NEWS:
      return {
        ...state,
        status: action.payload.status
      };
    case FETCH_ENTERTAINMENT_NEWS_SUCCESS:
      return {
        ...state,
        status: action.payload.status,
        news: action.payload.data
      };
    case FETCH_ENTERTAINMENT_NEWS_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        errorMessgae: action.payload.errorMessgae
      };
    default:
      return state;
  }
}
