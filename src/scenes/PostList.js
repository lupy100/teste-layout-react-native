// @flow
import React, { PureComponent } from 'react';
import {
  Container,
  ContainerPost,
  PostTitle,
  PostDescription,
  Input,
  CenterInput,
} from './Styles/styles';
import { TouchableNativeFeedback } from 'react-native';

class PostList extends PureComponent {
  state = {
    count: '',
  };

  render() {
    const { count } = this.state;
    const posts = [];
    for (let index = 0; index < Number(count); index++) {
      posts.push(
        <TouchableNativeFeedback key={index}>
          <ContainerPost>
            <PostTitle>Estudando React Native</PostTitle>
            <PostDescription>Lorem ipsum sit dolot ament...</PostDescription>
          </ContainerPost>
        </TouchableNativeFeedback>
      );
    }
    return (
      <Container>
        <CenterInput>
          <Input
            keyboardType="numeric"
            onChangeText={value => {
              this.setState({
                count: value,
              });
            }}
            value={count}
            placeholder="Quantidade de cards na lista"
          />
        </CenterInput>
        {posts}
      </Container>
    );
  }
}

export default PostList;
