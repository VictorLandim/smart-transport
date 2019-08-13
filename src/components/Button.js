import React from 'react'
import { TouchableNativeFeedback } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '../const'

export default props => (
  <Button {...props}>
    <ButtonText inverted={props.inverted} size={props.size}>
      {props.value}
    </ButtonText>
  </Button>
)

const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  flex: 1;
  border-radius: 35px;
  padding: 12px 15px;
  background-color: ${({ inverted }) => (inverted ? colors.white : colors.primaryDark)};
  border-color: ${colors.primaryDark};
  border-width: ${({ inverted }) => (inverted ? 2 : 0)};
`

const ButtonText = styled.Text`
  font-size: ${({ size }) => {
    if (size === 's') return '13px'
    if (size === 'm') return '17px'
    if (size === 'l') return '26px'
    return '22px'
  }};
  color: ${({ inverted }) => (inverted ? colors.primaryDark : colors.white)};
  text-align: center;
  text-transform: uppercase;
  font-family: 'regular';
`
