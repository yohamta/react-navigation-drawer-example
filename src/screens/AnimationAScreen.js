import React, { Component } from 'react';
import { Animated, View, Text, Button, SafeAreaView, TouchableOpacity, Icon } from 'react-native';

export default class AnimationA extends Component {
  state = {
    fadeAnim: new Animated.Value(0),
  };

  static navigationOptions = {
    drawerLabel: 'AnimationA',
    headerLeft: (
      <View style={{ paddingHorizontal: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
          <Text>Menu</Text>
        </TouchableOpacity>
      </View>
    )
  };

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1000,
    }).start();
  }

  render() {
    let { fadeAnim } = this.state;
    return (
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text>Hello</Text>
        <Button title="Try it" />
      </Animated.View>
    );
  }
}
