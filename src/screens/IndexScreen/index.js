import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../../context/BlogContext';  // image context instead
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(Context);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Create')}>
        <Feather style={styles.touchable} name="plus" size={30} />
      </TouchableOpacity>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
              <View style={styles.row}>
                <Text style={styles.title}>{item.title} - {item.id}</Text>
                <TouchableOpacity>
                  <Feather style={styles.icon}
                    name="trash"
                    onPress={() => deleteBlogPost(item.id)}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'grey'
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
    color: '#ff2222'
  },
  touchable: {
    marginLeft: 355,
  },
});

export default IndexScreen;
