import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';

import Card from './components/Card';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <TitleBar>
          <Avatar source={require('./assets/avatar1.jpg')} />
          <Title>Welcome Back!</Title>
          <Name>Kevin</Name>
        </TitleBar>
        <SubTitle>Continue Learning</SubTitle>
        <ScrollView horizontal={true}>
          <Card
            title="Styled Components"
            image={require('./assets/background1.jpg')}
            logo={require('./assets/logo-react.png')}
            caption="React Native"
            stack="5 of 12 section"
          />
          <Card
            title="Gesture"
            image={require('./assets/background2.jpg')}
            logo={require('./assets/logo-swift.png')}
            caption="Advanced Swift"
            stack="3 of 20 section"
          />
          <Card
            title="Styled Components"
            image={require('./assets/background1.jpg')}
            logo={require('./assets/logo-framerx.png')}
            caption="React Native"
            stack="5 of 12 section"
          />
        </ScrollView>
      </Container>
    );
  }
}

const Container = styled.View`
  background-color: #f0f3f5;
  flex: 1;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 65px;
  padding-left: 80px;
`;

const Avatar = styled.Image`
  background: black;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  color: #b8bece;
  font-size: 16px;
  font-weight: 500;
`;

const Name = styled.Text`
  color: #364560;
  font-size: 20px;
  font-weight: bold;
`;

const SubTitle = styled.Text`
  color: #b8bece;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 50px 0 0 20px;
`;
