import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { TouchableOpacity, Text } from 'react-native';
import LoginStack from '../navigations/LoginStack';
import AnimationAScreen from '../screens/AnimationAScreen';
import AnimationBScreen from '../screens/AnimationBScreen';
import DrawerContent from './DrawerContent';
import ChannelScreen from '../screens/ChannelScreen';

const DrawerNavigation = DrawerNavigator(
  {
    ChannelScreen: { screen: ChannelScreen },
  },
  {
    contentComponent: DrawerContent,
    drawerPosition: 'left',
    drawerWidth: 100,
  }
);

const MainStack = StackNavigator(
  {
    DrawerNavigation: DrawerNavigation,
  },
  {
    navigationOptions: navigator => ({
      headerLeft: (
        <TouchableOpacity onPress={()=>{
          navigator.navigation.toggleDrawer();
        }}>
          <Text>Menu</Text>
        </TouchableOpacity>
      ),
      drawerLockMode: 'locked-open',
    }),
  }
);

const RootStackNavigator = StackNavigator(
  {
    MainStack: { screen: MainStack },
  },
  {
    headerMode: 'none',
  }
);

export default RootStackNavigator;
