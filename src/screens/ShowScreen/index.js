import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../../context/BlogContext';

const ShowScreen = ({  route, navigation }) => {
  const { state } = useContext(Context);
  const { id } =route.params;

  const blogPost = state.find (blogPost => blogPost.id === id);

  return (
    <View>
       <Text>{blogPost.id}</Text> 
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;