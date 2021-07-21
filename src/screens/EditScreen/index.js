import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../../context/BlogContext';

const EditScreen = ({  route, navigation }) => {
  const { state } = useContext(Context);
  const { id } = route.params;

  const blogPost = state.find (blogPost => blogPost.id === id);

  return (
    <View>
      <View style={styles.header}>
      <TouchableOpacity> 
        <Text>{id}</Text> 
       </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    marginLeft: 355,
  },
});

export default EditScreen;
