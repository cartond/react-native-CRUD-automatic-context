import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons'; 

const IndexScreen = ({ navigation }) => {
  const { state, getBlogPosts, deleteBlogPost } = useContext(Context)

  useEffect(() => {
    getBlogPosts()
  }, [])

  return (
    <View>
      <FlatList 
        data={state}
        keyExtractor={(blogPost) => blogPost.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash" style={styles.icon } />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  );
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: <TouchableOpacity onPress={() => navigation.navigate('Create')}>
      <Feather name="plus" style={styles.headerIcon } />
    </TouchableOpacity>
  };
};

const styles = StyleSheet.create({
  headerIcon: {
    fontSize: 30,
    paddingRight: 10
  },
  row:{
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  },
  add:{
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4
  }
});

export default IndexScreen;