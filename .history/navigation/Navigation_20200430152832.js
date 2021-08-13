// Navigation/Navigation.js

import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import ProductScreen from '../Components/ProductScreen'
// import Favorites from '../Components/Favorites'

const SearchStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  },
  // FilmDetail: {
  //   screen: FilmDetail
  // }
})

const MoviesTabNavigator = createBottomTabNavigator({
  Home: {
    screen: SearchStackNavigator
  },
  Products: {
    screen: Favorites
  }
})

export default createAppContainer(MoviesTabNavigator)
