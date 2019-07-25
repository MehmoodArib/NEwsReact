import { combineReducers } from 'redux';
import BusinessNewsReducer from './BusinessNewsReducer';
import EntertainmentNewsReducxer from './EntertainmentNewsReducer';
import GeneralNewsReducer from './GeneralNewsReducer';
import HealthNewsReducer from './HealthNewsReducer';
import ScienceNewsReducer from './ScienceNewsReducer';
import SportsNewsReducer from './SportsNewsReducer';
import TechnologyNewsReducer from './TechnologyNewsReducer';
import SourceWiseNewsReducer from './SourceWiseNewsReducer';
import PreferenceReducer from './PreferenceReducer';
import SelectionReducer from './SelectionReducer';
import SourcesReducer from './SourcesReducer';


export default combineReducers({
  businessNews: BusinessNewsReducer,
  entertainmentNews: EntertainmentNewsReducxer,
  generalNews: GeneralNewsReducer,
  healthNews: HealthNewsReducer,
  scienceNews: ScienceNewsReducer,
  sportsNews: SportsNewsReducer,
  technologyNews: TechnologyNewsReducer,
  preference: PreferenceReducer,
  selectedNewsUrl: SelectionReducer,
  sourceWiseNews: SourceWiseNewsReducer,
  sources: SourcesReducer,
});
