// @flow
import * as React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Home, PostList } from './src/scenes';

const MyHomeScreen = ({ navigation }) => (
  <Home banner="Home Screen" navigation={navigation} />
);

const RootStack = createBottomTabNavigator(
  {
    MainTab: {
      screen: MyHomeScreen,
      path: '/',
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icons
            name={focused ? 'home' : 'home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    SettingsTab: {
      screen: PostList,
      path: '/settings',
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icons
            name={focused ? 'settings' : 'settings-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
    },
  }
);

export default createAppContainer(RootStack);
