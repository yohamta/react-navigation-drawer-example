import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';

export default createStackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
  },
  {
    headerMode: 'float',
    navigationOptions: _ => ({
      headerStyle: { backgroundColor: '#E73536' },
      title: 'You are not logged in',
      headerTintColor: 'white',
    }),
  }
);
