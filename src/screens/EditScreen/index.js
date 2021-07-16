import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EditScreen = ({ route, navigation }) => {
  const { id } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Edit, { navigation.route(id) }</Text>
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