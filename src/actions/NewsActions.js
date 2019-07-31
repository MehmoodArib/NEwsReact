import {
  FETCHING_BUSINESS_NEWS,
  FETCH_BUSINESS_NEWS_SUCCESS,
  FETCH_BUSINESS_NEWS_FAILURE,
  FETCHING_ENTERTAINMENT_NEWS,
  FETCH_ENTERTAINMENT_NEWS_SUCCESS,
  FETCH_ENTERTAINMENT_NEWS_FAILURE,
  FETCHING_GENERAL_NEWS,
  FETCH_GENERAL_NEWS_SUCCESS,
  FETCH_GENERAL_NEWS_FAILURE,
  FETCHING_HEALTH_NEWS,
  FETCH_HEALTH_NEWS_SUCCESS,
  FETCH_HEALTH_NEWS_FAILURE,
  FETCHING_SCIENCE_NEWS,
  FETCH_SCIENCE_NEWS_SUCCESS,
  FETCH_SCIENCE_NEWS_FAILURE,
  FETCHING_SPORTS_NEWS,
  FETCH_SPORTS_NEWS_SUCCESS,
  FETCH_SPORTS_NEWS_FAILURE,
  FETCHING_TECHNOLOGY_NEWS,
  FETCH_TECHNOLOGY_NEWS_SUCCESS,
  FETCH_TECHNOLOGY_NEWS_FAILURE,
  FETCHING_SOURCE_NEWS,
  FETCH_SOURCE_NEWS_FAILURE,
  FETCH_SOURCE_NEWS_SUCCESS,
  FETCHING_SEARCH,
  FETCH_SEARCH_SUCCESS,
  FETCH_SEARCH_FAILURE
} from './types';

import {
  API_KEY, BUSINESS, GENERAL, ENTERTAINMENT, SCIENCE, SPORTS, HEALTH, TECHNOLOGY, SOURCE, SEARCH
} from '../types';

import Status from '../Status';

const BaseUrl = 'https://newsapi.org/v2/top-headlines?'
  + `apiKey=${API_KEY}`;

const BaseUrlSearch = 'https://newsapi.org/v2/everything?'
  + `apiKey=${API_KEY}`;
// eslint-disable-next-line consistent-return
const buildUrl = (queryParams) => {
  const { category, country } = queryParams;
  // eslint-disable-next-line no-underscore-dangle
  let _url = BaseUrl;
  if (category && category !== SOURCE) {
    _url += `&category=${category}`;
  }
  if (country && country.value !== '0') {
    _url += `&country=${country.value}`;
  }
  return _url;
};

export function fetchNews(queryParams) {
  const API = buildUrl(queryParams);
  return (dispatch) => {
    dispatch(getNews(queryParams.category));
    return (
      fetch(API))
      .then(res => res.json())
      .then((json) => {
        dispatch(getNewsSuccess(json, queryParams.category));
      })
      .catch(err => dispatch(getNewsFailure(err, queryParams.category)));
  };
}

export function fetchSearch(queryParams) {
  const API = `${BaseUrlSearch}&q=${queryParams.searchText}`;
  return (dispatch) => {
    dispatch(getNews(queryParams.category));
    return (
      fetch(API))
      .then(res => res.json())
      .then((json) => {
        dispatch(getNewsSuccess(json, queryParams.category));
      })
      .catch(err => dispatch(getNewsFailure(err, queryParams.category)));
  };
}


function getNews(category) {
  const action = {};
  action.payload = {
    status: Status.LOADING
  };
  switch (category) {
    case GENERAL:
      action.type = FETCHING_GENERAL_NEWS;
      break;
    case BUSINESS:
      action.type = FETCHING_BUSINESS_NEWS;
      break;
    case HEALTH:
      action.type = FETCHING_HEALTH_NEWS;
      break;
    case SCIENCE:
      action.type = FETCHING_SCIENCE_NEWS;
      break;
    case SPORTS:
      action.type = FETCHING_SPORTS_NEWS;
      break;
    case TECHNOLOGY:
      action.type = FETCHING_TECHNOLOGY_NEWS;
      break;
    case ENTERTAINMENT:
      action.type = FETCHING_ENTERTAINMENT_NEWS;
      break;
    case SOURCE:
      action.type = FETCHING_SOURCE_NEWS;
      break;
    case SEARCH:
      action.type = FETCHING_SEARCH;
      break;
    default:
      throw new Error('UnSupported Category');
  }
  return action;
}

function getNewsSuccess(data, category) {
  const action = {};
  action.payload = {
    status: Status.SUCCESS,
    data
  };
  switch (category) {
    case GENERAL:
      action.type = FETCH_GENERAL_NEWS_SUCCESS;
      break;
    case BUSINESS:
      action.type = FETCH_BUSINESS_NEWS_SUCCESS;
      break;
    case HEALTH:
      action.type = FETCH_HEALTH_NEWS_SUCCESS;
      break;
    case SCIENCE:
      action.type = FETCH_SCIENCE_NEWS_SUCCESS;
      break;
    case SPORTS:
      action.type = FETCH_SPORTS_NEWS_SUCCESS;
      break;
    case TECHNOLOGY:
      action.type = FETCH_TECHNOLOGY_NEWS_SUCCESS;
      break;
    case ENTERTAINMENT:
      action.type = FETCH_ENTERTAINMENT_NEWS_SUCCESS;
      break;
    case SOURCE:
      action.type = FETCH_SOURCE_NEWS_SUCCESS;
      break;
    case SEARCH:
      action.type = FETCH_SEARCH_SUCCESS;
      break;
    default:
      throw new Error('UnSupported Category');
  }
  return action;
}

function getNewsFailure(error, category) {
  const action = {};
  action.payload = {
    status: Status.ERROR,
    errorMessage: error.message,
  };
  switch (category) {
    case GENERAL:
      action.type = FETCH_GENERAL_NEWS_FAILURE;
      break;
    case BUSINESS:
      action.type = FETCH_BUSINESS_NEWS_FAILURE;
      break;
    case HEALTH:
      action.type = FETCH_HEALTH_NEWS_FAILURE;
      break;
    case SCIENCE:
      action.type = FETCH_SCIENCE_NEWS_FAILURE;
      break;
    case SPORTS:
      action.type = FETCH_SPORTS_NEWS_FAILURE;
      break;
    case TECHNOLOGY:
      action.type = FETCH_TECHNOLOGY_NEWS_FAILURE;
      break;
    case ENTERTAINMENT:
      action.type = FETCH_ENTERTAINMENT_NEWS_FAILURE;
      break;
    case SOURCE:
      action.type = FETCH_SOURCE_NEWS_FAILURE;
      break;
    case SEARCH:
      action.type = FETCH_SEARCH_FAILURE;
      break;
    default:
      throw new Error('UnSupported Category');
  }
  return action;
}
