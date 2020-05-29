import React, { useContext } from 'react';
import { StyleSheet} from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm'

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context)

  // addBlogPost(title, content, () => {
  //   navigation.navigate('Index')
  // })

  return <BlogPostForm />
}

const styles = StyleSheet.create({

});

export default CreateScreen;