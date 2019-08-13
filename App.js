import React from 'react'
import { AppLoading, Asset, Font, Icon } from 'expo'
import Main from './src/Main'
import { StoreProvider } from './src/store'

const Application = () => (
  <StoreProvider>
    <Main />
  </StoreProvider>
)

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    } else {
      return <Application />
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png')
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        ...Icon.MaterialIcons.font,
        regular: require('./assets/fonts/Muli/Muli-Regular.ttf'),
        bold: require('./assets/fonts/Muli/Muli-Bold.ttf'),
        light: require('./assets/fonts/Muli/Muli-Light.ttf')
      })
    ])
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }
}
