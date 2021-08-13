// Navigation/Navigation.js
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab_2 = createBottomTabNavigator();
export default function HomeUnlogNav() {
  return (
    <Tab_2.Navigator>
      <Tab_2.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}/>
      <Tab_2.Screen name="Messages" component={ProductScreen} options={{
          tabBarLabel: 'Produits',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="sale" color={color} size={size} />
          ),
        }}/>
    </Tab_2.Navigator>
  );
}
