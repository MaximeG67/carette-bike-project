// Navigation/Navigation.js

import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  FilmDetail: {
    screen: FilmDetail
  }
})

const MoviesTabNavigator = createBottomTabNavigator({
  Search: {
    screen: SearchStackNavigator
  },
  Favorites: {
    screen: Favorites
  }
})

export default createAppContainer(MoviesTabNavigator)
