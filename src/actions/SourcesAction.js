import Status from '../Status';
import {
  FETCHING_SOURCES,
  FETCHING_SOURCES_FAILURE,
  FETCHING_SOURCES_SUCCESS
} from './types';

export function fetchNews(queryParams) {
  const API = buildUrl(queryParams);
  return (dispatch) => {
    dispatch(getSources());
    return (
      fetch(API))
      .then(res => res.json())
      .then((json) => {
        dispatch(getSourcesSuccess(json));
      })
      .catch(err => dispatch(getSourcesFailure(err)));
  };
}

function getSources() {
  return {
    type: FETCHING_SOURCES,
    payload: { status: Status.LOADING }
  };
}

function getSourcesSuccess(data) {
  return {
    type: FETCHING_SOURCES_SUCCESS,
    payload: {
      status: Status.SUCCESS,
      data
    }
  };
}

function getSourcesFailure(error) {
  return {
    type: FETCHING_SOURCES_FAILURE,
    payload: {
      status: Status.ERROR,
      errorMessage: error
    }
  };
}
