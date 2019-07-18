import { combineReducers } from 'redux';
import AllNewsReducer from './AllNewsReducer';
import BusinessNewsReducer from './BusinessNewsReducer';
import EntertainmentNewsReducxer from './EntertainmentNewsReducer';
import GeneralNewsReducer from './GeneralNewsReducer';
import HealthNewsReducer from './HealthNewsReducer';
import ScienceNewsReducer from './ScienceNewsReducer';
import SportsNewsReducer from './SportsNewsReducer';
import TechnologyNewsReducer from './TechnologyNewsReducer';

export default combineReducers({
  allNews: AllNewsReducer,
  businessNews: BusinessNewsReducer,
  entertainmentNews: EntertainmentNewsReducxer,
  generalNews: GeneralNewsReducer,
  healthNews: HealthNewsReducer,
  scienceNews: ScienceNewsReducer,
  sportsNews: SportsNewsReducer,
  technologyNews: TechnologyNewsReducer,
});
