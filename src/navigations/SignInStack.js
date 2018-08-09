import { createStackNavigator } from 'react-navigation';
import SignInScreen from '../screens/SignInScreen';

export default createStackNavigator(
  {
    SignInScreen: { screen: SignInScreen },
  },
  {
    headerMode: 'float',
    navigationOptions: _ => ({
      title: 'Welcome',
    }),
  }
);
