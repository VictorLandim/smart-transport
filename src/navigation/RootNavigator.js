import React from 'react'
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation'
import { Text } from 'react-native'
import AuthScreen from '../screens/AuthScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import HomeScreen from '../screens/HomeScreen'
import BalanceScreen from '../screens/BalanceScreen'
import CreditScreen from '../screens/CreditScreen'
import ExchangePointsScreen from '../screens/ExchangePointsScreen'
import CreateCardScreen from '../screens/CreateCardScreen'
import RideDetailsScreen from '../screens/RideDetailsScreen'
import RidesScreen from '../screens/RidesScreen'
import SettingsScreen from '../screens/SettingsScreen'
import MakeRideScreen from '../screens/MakeRideScreen'
import Header from '../components/Header'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { colors } from '../const'

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

const TabBarIcon = ({ icon, focused, tintColor }) => (
  <Ionicons size={24} name={`md-${icon}`} color={tintColor} focused={focused} />
)

const RidesStack = createStackNavigator(
  {
    RidesScreen,
    RideDetailsScreen
  },
  {
    initialRouteName: 'RidesScreen',
    defaultNavigationOptions: {
      header: null
    },
    navigationOptions: ({ navigation }) => {
      const { routeName, routes } = navigation.state
      return {
        title: 'Histórico',
        tabBarIcon: ({ focused, tintColor }) => (
          <MaterialCommunityIcons size={24} name="bus-clock" color={tintColor} focused={focused} />
        )
      }
    }
  }
)

const PointsStack = createStackNavigator(
  {
    ExchangePointsScreen
  },
  {
    initialRouteName: 'ExchangePointsScreen',
    defaultNavigationOptions: {
      header: null
    },
    navigationOptions: ({ navigation }) => {
      const { routeName, routes } = navigation.state
      return {
        title: 'Pontos',
        tabBarIcon: ({ focused, tintColor }) => (
          <MaterialCommunityIcons
            size={24}
            name="star-circle"
            color={tintColor}
            focused={focused}
          />
        )
      }
    }
  }
)

const CardStack = createStackNavigator(
  {
    BalanceScreen,
    CreateCardScreen
  },
  {
    initialRouteName: 'BalanceScreen',
    defaultNavigationOptions: {
      header: null
    },
    navigationOptions: ({ navigation }) => {
      const { routeName, routes } = navigation.state
      return {
        title: 'Carteira',
        tabBarIcon: ({ focused, tintColor }) => TabBarIcon({ focused, tintColor, icon: 'card' })
      }
    }
  }
)

const SettingsStack = createStackNavigator(
  {
    SettingsScreen
  },
  {
    initialRouteName: 'SettingsScreen',
    defaultNavigationOptions: {
      header: null
    },
    navigationOptions: ({ navigation }) => {
      const { routeName, routes } = navigation.state
      return {
        title: 'Opções',
        tabBarIcon: ({ focused, tintColor }) => TabBarIcon({ focused, tintColor, icon: 'options' })
      }
    }
  }
)
const HomeStack = createStackNavigator(
  {
    HomeScreen,
    MakeRideScreen
  },
  {
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions: {
      header: null
    },
    navigationOptions: ({ navigation }) => {
      const { routeName, routes, index } = navigation.state
      return {
        tabBarVisible: index > 0 ? false : true,
        // tabBarVisible: navigation.state.routes[navigation.state.index].params.showTabBar,
        title: 'Início',
        tabBarIcon: ({ focused, tintColor }) => TabBarIcon({ focused, tintColor, icon: 'home' })
      }
    }
  }
)

const MainNavigator = createMaterialBottomTabNavigator(
  { HomeStack, CardStack, RidesStack, PointsStack, SettingsStack },
  {
    initialRouteName: 'HomeStack',
    defaultNavigationOptions: {
      // header: null
    },
    activeColor: colors.primaryDark,
    inactiveColor: colors.gray,
    barStyle: { backgroundColor: colors.white },
    shifting: false

    // createBottomTabs config!
    // tabBarOptions: {
    //   activeTintColor: colors.primaryDark,
    //   inactiveTintColor: colors.grayDark,
    //   style: {
    //     height: 65,
    //     paddingVertical: 5,
    //     backgroundColor: colors.white
    //   },
    //   labelStyle: {
    //     fontSize: 15,
    //     fontFamily: 'regular'
    //   }
    // }
  }
)

const SwitchNavigator = createSwitchNavigator(
  {
    AuthScreen,
    MainNavigator
  },
  {
    initialRouteName: 'MainNavigator',
    defaultNavigationOptions: {}
  }
)

const RootNavigator = createAppContainer(
  createStackNavigator(
    {
      WelcomeScreen,
      SwitchNavigator
    },
    {
      initialRouteName: 'WelcomeScreen',
      defaultNavigationOptions: {
        header: null
      }
    }
  )
)

export default RootNavigator
