import React from 'react'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { colors } from '../const'
import { SimpleLineIcons } from '@expo/vector-icons'

export default props => (
  <Header>
    <Title>{props.title}</Title>
    <Icon>
      <SimpleLineIcons name="options-vertical" size={28} color={colors.white} />
    </Icon>
  </Header>
)

const Header = styled(LinearGradient).attrs({ colors: [colors.primaryDark, colors.primary] })`
  padding: 15px;
  align-items: flex-start;
  justify-content: flex-end;
  height: 135px;
  position: relative;
`
const Title = styled.Text`
  color: ${colors.white};
  font-family: 'bold';
  font-size: 48px;
  letter-spacing: 2px;
`

const Icon = styled.View`
  position: absolute;
  top: 15px;
  right: 15px;
`
