import { CHANGE_COUNTRY, CHANGE_LANGUAGE } from '../actions/types';

const initialState = {
  country: { value: '0', label: 'All', selected: true },
  language: { value: '0', label: 'All', selected: true },
};

export default function PrefrenceReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COUNTRY:
      return {
        ...state,
        country: action.payload
      };
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };
    default:
      return state;
  }
}
