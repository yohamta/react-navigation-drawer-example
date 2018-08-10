import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import SignInStack from './SignInStack';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerContent from './DrawerContent';
import HomeScreen from '../screens/HomeScreen';
import RankingScreen from '../screens/RankingScreen';

const DrawerNavigation = DrawerNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    RankingScreen: { screen: RankingScreen },
  },
  {
    contentComponent: DrawerContent,
    drawerPosition: 'left',
    drawerWidth: 200,
  }
);

const MainStack = StackNavigator(
  {
    DrawerNavigation: DrawerNavigation,
  },
  {
    navigationOptions: navigator => ({
      headerLeft: (
        <TouchableOpacity
          onPress={() => {
            navigator.navigation.toggleDrawer();
          }}
        >
          <Icon
            name="bars"
            size={20}
            color="#aaa"
            style={styles.headerLeftIconStyle}
          />
        </TouchableOpacity>
      ),
      headerTitle: (
        <View style={styles.searchInputContainer}>
          <Icon
            name="search"
            size={20}
            color="#aaa"
            style={styles.searchInputIconStyle}
          />
          <TextInput
            style={styles.searchInputStyle}
            underlineColorAndroid="transparent"
            placeholder="search"
          />
        </View>
      ),
      drawerLockMode: 'locked-open',
    }),
  }
);

let TransitionConfig = () => {
  return {
    screenInterpolator: ({ position, scene }) => {
      const opacity = position.interpolate({
        inputRange: [scene.index - 1, scene.index],
        outputRange: [0, 1],
      });
      return {
        opacity: opacity,
      };
    },
  };
};

const RootStackNavigator = StackNavigator(
  {
    SignInStack: { screen: SignInStack },
    MainStack: { screen: MainStack },
  },
  {
    headerMode: 'none',
    transitionConfig: TransitionConfig,
  }
);

const styles = StyleSheet.create({
  headerLeftIconStyle: {
    marginLeft: 15,
  },
  searchInputContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#999',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  searchInputIconStyle: {
    padding: 5,
  },
  searchInputStyle: {
    flex: 1,
    paddingRight: 10,
    textAlign: 'left',
  },
});

export default RootStackNavigator;
