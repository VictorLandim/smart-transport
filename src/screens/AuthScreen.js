import React, { useState } from 'react'
import styled from 'styled-components/native'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { colors } from '../const'

const AuthScreen = props => {
  const [cpf, setCpf] = useState('')
  const [password, setPassword] = useState('')

  const onLogin = () => props.navigation.navigate('BalanceScreen')
  const onNavigateRegister = () => props.navigation.navigate('Register')

  return (
    <Container>
      <Heading>{'Smart \n Transport'}</Heading>
      <Form>
        <TextInput
          selectionColor="black"
          keyboardType="number-pad"
          placeholder="CPF"
          placeholderColor="black"
          value={cpf}
          onChangeText={setCpf}
        />
        <TextInput
          selectionColor="black"
          placeholder="Senha"
          placeholderColor="black"
          secureTextEntry
          password={password}
          onChangeText={setPassword}
        />
        <Button onPress={onLogin} value="Login" />
      </Form>
    </Container>
  )
}

const textInputStyles = {
  marginBottom: 20
}

const Heading = styled.Text`
  text-align: center;
  color: #303030;
  font-weight: bold;
  font-size: 42px;
  margin-bottom: 65px;
  text-transform: uppercase;
`

const Title = styled.Text`
  text-align: center;
  color: black;
  font-size: 26px;
  margin-bottom: 40px;
`

const Container = styled.KeyboardAvoidingView.attrs({ behavior: 'padding' })`
  flex: 1;
  padding: 15px;
  align-items: center;
  justify-content: center;
`

const Form = styled.View`
  width: 75%;
  margin: 0 auto;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
`

AuthScreen.navigationOptions = {
  // header: null
}

export default AuthScreen
