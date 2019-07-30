import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HeaderButtons, HeaderButton, Item, HiddenItem } from 'react-navigation-header-buttons';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createMaterialTopTabNavigator } from 'react-navigation';
// eslint-disable-next-line import/no-cycle
import Home from '../components/Home';
import Special from '../components/Special';
import DrawerContent from '../components/DrawerContent';
import MyWebView from '../components/MyWebView';
import PrefrencesScreen from '../components/PrefrencesScreen';
import { MAIN_SCREEN, SPECIAL_SCREEN, MY_WEBVIEW, PREFRENCES_SCREEN } from './types';
import { BUSINESS, TECHNOLOGY, GENERAL, ENTERTAINMENT, HEALTH, SCIENCE, SPORTS } from '../types';


const HomeStack = createMaterialTopTabNavigator(
  {
    GENERAL: {
      screen: Home,
      params: {
        category: GENERAL
      }
    },

    BUSINESS: {
      screen: Home,
      params: {
        category: BUSINESS
      }
    },
    ENTERTAINMENT: {
      screen: Home,
      params: {
        category: ENTERTAINMENT
      }
    },
    HEALTH: {
      screen: Home,
      params: {
        category: HEALTH
      }
    },
    SCIENCE: {
      screen: Home,
      params: {
        category: SCIENCE
      }
    },
    SPORTS: {
      screen: Home,
      params: {
        category: SPORTS
      }
    },
    TECHNOLOGY: {
      screen: Home,
      params: {
        category: TECHNOLOGY
      }
    },
  },
  {
    initialRouteName: 'GENERAL',
    animationEnabled: true,
    lazy: true, // make false if you want render all screen imidiately.
    optimizationsEnabled: true,
    tabBarOptions: {
      labelStyle: {
        fontSize: 12,
        color: 'black'
      },
      tabStyle: {
        width: 150,
      },
      style: {
        backgroundColor: 'white',
      },
      scrollEnabled: true
    }
  }
);

const MainDrawer = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack
    },
  },
  {
    contentComponent: DrawerContent
  },
  {
    initialRouteName: 'Home',
    // mode: 'card'
  }
);
const MaterialIcons = passMeFurther => (
  <HeaderButton {...passMeFurther} IconComponent={Icon} iconSize={24} color="black" />
);

const RootStack = createStackNavigator(
  {
    [MAIN_SCREEN]: {
      screen: MainDrawer,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'NEWSREACT',
        headerLeft: (
          <HeaderButtons HeaderButtonComponent={MaterialIcons}>
            <Item title="search" iconName="menu" onPress={() => navigation.toggleDrawer()} />
          </HeaderButtons>
        )
      }),
    },
    [SPECIAL_SCREEN]: { screen: Special },
    [MY_WEBVIEW]: { screen: MyWebView },
    [PREFRENCES_SCREEN]: { screen: PrefrencesScreen }
  },
  {
    // headerMode: 'none'
  }
);
export default createAppContainer(RootStack);
