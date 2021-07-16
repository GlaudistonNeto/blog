import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../../context/BlogContext';

const ShowScreen = ({  route, navigation }) => {
  const { state } = useContext(Context);
  const { id } = route.params;

  const blogPost = state.find (blogPost => blogPost.id === id);

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.route('Edit', { id })}>
        <Text>{blogPost.title}</Text> 
        <Text>{blogPost.content}</Text> 
       </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
