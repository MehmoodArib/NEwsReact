import { createStackNavigator, createAppContainer } from 'react-navigation';
// eslint-disable-next-line import/no-cycle
import Home from '../components/Home';
import Detail from '../components/Detail';
import { MAIN_SCREEN, DETAIL_SCREEN } from './types';

const MainNavigator = createStackNavigator({
  [MAIN_SCREEN]: Home,
  [DETAIL_SCREEN]: Detail,
}, { initialRouteName: MAIN_SCREEN });

export default createAppContainer(MainNavigator);
