


// App.js

import * as React from 'react';
import { AsyncStorage } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { ActivityIndicator, Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput, Button, Alert, Modal } from 'react-native';
import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } from '@react-navigation/drawer';
  import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

import HomeLoggedScreen from './screens/HomeLoggedScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductsScreen';
import AuthContext from './Context/Context';
import { UserConsumer }  from './Context/Context';
import { requestLogin } from './API/ApiRequest'
// import LoginScreen from './screens/LoginScreen'







class LoginScreen extends React.Component {

  constructor(props) {
    super(props)
 
    this.state = { username: "", password: ''}
  }

  

    UNSAFE_componentWillReceiveProps(newProps) {
      this.setState({username: newProps.route.params.email})
      alert(newProps.route.params.alert)
    }

    componentDidMount() {
      if (this.props.route.params) {
        this.setState({username: this.props.route.params.email})
        alert(this.props.route.params.alert)
      }
    }
 
  
  render() {
 
  return (
     
    <UserConsumer>{props => {

      return(
        
      <View style={styles.container}>
    

    <TextInput
      placeholder="Adresse e-mail"
      placeholderTextColor="white"
      value={this.state.username}
      onChangeText={text => this.setState({username: text})}
      editable={true}
      style={styles.header}
      editable={true}
    />
    <TextInput
      placeholder="Mot de passe"
      placeholderTextColor="white"
      value={this.state.password}
      onChangeText={text => this.setState({password: text})}
      secureTextEntry
      style={styles.header}
    />
    <Button 
    title="Se connecter" 
    type="outline"

    onPress={() => props.signIn( {username: this.state.username, password: this.state.password} )} 
    />

    <Button 
    style={styles.inscr}
    title="Pas encore inscrit ?"
    type="outline"
    onPress={() => this.props.navigation.navigate('Inscription')}
    />
    <Button 
    style={styles.inscr}
    title="mot de passe oublié"
    type="outline"
    onPress={() => this.props.navigation.navigate('Forgotten Password')}
    />
  
  </View>)}}
  
  </UserConsumer>
  );
  }
}
const styles = StyleSheet.create ({
  inscr :{
    color:"white",
    fontStyle:'italic',
    fontSize:12,
    justifyContent:"center"
  },
    logo :{
      width:280,
      height:260,
      resizeMode:'contain'
    },
    logo2 :{
      width:150,
      height:150,
      resizeMode:'contain',
      justifyContent:'center',
      alignItems:'center',

    },
    container : {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#36485f',
      paddingLeft: 60,
      paddingRight: 60,

    },
    header : {
    alignSelf:'stretch',
    height: 40,
    marginBottom: 30,
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
    color:'#fff',
    fontStyle:'italic'
    }
  })


function _signOut() {
  const { signOut } = React.useContext(AuthContext);
  
  return signOut;
}



// const Tab = createBottomTabNavigator();
// function Home() {
//   return (
//     <Tab.Navigator>
//       {state.isLoading ? (
//       <Tab.Screen name="Feed" component={HomeScreen} />
//       ) : state.userToken == null ? (
//         <Tab.Screen name="Feed" component={HomeScreen} />
//         ) : (
//       <Tab.Screen name="Feed" component={HomeScreenLogged} />
//       )}
//       <Tab.Screen name="Messages" component={ProductScreen} />
//     </Tab.Navigator>
//   );
// }

class SignUp extends React.Component 
{

