import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import LoginStack from './LoginStack';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerContent from './DrawerContent';
import HomeScreen from '../screens/HomeScreen';
import RankingScreen from '../screens/HomeScreen';

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
          <Icon name="bars" size={20} color="#aaa" style={{ marginLeft: 15 }} />
        </TouchableOpacity>
      ),
      headerTitle: (
        <View style={styles.searchInputContainer}>
          <Icon name="search" size={20} color="#aaa" style={{ padding: 5 }} />
          <TextInput style={styles.searchInputStyle} underlineColorAndroid="transparent" placeholder="search" />
        </View>
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

const styles = StyleSheet.create({
  searchInputContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#999',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  searchInputStyle: {
    flex: 1,
    paddingRight: 10,
    textAlign: 'left',
  },
});

export default RootStackNavigator;
