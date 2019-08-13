import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { colors } from '../const'
import { SimpleLineIcons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import Title from '../components/Title'
import { TouchableNativeFeedback } from 'react-native'

const HomeScreen = props => {
  const onRidePress = () => props.navigation.navigate('MakeRideScreen')

  const onWalletPress = () => props.navigation.navigate('CardStack')
  const onHistoryPress = () => props.navigation.navigate('RidesStack')
  const onRedeemPress = () => props.navigation.navigate('PointsStack')
  return (
    <Container>
      <Gradient>
        <Top>
          <Image />
          <Name>Olá, Joana Almeida!</Name>
          <SimpleLineIcons name="options-vertical" size={28} color={colors.white} />
        </Top>
        <Bottom>
          <BottomBlock>
            <BottomTitle>Saldo</BottomTitle>
            <BottomValue>
              <BottomCurrency>R$</BottomCurrency>
              101,00
            </BottomValue>
          </BottomBlock>
          <BottomBlock>
            <BottomTitle>Pontos</BottomTitle>
            <BottomValue>56</BottomValue>
          </BottomBlock>
          <BottomQuestion>
            <SimpleLineIcons name="question" color={colors.white} size={18} />
          </BottomQuestion>
        </Bottom>
      </Gradient>
      <BottomButtonContainer>
        <BottomButton onPress={onWalletPress}>
          <MaterialIcons name="attach-money" size={36} color={colors.black} />
          <BottomButtonText>Carteira</BottomButtonText>
        </BottomButton>
        <BottomButton onPress={onHistoryPress}>
          <MaterialCommunityIcons name="restore-clock" size={36} color={colors.black} />
          <BottomButtonText>Histórico</BottomButtonText>
        </BottomButton>
        <BottomButton onPress={onRedeemPress}>
          <MaterialIcons name="redeem" size={36} color={colors.black} />
          <BottomButtonText>Resgatar</BottomButtonText>
        </BottomButton>
      </BottomButtonContainer>
      <Content>
        <Title>Iniciar viagem</Title>
        <ActionButtonContainer>
          <ActionButton>
            <ActionButtonRipple onPress={onRidePress}>
              <ActionButtonContent>
                <ActionButtonTextContainer>
                  <ActionButtonText>Metrô</ActionButtonText>
                  <MaterialIcons name="keyboard-arrow-right" size={36} color={colors.primaryDark} />
                </ActionButtonTextContainer>
                <ActionButtonIcon>
                  <MaterialIcons name="train" size={100} color={colors.primaryLight} />
                </ActionButtonIcon>
              </ActionButtonContent>
            </ActionButtonRipple>
          </ActionButton>

          <ActionButton>
            <ActionButtonRipple onPress={onRidePress}>
              <ActionButtonContent>
                <ActionButtonTextContainer>
                  <ActionButtonText>Ônibus</ActionButtonText>
                  <MaterialIcons name="keyboard-arrow-right" size={36} color={colors.primaryDark} />
                </ActionButtonTextContainer>
                <ActionButtonIcon>
                  <MaterialIcons name="directions-bus" size={100} color={colors.primaryLight} />
                </ActionButtonIcon>
              </ActionButtonContent>
            </ActionButtonRipple>
          </ActionButton>
          <ActionButton>
            <ActionButtonRipple onPress={onRidePress}>
              <ActionButtonContent>
                <ActionButtonTextContainer>
                  <ActionButtonText>Bicicleta</ActionButtonText>
                  <MaterialIcons name="keyboard-arrow-right" size={36} color={colors.primaryDark} />
                </ActionButtonTextContainer>
                <ActionButtonIcon>
                  <MaterialIcons name="directions-bike" size={100} color={colors.primaryLight} />
                </ActionButtonIcon>
              </ActionButtonContent>
            </ActionButtonRipple>
          </ActionButton>
        </ActionButtonContainer>
      </Content>
    </Container>
  )
}

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.whiteDark};
`
const Gradient = styled(LinearGradient).attrs({ colors: [colors.primaryDark, colors.primary] })`
  align-items: flex-start;
  justify-content: flex-end;
`

const Top = styled.View`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  width: 100%;
  padding: 25px 20px;
  border-bottom-color: rgba(255, 255, 255, 0.3);
  border-bottom-width: 1px;
`

const Image = styled.Image.attrs({ source: require('../../assets/images/profile.png') })`
  width: 55px;
  height: 55px;
  border-radius: 100px;
`

const Name = styled.Text`
  color: ${colors.white};
  text-align: center;
  font-size: 18px;
  font-family: 'regular';
  margin-right: auto;
  margin-left: 15px;
`

const Bottom = styled.View`
  width: 100%;
  position: relative;
  padding: 20px 15px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const BottomQuestion = styled.View`
  position: absolute;
  right: 20px;
  top: 15px;
`

const BottomBlock = styled.View`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const BottomTitle = styled.Text`
  font-size: 17px;
  color: ${colors.white};
  margin-bottom: 5px;
  text-align: center;
  font-family: 'light';
`

const BottomValue = styled.Text`
  font-size: 32px;
  color: ${colors.white};
  text-align: center;
  font-family: 'bold';
`

const BottomCurrency = styled.Text`
  font-family: 'regular';
  font-size: 20px;
  color: ${colors.white};
`

const BottomButtonContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-around;
  margin-top: -60px;
  padding: 0px 10px;
`

const BottomButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  width: 30%;
  height: auto;
  border-radius: 10px;
  background-color: ${colors.white};
  padding: 15px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  elevation: 2;
`

const BottomButtonText = styled.Text`
  color: ${colors.primaryDark};
  font-size: 16px;
  font-family: 'regular';
  text-align: center;
  margin-top: 15px;
`

const Content = styled.View`
  padding-top: 40px;
  padding-bottom: 20px;
`

const ActionButtonContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px 15px;
`

const ActionButton = styled.View`
  border-radius: 15px;
  overflow: hidden;
  width: 47%;
  height: 160px;
  background-color: ${colors.white};
  elevation: 5;
  margin-bottom: 20px;
`

const ActionButtonContent = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`

const ActionButtonRipple = styled.TouchableNativeFeedback.attrs({
  background: TouchableNativeFeedback.Ripple('rgba(105, 240, 174, 0.2)', false),
  useForeground: true
})``

const ActionButtonTextContainer = styled.View`
  width: 100%;
  position: absolute;
  top: 10px;
  left: 15px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`

const ActionButtonText = styled.Text`
  color: ${colors.primaryDark};
  font-family: 'bold';
  font-size: 24px;
`

const ActionButtonIcon = styled.View`
  position: absolute;
  bottom: -16px;
  right: -16px;
  z-index: -1;
`

export default HomeScreen
