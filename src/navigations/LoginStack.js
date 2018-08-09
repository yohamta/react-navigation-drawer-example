import { createStackNavigator } from 'react-navigation';
import SignInScreen from '../screens/SignInScreen';

export default createStackNavigator(
  {
    SignInScreen: { screen: SignInScreen },
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
