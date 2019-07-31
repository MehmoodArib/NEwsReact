import Status from '../Status';
import {
  FETCHING_SOURCES,
  FETCHING_SOURCES_FAILURE,
  FETCHING_SOURCES_SUCCESS
} from './types';
import { API_KEY } from '../types';


const url = 'https://newsapi.org/v2/sources?'
  + `apiKey=${API_KEY}`;

function buildUrl(preference) {
  // eslint-disable-next-line no-underscore-dangle
  let _url = url;
  if (preference.country.value !== '0') {
    _url += `&country=${preference.country.value}`;
  }
  if (preference.language.value !== '0') {
    _url += `&language=${preference.language.value}`;
  }
  return _url;
}

// eslint-disable-next-line import/prefer-default-export
export function fetchSources(preference) {
  const finalUrl = buildUrl(preference);
  return (dispatch) => {
    dispatch(getSources());
    return (
      fetch(finalUrl))
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
