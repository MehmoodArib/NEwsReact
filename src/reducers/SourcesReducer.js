import {
  FETCHING_SOURCES,
  FETCH_SOURCE_NEWS_SUCCESS,
  FETCH_SOURCE_NEWS_FAILURE,
} from '../actions/types';
import Status from '../Status';


const initialState = {
  sources: [],
  status: Status.DEFAULT
};

export default function SourcesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_SCIENCE_NEWS:
      return {
        ...state,
        status: action.payload.status,
      };
    case FETCH_SCIENCE_NEWS_SUCCESS:
      return {
        ...state,
        status: action.payload.status,
        news: action.payload.data
      };
    case FETCH_SCIENCE_NEWS_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
