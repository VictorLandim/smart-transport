import React from 'react'
import { Platform, StatusBar } from 'react-native'
import styled from 'styled-components/native'
import RootNavigator from './navigation/RootNavigator'
import { colors } from './const'

export default () => {
  return (
    <AppContainer>
      <StatusBar barStyle="light-content" hidden={false} />
      <Content>
        <RootNavigator />
      </Content>
    </AppContainer>
  )
}

const AppContainer = styled.View`
  flex: 1;
  background-color: ${colors.primary};
`

const Content = styled.View`
  flex: 1;
`
