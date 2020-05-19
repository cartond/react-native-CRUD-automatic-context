import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context)

  return (
    <View>
      <Text>Index Screen {state.length}</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList 
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  add:{
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4
  }
});

export default IndexScreen;