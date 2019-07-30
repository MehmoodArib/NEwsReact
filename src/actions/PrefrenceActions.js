/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import { CHANGE_COUNTRY, CHANGE_LANGUAGE } from './types';

export function setCountry(country) {
  return {
    type: CHANGE_COUNTRY,
    payload: country
  };
}
export function setLanguage(language) {
  return {
    type: CHANGE_LANGUAGE,
    payload: language
  };
}
