import React from 'react'
import { Appbar } from 'react-native-paper'
import { withNavigation } from 'react-navigation'

const AppHeader = props => {
  const { onBack, title = 'Title', subtitle = 'Subtitle', onDrawer } = props

  return (
    <Appbar.Header>
      {onBack && <Appbar.BackAction onPress={onBack} />}
      <Appbar.Content title={title} subtitle={subtitle} />
      <Appbar.Action icon="menu" onPress={() => props.navigation.openDrawer()} />
    </Appbar.Header>
  )
}

export default withNavigation(AppHeader)
