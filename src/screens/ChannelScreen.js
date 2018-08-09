import React, { Component } from 'react';
import { Animated, Text } from 'react-native';

export default class ChannelScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Channel',
  };

  render() {
    return (
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text>Hello</Text>
      </Animated.View>
    );
  }
}
