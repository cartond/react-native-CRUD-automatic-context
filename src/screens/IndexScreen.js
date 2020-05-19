import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext';
import { TouchableOpacity } from 'react-native-gesture-handler';

const IndexScreen = () => {
  const {data, addBlogPost} = useContext(BlogContext)

  return (
    <View>
      <Text>Index Screen {data.length}</Text>
      <FlatList 
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>
        }}
      />
      <Button title="Add Post" onPress={addBlogPost} />
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