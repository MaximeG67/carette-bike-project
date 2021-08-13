// App.js

import * as React from 'react';
import { AsyncStorage, ActivityIndicator, Text, View, Alert, Button } from 'react-native';
import { Icon, Overlay } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DrawerActions, CommonActions, useNavigationState } from '@react-navigation/native';
import styles from './assets/styles/stylesLoading';
import { requestLogin, getSignout } from './API/ApiRequest'
import AuthContext from './Context/Context';
import Hamburger from 'react-native-animated-hamburger'
import DrawerLog from './navigation/DrawerlogNav'
import DrawerUnlog from './navigation/DrawerUnlogNav'
import { translate } from "./locale/local"
import { TouchableOpacity } from 'react-native-gesture-handler';

// import {Provider} from 'react-redux'
// import Store from './Store/configureStore'


// const navigationRef = React.createRef();

// function navigate(name, params) {
//   navigationRef.current && navigationRef.current.navigate(name, params);
// }

class ShoppingCartIcon extends React.Component {
  render() {
      return(
        <TouchableOpacity onPress={() => {
          Alert.alert(
            "Votre panier est vide",
          )
        }}>
          <View style={{paddingRight:15,width:100,height:50}}>
              <View style={{position:'absolute',height:30,width:30,right:25,bottom:15,borderRadius:15,alignItems:'center',justifyContent:'center',zIndex:2000,backgroundColor:'rgba(216,216,216,0.8)'}}>
                  <Text style={{color:'black',fontWeight:'bold'}}>0</Text>
              </View>
              <Icon name ='shopping-cart' size={30}/>
          </View>
        </TouchableOpacity>
      )
  }       
  }

class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
      
    }
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    this.setState({active: newProps.isOpen()});
  }

  render() {

    return(
      
        <Hamburger
        active={this.state.active}
        type="spinArrow"
        onPress={() => this.props.toggle() } >

        </Hamburger>
    )
  }
}



