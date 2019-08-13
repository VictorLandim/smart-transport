import React from 'react'
import { ImageBackground } from 'react-native'
import styled from 'styled-components/native'
import Button from '../components/Button'
import { colors } from '../const'
import { LinearGradient } from 'expo-linear-gradient'
import Buttom from '../components/Button'

const SplashScreen = props => {
  const onButtonClick = () => props.navigation.navigate('BalanceScreen')

  return (
    <Container>
      <ImageBackground
        source={require('../../assets/images/bus-splash.png')}
        style={{ width: '100%', height: '100%' }}
      />
      <Overlay />
      <Content>
        <Heading>Smart Transport</Heading>
        <SubHeading>{'Utilize o transporte público \ne ganhe benefícios exclusivos.'}</SubHeading>
        <Button
          style={{ width: '70%', display: 'block' }}
          size="m"
          inverted
          value="Começar"
          onPress={onButtonClick}
        />
      </Content>
    </Container>
  )
}

const SubHeading = styled.Text`
  color: ${colors.white};
  font-family: 'regular';
  font-size: 24px;
  margin-bottom: 110px;
  text-align: center;
`
const Heading = styled.Text`
  color: ${colors.white};
  font-family: 'bold';
  font-size: 42px;
  margin-bottom: 40px;
`
const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
const Overlay = styled(LinearGradient).attrs({ colors: [colors.primaryDark, colors.primary] })`
  flex: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.9;
`
const Content = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
export default SplashScreen
