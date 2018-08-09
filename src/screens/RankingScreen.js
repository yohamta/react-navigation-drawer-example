import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class RankingScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Ranking',
  };

  render() {
    return (
      <View style={{backgroundColor: '#eee', flex: 1}}>
        <Text>Hello</Text>
      </View>
    );
  }
}