// create a stack navigation into function app using different contact function
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
            isLoading: false,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            isLoading: false
          };
          case 'IS_LOADING':
            return {
              isLoading: true
            }
          
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
    // try {
    // getAllProducts().then(response => console.log(response))
    // } catch(e) {
    //   console.log(e)
    // }
    const bootstrapAsync = async () => {
      let userToken, autoConnect;
      
      try {
        userToken = await AsyncStorage.getItem('userToken');
        autoConnect = JSON.parse(await AsyncStorage.getItem('autoConnect'));
      } catch (e) {
        // Restoring token failed
      }
      if (autoConnect && userToken) {
        dispatch({ type: 'RESTORE_TOKEN', token: userToken });
        
      } else if (!autoConnect && userToken) {
        
        dispatch({ type: 'SIGN_OUT' });
        
        try {
          getSignout(userToken).then(response => console.log(response));
          act = await AsyncStorage.multiRemove(['userToken', 'autoConnect'], () => {});
        } catch (e) {
          //
        }
        
        
      } else {
       
        dispatch({ type: 'SIGN_OUT' });
      }
      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      
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
          dispatch({ type: 'IS_LOADING' })
          requestLogin(data.data).then( response => {
           
            const saveToken = async () => {
              let userToken;
              try { //INSERER DES DONNEES DANS LE TEL , CEE QUI DONNE DES DONNEES ASYNCHRONES 
                userToken = await AsyncStorage.multiSet([['userToken', response],['email', data.data.username], ['checked', data.checked], ['autoConnect', data.autoConnect]], () => {});
        
              } catch (e) {
                console.log(e)
              }
            };

            // const saveEmail = async () => {
            //   let userToken;
            //   try {
            //     userToken = await AsyncStorage.setItem('email', data.username);
        
            //   } catch (e) {
            //     console.log(e)
            //   }
            // };

            if ( response == "[Auth] Unsuccessful Authentication" || response == "[Auth] Authentication data missing") {
              
              dispatch({ type: 'SIGN_OUT' }) ;
              // () => {navigate('Connexion')}
              // console.log(naavigationRef)
              Alert.alert(
                "Erreur",
                "Login ou mot de passe incorrect",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => console.log() }
                ],
                { cancelable: false }
                
              );
              

            } else {
              saveToken(response);
              dispatch({ type: 'SIGN_IN', token: response });
            }
            
          });
         
      },
      signOut: async data => {

        const removeData = async () => {
          let checked, autoConnect;
          try {
            checked = JSON.parse(await AsyncStorage.getItem('checked'));
            autoConnect = JSON.parse(await AsyncStorage.getItem('autoConnect'));

            
            if (checked && !autoConnect) {
              userToken = await AsyncStorage.multiRemove(['userToken', 'checked', 'autoConnect'], () => {});
              getSignout(data.token).then(response => console.log(response))
              
            } else {
              userToken = await AsyncStorage.multiRemove(['userToken', 'email', 'checked', 'autoConnect'], () => {});
              getSignout(data.token).then(response => console.log(response))
            }
    
          } catch (e) {
            console.log(e)
          }
          
        };

        removeData()
        
        dispatch({ type: 'SIGN_OUT'})},
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

  const _displayLoading= () => {
 
      return ( 
        <Overlay
        overlayStyle={{height: 0, width: 0}}
        fullScreen={false}
        animationType="fade"
        transparent={false}
        isVisible={true}
        
        
        
      >
        
        <View style={styles.centeredView}>
          
          <View style={styles.modalView}>
          {/* <WebView
        
        
        source={{ uri: 'https://carette4.odoo.com/web/signup?' }}

        /> */}
          <ActivityIndicator size='large' style={{ position: "absolute", top:  17, left:  17 }}/>


              
            
          </View>
        </View>
      </Overlay>
      )
    
  }
  //...........................................................
  
  let test = true;
  return (

    <AuthContext.Provider value={authContext} >
      {/* <Provider store={Store}> */}
      <NavigationContainer>
        <Drawer.Navigator >
          {state.isLoading ? (
          <Drawer.Screen name="Home" component={_displayLoading} />
          ) : state.userToken == null ? (
          <Drawer.Screen 
          
              name="Connectez-vous" 
              component={DrawerUnlog}  
          options={({navigation}) => ({headerTitle: () => {
            try {
            return(<Text>{navigation.dangerouslyGetState().routes[0].state.routeNames[navigation.dangerouslyGetState().routes[0].state.index]}</Text>)
            } catch(e) {
              return (<Text>HomeFree</Text>)
            }
            
            },
                                                    headerRight: () => 
                                                      <ShoppingCartIcon/>
           ,
                                                    headerLeft: () =>  <Burger 
                                                               isOpen={() => {
                                                                try {
                                                                  if (navigation.dangerouslyGetState().routes[0].state.history[navigation.dangerouslyGetState().routes[0].state.history.length-1].type=='route'){
                                                                    return false;
                                                                  } else {
                                                                    return true
                                                                  }
                                                                }
                                                                catch(e) {
                                                                  return(false)
                                                                }
                                                               }}
                                                                
                                                                toggle={()=> {
                                                                //  console.log(navigation.dangerouslyGetState())
                                                                  navigation.dispatch(DrawerActions.toggleDrawer())}}/>})}/>
          
          ) : (
            <Drawer.Screen name="Home Logged" component={DrawerLog}/>
          )}
        </Drawer.Navigator>
      </NavigationContainer>
      {/* </Provider> */}
    </AuthContext.Provider>

  );
}

// function Burger({isOpen, toggle}) {

//   // const [active4, setActive4]  = React.useState(false)
//   // console.log(isOpen())
//   // const test = useIsDrawerOpen();
//   console.log(isOpen())
//   const [ active, setActive ] = React.useState(false)
//   if (isOpen()=='route') {
//     setActive(true)
//   } else {
//     setActive(false)
//   }
//   console.log(active)
//   return(
//       <Hamburger
//       active={active}
//       type="arrow"
//       onPress={() => {
//       toggle()}} 
//       >

//       </Hamburger>
//   )
// }