import React from 'react'
import { Drawer, Appbar } from 'react-native-paper'
import styled from 'styled-components'
import { withNavigation } from 'react-navigation'

const AppDrawer = props => (
  <Container>
    <Appbar.Header>
      <Appbar.Content title="" subtitle="" />
      <Appbar.Action icon="menu" onPress={() => props.navigation.closeDrawer()} />
    </Appbar.Header>
    <Drawer.Section title="Sua conta">
      <Drawer.Item icon="person-outline" label="Perfil" active={true} onPress={() => {}} />
      <Drawer.Item icon="attach-money" label="Saldo" active={false} onPress={() => {}} />
      <Drawer.Item
        icon="credit-card"
        label="Adicionar crédito"
        active={false}
        onPress={() => props.navigation.navigate('Credit')}
      />
    </Drawer.Section>
  </Container>
)

const Container = styled.View`
  /* margin-top: 30px; */
`
export default withNavigation(AppDrawer)
