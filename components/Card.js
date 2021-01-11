import React from 'react';
import styled from 'styled-components';

const Card = (props) => {
  return (
    <Container>
      <Cover>
        <BgImage source={props.image} />
        <Title>{props.title}</Title>
      </Cover>
      <Content>
        <Logo source={props.logo} />
        <Wrapper>
          <Caption>{props.caption}</Caption>
          <Stack>{props.stack}</Stack>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default Card;

const Container = styled.View`
  background-color: #ffffff;
  width: 315px;
  height: 280px;
  border-radius: 15px;
  margin: 20px 0 0 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  overflow: hidden;
`;

const BgImage = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  color: white;
  width: 175px;
  font-size: 25px;
  font-weight: bold;
  margin: 30px 0 0 20px;
`;

const Content = styled.View`
  height: 80px;
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
`;

const Wrapper = styled.View`
  margin-left: 10px;
`;

const Logo = styled.Image`
  width: 43px;
  height: 43px;
`;

const Caption = styled.Text`
  color: #364560;
  font-size: 20px;
  font-weight: 600;
`;

const Stack = styled.Text`
  color: #b8bece;
  font-size: 15px;
  text-transform: uppercase;
  margin-top: 3px;
`;
