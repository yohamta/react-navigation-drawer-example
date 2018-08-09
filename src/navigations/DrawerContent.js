import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';

class DrawerContent extends Component {
  state = {
    channels: [{ channelName: 'foo' }, { channelName: 'bar' }],
  };

  navigateToScreen = route => () => {
    const navigate = NavigationActions.navigate({
      routeName: route,
      channel,
    });
    this.props.navigation.dispatch(navigate);
  };

  renderChannelButtons() {
    return this.state.channels.map(({ channelName }) => (
      <TouchableOpacity onPress={this.navigateToScreen(channelName)}>
        <Text>{channelName}</Text>
      </TouchableOpacity>
    ));
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <ScrollView>
          {this.renderChannelButtons()}
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
  },
};

export default DrawerContent;
