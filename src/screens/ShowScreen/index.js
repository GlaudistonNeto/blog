import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({  route, navigation }) => {
  const { state } = useContext(Context);
  const { id } = route.params;

  const blogPost = state.find (blogPost => blogPost.id === id);

  return (
    <View>
      <View style={styles.header}>
      <TouchableOpacity> 
        <Text>{blogPost.title}</Text> 
        <Text>{blogPost.content}</Text> 
       </TouchableOpacity>
      </View>
    </View>
    // Make it goes to the right edit screen with the id of post
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    marginLeft: 355,
  },
});

export default ShowScreen;
