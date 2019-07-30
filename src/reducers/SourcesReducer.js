import {
  FETCHING_SOURCES,
  FETCHING_SOURCES_SUCCESS,
  FETCHING_SOURCES_FAILURE
} from '../actions/types';
import Status from '../Status';


const initialState = {
  sources: [],
  status: Status.DEFAULT
};

export default function SourcesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_SOURCES:
      return {
        ...state,
        status: action.payload.status,
      };
    case FETCHING_SOURCES_SUCCESS:
      return {
        ...state,
        status: action.payload.status,
        sources: action.payload.data
      };
    case FETCHING_SOURCES_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