  constructor(props) {
    super(props)
    this.state = { runTest: `
    
    if (
      window.location.href!="https://carette4.odoo.com/web/signup?") {
                                window.ReactNativeWebView.postMessage(JSON.stringify({ email: document.querySelector('[itemprop="email"]').innerText}));
                                document.location.href="https://carette4.odoo.com/web/signup?";
                              } else if (document.querySelector('h1.mt-5')) {
                                window.ReactNativeWebView.postMessage(JSON.stringify({ alert : "fail"}))
                                document.location.href="https://carette4.odoo.com/web/signup?";
                              }
                              document.querySelector('button.btn').addEventListener('click', () => {
                                window.ReactNativeWebView.postMessage(JSON.stringify({ click: true}));
                              })
                              document.getElementsByTagName('button')[0].remove();
                              document.getElementsByTagName('a')[0].remove();
                              document.querySelector("a.btn").remove();
                              document.getElementsByTagName("footer")[0].remove();
                              var elements = document.getElementsByTagName('label')
                        while (elements[0]) elements[0].parentNode.removeChild(elements[0])
                            

                              function ffalse()
                          {
                                return false;
                          }
                          function ftrue()
                          {
                                return true;
                          }
                          document.onselectstart = new Function ("return false");
                          if(window.sidebar)
                          {
                                document.onmousedown = ffalse;
                                document.onclick = ftrue;
                          }
                          
                          `, isLoading: true, email: ""
                        };
  }
  _displayLoading() {
    if (this.state.isLoading) {
      return ( 
        <Modal>     
          <ActivityIndicator size='large' style={{ position: "absolute", top:  20, left:  20 }}/>
          </Modal>
      )
    }
  }

  
  
    render() {
      
      return (
        <View style={{flex: 1}}>
        <WebView
        style={{flex: 1}}
        source={{ uri: 'https://carette4.odoo.com/web/signup?' }}
        injectedJavaScript={this.state.runTest}
        onMessage={event => {
          
          
          let message = JSON.parse(event.nativeEvent.data);
          if (message.email) {

            this.props.navigation.navigate('Connexion', { email: message.email, alert: "congratulation, you are register" });
          } else if (message.alert) {
            
            alert('Un problème est survenu try again!!')
          } 
          else if (message.click) {
            
            this.setState({isLoading: true})
            
          }
          
        }}

        // onLoad={() => {this.setState({isLoading: false})}}
        

        onLoadStart = {event => {if (event.nativeEvent.url=="https://carette4.odoo.com/web/signup?") {
          console.log(event.nativeEvent.url)
          this.setState({isLoading: true})
          setTimeout(() => this.setState({isLoading: false}), 2000)
        } else {
          console.log(event.nativeEvent.url)
          this.setState({isLoading: true})
        }}}

          // renderLoading={()=> {return(<ActivityIndicator size='large' style={{ position: "absolute", top:  20, left:  20 }}/>)}}
          
        
            
                

              // }}
        />
        {this._displayLoading()}
        </View>

        
        

      );
    }
    
}

class ForgottenPassword extends React.Component {
  
  constructor(props) {
    super(props) 
    this.state= {runTest: `
    //document.body.addEventListener('beforePrint', () => {
      document.body.style.display='none'
    //})
    window.addEventListener('DOMContentLoaded', ()=> {
      window.stop
    })
                    

                        if (document.querySelector("p.alert.alert-success")) {
                          
                          window.ReactNativeWebView.postMessage(JSON.stringify({"alert": "success"}));
                          document.location.href="https://carette4.odoo.com/web/reset_password";
                         }
                         document.getElementsByTagName('button')[0].remove();
                         document.getElementsByTagName('a')[0].remove();
                         document.querySelector("div.d-flex").remove();
                         document.getElementsByTagName("footer")[0].remove();
  
  
                         function ffalse()
                   {
                           return false;
                   }
                   function ftrue()
                   {
                           return true;
                   }
                   document.onselectstart = new Function ("return false");
                   if(window.sidebar)
                   {
                           document.onmousedown = ffalse;
                           document.onclick = ftrue;
                   }
                   document.querySelector('button.btn.btn-primary').addEventListener('click', () => {
                    document.body.style.display='none'
                    
                    window.ReactNativeWebView.postMessage(JSON.stringify({"button": document.querySelector('input#login').value}));
                    
                   })
                   document.body.style.display='block'
                       
                        `, isLoading: true, email: '' }

  }
  _displayLoading() {
    if (this.state.isLoading) {
      return ( 
        <Modal>     
          <ActivityIndicator size='large' style={{ position: "absolute", top:  20, left:  20 }}/>
          </Modal>
      )
    }
  }
  
