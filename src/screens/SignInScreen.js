import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';

export default class SignInScreen extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#eee',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Text style={{ textAlign: 'center' }}>Home Content</Text>
        <Button
          title="Sign in"
          onPress={() => {
            this.props.navigation.navigate('MainStack');
          }}
        />
      </View>
    );
  }
}
