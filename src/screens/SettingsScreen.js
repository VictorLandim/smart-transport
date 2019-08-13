import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import Header from '../components/Header'

const SettingsScreen = () => {
  return (
    <Container>
      <Header title="Opções" />
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
`

export default SettingsScreen
