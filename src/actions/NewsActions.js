import {
  FETCHING_ALL_NEWS,
  FETCH_ALL_NEWS_FAILURE,
  FETCH_ALL_NEWS_SUCCESS,
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
  FETCH_TECHNOLOGY_NEWS_FAILURE
} from './types';

import { API_KEY, ALL, BUSINESS, GENERAL, ENTERTAINMENT, SCIENCE, SPORTS, HEALTH, TECHNOLOGY } from '../types';

const BaseUrl = 'https://newsapi.org/v2/top-headlines?'
  + `apiKey=${API_KEY}`;

// eslint-disable-next-line import/prefer-default-export
export function fetchNews(category, country) {
  let API = `${BaseUrl}&country=${country}`;
  if (category !== 'ALL') {
    API += `&category=${category}`;
  }
  return (dispatch) => {
    dispatch(getNews(category));
    return (
      fetch(API))
      .then(res => res.json())
      .then((json) => {
        dispatch(getNewsSuccess(json, category));
      })
      .catch(err => dispatch(getNewsFailure(err, category)));
  };
}

function getNews(category) {
  switch (category) {
    case ALL:
      return {
        type: FETCHING_ALL_NEWS
      };
    case GENERAL:
      return {
        type: FETCHING_GENERAL_NEWS
      };
    case BUSINESS:
      return {
        type: FETCHING_BUSINESS_NEWS
      };
    case HEALTH:
      return {
        type: FETCHING_HEALTH_NEWS
      };
    case SCIENCE:
      return {
        type: FETCHING_SCIENCE_NEWS
      };
    case SPORTS:
      return {
        type: FETCHING_SPORTS_NEWS
      };
    case TECHNOLOGY:
      return {
        type: FETCHING_TECHNOLOGY_NEWS
      };
    case ENTERTAINMENT:
      return {
        type: FETCHING_ENTERTAINMENT_NEWS
      };
    default:
      throw new Error('UnSupported Category');
  }
}

function getNewsSuccess(data, category) {
  switch (category) {
    case ALL:
      return {
        type: FETCH_ALL_NEWS_SUCCESS,
        data
      };
    case GENERAL:
      return {
        type: FETCH_GENERAL_NEWS_SUCCESS,
        data
      };
    case BUSINESS:
      return {
        type: FETCH_BUSINESS_NEWS_SUCCESS,
        data
      };
    case HEALTH:
      return {
        type: FETCH_HEALTH_NEWS_SUCCESS,
        data
      };
    case SCIENCE:
      return {
        type: FETCH_SCIENCE_NEWS_SUCCESS,
        data
      };
    case SPORTS:
      return {
        type: FETCH_SPORTS_NEWS_SUCCESS,
        data
      };
    case TECHNOLOGY:
      return {
        type: FETCH_TECHNOLOGY_NEWS_SUCCESS,
        data
      };
    case ENTERTAINMENT:
      return {
        type: FETCH_ENTERTAINMENT_NEWS_SUCCESS,
        data
      };
    default:
      throw new Error('UnSupported Category');
  }
}

function getNewsFailure(category) {
  switch (category) {
    case ALL:
      return {
        type: FETCH_ALL_NEWS_FAILURE
      };
    case GENERAL:
      return {
        type: FETCH_GENERAL_NEWS_FAILURE
      };
    case BUSINESS:
      return {
        type: FETCH_BUSINESS_NEWS_FAILURE
      };
    case HEALTH:
      return {
        type: FETCH_HEALTH_NEWS_FAILURE
      };
    case SCIENCE:
      return {
        type: FETCH_SCIENCE_NEWS_FAILURE
      };
    case SPORTS:
      return {
        type: FETCH_SPORTS_NEWS_FAILURE
      };
    case TECHNOLOGY:
      return {
        type: FETCH_TECHNOLOGY_NEWS_FAILURE
      };
    case ENTERTAINMENT:
      return {
        type: FETCH_ENTERTAINMENT_NEWS_FAILURE,
      };
    default:
      throw new Error('UnSupported Category');
  }
}