  render() {
    return (
      <View style={{flex: 1}}>
      <WebView
      style={{flex: 1}}
      source={{ uri: 'https://carette4.odoo.com/web/reset_password' }}
      injectedJavaScript={this.state.runTest}
      onMessage={event => {

        let message = JSON.parse(event.nativeEvent.data)

        if (message.button) {
          this.setState({isLoading: true, email: message.button})

        } else if (message.alert) {
          //message alert danger :: switch todo
          this.setState({isLoading: false})
          this.props.navigation.navigate('Connexion', { email: this.state.email, alert: "un mail a été envoyé à "+this.state.email });
        }
        
        //  else if (message.alert){
        //   this.setState({isLoading: false})
        //   this.props.navigation.navigate('Connexion', { email: message.alert });
        // } else if (event.nativeEvent.data=='Dom chargé'){
        //   console.log(event.nativeEvent.data)
        // }
        
        //    
        

      }}
      // renderLoading={() => {
      //   return (<ActivityIndicator size='large' style={{ position: "absolute", top:  20, left:  20 }}/>)
      // }}
      onLoad={() => {this.setState({isLoading: false})}}
      // startInLoadingState={true}
    
    />
    {this._displayLoading()}
    </View>
  ); }
}


const Tab = createBottomTabNavigator();
function HomeLog() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={HomeLoggedScreen}/>
      <Tab.Screen name="Messages" component={ProductScreen} />
    </Tab.Navigator>
  );
}

const Tab_2 = createBottomTabNavigator();
function HomeUnlog() {
  return (
    <Tab_2.Navigator>
      <Tab_2.Screen name="Feed" component={HomeScreen} />
      <Tab_2.Screen name="Messages" component={ProductScreen} />
    </Tab_2.Navigator>
  );
}







const SideNavLogged = createDrawerNavigator();
function HomeLogged() {
  return (
  <SideNavLogged.Navigator>
    <SideNavLogged.Screen name='Home Logged' component={HomeLog}/>
    <SideNavLogged.Screen name="Account" component={ProductScreen} />
  </SideNavLogged.Navigator>
  );
}


function CustomDrawerContent(props) {

  return (
    <DrawerContentScrollView {...props}>
      <View>
      <Button
        title="HomeFree"
        onPress={() => props.navigation.navigate('HomeFree')}
      />

      <Button
        title="Connexion"
        onPress={() => props.navigation.navigate('Connexion')}
      />

      <Button
        title="Inscription"
        onPress={() => props.navigation.navigate('Inscription')}
      />

    </View>
      
    </DrawerContentScrollView>
  );
}

const SideNavFree = createDrawerNavigator();
function HomeFree() {
  return (
    <SideNavFree.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <SideNavFree.Screen name='HomeFree' component={HomeUnlog} />
      <SideNavFree.Screen name="Connexion" component={LoginScreen} />
      <SideNavFree.Screen name="Inscription" component={SignUp} />
      <SideNavFree.Screen name="Forgotten Password" component={ForgottenPassword} />
  </SideNavFree.Navigator>
  );
}






const Drawer = createStackNavigator();
export default function App() {
  console.log()
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

          requestLogin(data).then( response => {

            const saveToken = async () => {
              let userToken;
              try {
                userToken = await AsyncStorage.setItem('userToken', response);
        
              } catch (e) {
                console.log(e)
              }
            };

            if ( response == "[Auth] Unsuccessful Authentication" ) {

              dispatch({ type: 'SIGN_OUT' }) 
              Alert.alert(
                "Erreur",
                "Login ou mot de passe incorrect",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
              );

            } else {
              saveToken(response);
              dispatch({ type: 'SIGN_IN', token: response });
            }
            
          });
          
      },
      signOut: () => dispatch({ type: 'SIGN_OUT'}),
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
    <AuthContext.Provider value={authContext} >
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          {state.isLoading ? (
          <Drawer.Screen name="Home" component={HomeFree} />
          ) : state.userToken == null ? (
          <Drawer.Screen name="Connectez-vous" component={HomeFree}  options={({navigation}) => ({headerLeft: () => (<Icon name='menu' size={24} color='black'
          onPress={()=> navigation.dispatch(DrawerActions.toggleDrawer())}/>)})}/>
          
          ) : (
            <Drawer.Screen name="Home Logged" component={HomeLogged}/>
          )}
        </Drawer.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}