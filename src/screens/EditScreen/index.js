import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EditScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Edit</Text>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, textStyle: {
    fontSize: 20,
  },
});

export default EditScreen;