import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import codePush from 'react-native-code-push';

const App = () => {
  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.Text}>App</Text>
    </View>
  );
};

export default codePush(App);

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  Text: {fontSize: 50, color: 'red'},
});
