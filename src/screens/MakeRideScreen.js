import React from 'react'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { colors } from '../const'
import { SimpleLineIcons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'

const MakeRideScreen = props => {
  const onDone = () => props.navigation.navigate('HomeScreen')

  const AnimatedIcon = Animatable.createAnimatableComponent(MaterialCommunityIcons)
  return (
    <Container>
      <AnimatedIcon
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
        name="cellphone-wireless"
        color={colors.white}
        size={120}
      />
      <Title>Aproxime o seu smartphone da leitora para efetuar o pagamento.</Title>
      <Button onPress={onDone} style={{ width: '100%' }}>
        <ButtonText>Concluir</ButtonText>
      </Button>
    </Container>
  )
}

const Container = styled(LinearGradient).attrs({ colors: [colors.primaryDark, colors.primary] })`
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 40px;
`

const Title = styled.Text`
  color: ${colors.white};
  font-size: 22px;
  text-align: center;
  font-family: 'regular';
  margin-top: 50px;
  margin-bottom: 75px;
`

const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  border-radius: 35px;
  padding: 12px 15px;
  background-color: ${colors.white};
  border-color: ${colors.primaryDark};
`

const ButtonText = styled.Text`
  font-size: 20px;
  color: ${colors.primaryDark};
  text-align: center;
  text-transform: uppercase;
  font-family: 'regular';
`

MakeRideScreen.navigationOptions = {
  tabBarVisible: false
}
export default MakeRideScreen
