import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HeaderButtons, HeaderButton, Item, HiddenItem } from 'react-navigation-header-buttons';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createMaterialTopTabNavigator } from 'react-navigation';
// eslint-disable-next-line import/no-cycle
import Home from '../components/Home';
import Detail from '../components/Detail';
import DrawerContent from '../components/DrawerContent';
import { MAIN_SCREEN, DETAIL_SCREEN } from './types';


const HomeStack = createMaterialTopTabNavigator(
  {
    ALL: { screen: Home },
    Business: { screen: Detail },
    Entertainment: { screen: Detail },
    General: { screen: Detail },
    Health: { screen: Detail },
    Science: { screen: Detail },
    Sports: { screen: Detail },
    Technology: { screen: Detail },
  },
  {
    initialRouteName: 'ALL',
    animationEnabled: true,
    lazy: true, // make false if you want render all screen imidiately.
    optimizationsEnabled: true,
    tabBarOptions: {
      labelStyle: {
        fontSize: 12,
        color: 'black'
      },
      tabStyle: {
        width: 130,
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
        ),
        headerRight: (
          <HeaderButtons HeaderButtonComponent={MaterialIcons} OverflowIcon={<Icon name="more-vert" size={23} color="black" />}>
            <HiddenItem title="Language(All)" iconName="ios-search" onPress={() => alert('search')} />
            <HiddenItem title="Country(All)" onPress={() => alert('select')} />
          </HeaderButtons>
        ),
      }),
    },
    [DETAIL_SCREEN]: { screen: Detail }
  }
);
export default createAppContainer(RootStack);
