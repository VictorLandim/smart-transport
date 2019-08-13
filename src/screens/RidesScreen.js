import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import Header from '../components/Header'

const RidesScreen = () => {
  return (
    <Container>
      <Header title="Viagens" />
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
`

export default RidesScreen
