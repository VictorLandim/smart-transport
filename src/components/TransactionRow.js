import React from 'react'
import styled from 'styled-components/native'
import { colors } from '../const'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

export default props => {
  let iconName = ''
  let rightIconName = 'plus'

  if (props.type === 'metro') {
    iconName = 'md-train'
    rightIconName = 'minus'
  } else if (props.type === 'bus') {
    iconName = 'md-bus'
    rightIconName = 'minus'
  } else {
    iconName = 'md-card'
  }

  return (
    <TransactionRow>
      <Ionicons name={iconName} size={22} color={colors.gray} />
      <Content>
        <Title>{props.title}</Title>
        <Date>{props.date}</Date>
      </Content>
      <MaterialCommunityIcons
        style={{ marginLeft: 'auto' }}
        name={rightIconName}
        size={26}
        color={props.type === 'credit' ? colors.green : colors.red}
      />
    </TransactionRow>
  )
}

const TransactionRow = styled.View`
  padding: 12px 20px;
  border-width: 1px;
  border-color: ${colors.grayLight};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
`

const Title = styled.Text`
  color: ${colors.gray};
  font-family: 'regular';
  font-size: 16px;
  text-align: left;
`

const Date = styled.Text`
  font-size: 12px;
  font-family: 'regular';
  color: ${colors.gray};
  text-align: left;
`
const Content = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-left: 25px;
`
