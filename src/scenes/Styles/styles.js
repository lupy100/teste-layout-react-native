import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #333;
`;

export const ContainerPost = styled.View`
  margin: 10px 20px;
  padding: 20px;
  border-radius: 3px;
  background-color: #fff;
`;

export const PostTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const PostDescription = styled.Text`
  color: #666;
`;

export const CenterInput = styled.View`
  align-items: center;
  width: 100%;
`;

export const Input = styled.TextInput`
  width: 50%;
  margin-top: 10px;
  border-radius: 3px;
  color: #666;
  background: #fff;
`;
