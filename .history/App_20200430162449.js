// import * as React from 'react';
// import { Button, Text, Platform, StatusBar, StyleSheet, View } from 'react-native';
// import { SplashScreen } from 'expo';
// import * as Font from 'expo-font';
// import { Ionicons } from '@expo/vector-icons';


// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from '@react-navigation/drawer';

// import Navigation from './navigation/Navigation';
// import useLinking from './navigation/useLinking';

// //....................................................................................
// function Feed({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Feed Screen</Text>
//       <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
//       <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
//     </View>
//   );
// }

// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Close drawer"
//         onPress={() => props.navigation.closeDrawer()}
//       />
//       <DrawerItem
//         label="Toggle drawer"
//         onPress={() => props.navigation.toggleDrawer()}
//       />
//     </DrawerContentScrollView>
//   );
// }

// function Notifications() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Notifications Screen</Text>
//     </View>
//   );
// }

// function MyDrawer() {
//   return (
//     <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Notifications" component={Notifications}/>
//     </Drawer.Navigator>
//   );
// }
// //......................................................................................
// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// export default function App(props) {
//   const [isLoadingComplete, setLoadingComplete] = React.useState(false);
//   const [initialNavigationState, setInitialNavigationState] = React.useState();
//   const containerRef = React.useRef();
//   const { getInitialState } = useLinking(containerRef);

//   // Load any resources or data that we need prior to rendering the app
//   React.useEffect(() => {
//     async function loadResourcesAndDataAsync() {
//       try {
//         SplashScreen.preventAutoHide();

//         // Load our initial navigation state
//         setInitialNavigationState(await getInitialState());

//         // Load fonts
//         await Font.loadAsync({
//           ...Ionicons.font,
//           'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
//         });
//       } catch (e) {
//         // We might want to provide this error information to an error reporting service
//         console.warn(e);
//       } finally {
//         setLoadingComplete(true);
//         SplashScreen.hide();
//       }
//     }

//     loadResourcesAndDataAsync();
//   }, []);
//   console.log(Stack)
//   if (!isLoadingComplete && !props.skipLoadingScreen) {
//     return null;
//   } else {
//     return (
//       <View style={styles.container}>
//         {Platform.OS === 'ios' && <StatusBar barStyle="default" />}

          
 
//         <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
//         {/* <MyDrawer /> */}
//           <Stack.Navigator>
//             <Stack.Screen 
//               name="Root" 
//               component={Navigation} 
              
//               />
//           </Stack.Navigator>
//         </NavigationContainer>
        
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });


// App.js

import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductsScreen'


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={ProductScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}