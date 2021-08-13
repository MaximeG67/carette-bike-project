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
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductsScreen'
// import LoginScreen from './screens/LoginScreen'


const AuthContext = React.createContext();

function LoginScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => signIn({ username, password })} />
    </View>
  );
}






const Tab = createBottomTabNavigator();
function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={HomeScreen} />
      <Tab.Screen name="Messages" component={ProductScreen} />
    </Tab.Navigator>
  );
}

const SideNavLogged = createDrawerNavigator();
function HomeLogged() {
  return (
  <SideNavLogged.Navigator>
    <SideNavLogged.Screen name='Home Logged' component={Home} />
    <SideNavLogged.Screen name="Account" component={ProductScreen} />
  </SideNavLogged.Navigator>
  );
}

const SideNavFree = createDrawerNavigator();
Function HomeFree() {
  return (
    <SideNavLogged.Navigator>
      <SideNavLogged.Screen name='Home Logged' component={Home} />
      <SideNavLogged.Screen name="Account" component={ProductScreen} />
  </SideNavLogged.Navigator>
  );
}



const Drawer = createStackNavigator();
export default function App() {

  //............................................
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );
  //...........................................................

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          {state.isLoading ? (
          <Drawer.Screen name="Home" component={Home} />
          ) : state.userToken == null ? (
          <Drawer.Screen name="Connexion" component={LoginScreen} />
          ) : (
            <Drawer.Screen name="Home" component={HomeLogged} />
            )}
        </Drawer.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}