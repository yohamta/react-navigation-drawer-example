import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class RankingScreen extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#eee', flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}}>Ranking</Text>
      </View>
    );
  }
}
