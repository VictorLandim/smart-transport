import React from 'react'
import styled from 'styled-components/native'
import { colors } from '../const'

export default props => <TextInput {...props} />

const TextInput = styled.TextInput`
  border-radius: 35px;
  color: ${colors.black};
  border: 2px solid black;
  padding: 15px;
  padding-left: 25px;
  margin-bottom: 15px;
  font-size: 20px;
`
