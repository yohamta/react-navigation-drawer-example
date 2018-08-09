import React, { Component } from 'react';
import { Animated, View, Text, Button } from 'react-native';

export default class AnimationB extends Component {
  state = {
    fadeAnim: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 10000,
    }).start();
  }

  render() {
    let { fadeAnim } = this.state;
    return (
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text>Hello</Text>
      </Animated.View>
    );
  }
}
