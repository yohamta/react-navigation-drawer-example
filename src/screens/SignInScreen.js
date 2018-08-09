import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Button } from 'react-navigation';

export default () => {
  return (
    <View style={styles.containerStyle}>
      <Button
        title="Sign in"
        onPress={() => {
          this.props.navigation.navigate('DrawerStack');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
