// Navigation/Navigation.js
import * as React from 'react';

import { Image, View, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';
import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  useIsDrawerOpen } from '@react-navigation/drawer';


  import LoginScreen from '../screens/LoginScreen';
import SignUp from '../screens/SignUpScreen';
import ForgottenPassword from '../screens/ForgottenPassword';
import ProductScreen from '../screens/ProductsScreen';
import HomeUnlog from './HomeUnlogNav';
import ShopScreen from '../screens/ShopScreen';
import AccessoriesScreen from '../screens/AccessoriesScreen';




const SideNavFree = createDrawerNavigator();
export default function DrawerUnlogNav() {
  return (
    <SideNavFree.Navigator drawerContent={props => <CustomDrawerContent {...props} drawerType="slide"/>}>
      <SideNavFree.Screen name='Découvrez Carette' component={HomeUnlog}/>
      <SideNavFree.Screen name="Achetez une carette" component={ProductScreen} />
      <SideNavFree.Screen name="Personnalisez votre Carette" component={AccessoriesScreen} />
      <SideNavFree.Screen name="Shop" component={ShopScreen} />
      <SideNavFree.Screen name="Connexion" component={LoginScreen} />
      <SideNavFree.Screen name="Inscription" component={SignUp} />
      <SideNavFree.Screen name="Forgotten Password" component={ForgottenPassword} options={{ drawerLabel: () => null}}/>
  </SideNavFree.Navigator>
  );
}


class CustomDrawerContent extends React.Component {
  constructor(props) {
    super(props)
    this.state={ Home: true,
                  About: false, 
                  Connexion: false,
                  Shop: false,
                  Inscription: false
                }
  }
    render() {
  
    return (
      <DrawerContentScrollView {...this.props}>
         <View style ={{height:150, display:'flex', justifyContent:"center",alignItems:'center', marginTop: -30}}>
           <ImageBackground blurRadius={3} source={require('../assets/images/IMG_8184.jpg')} style={{flex: 1, width: 300, justifyContent: 'center'}}>
              <Image source={require('../assets/images/carettev3white.png')} style={{height:100 , width:200, marginLeft:50}}></Image>
            </ImageBackground>
        </View>
        <View>
  
        <DrawerItem 
            icon={() => <Icon name='directions-bike' />} 
            label='Découvrez Carette Bike !' 
            inactiveBackgroundColor={this.state.Home ? 'orange' : 'white'}
            onPress={ 
                      () => { this.setState({Home: true, About: false, Connexion: false, Inscription: false,Shop: false})
                              this.props.navigation.navigate('Découvrez Carette')}} 
          />

        <DrawerItem 
            icon={() => <Icon name='face' />} 
            label='Qui sommes-nous ?' 
            inactiveBackgroundColor={this.state.About ? 'orange' : 'white'}
            onPress={ 
                      () => { this.setState({Home: false, About: true, Connexion: false, Inscription: false,Shop: false})
                              this.props.navigation.navigate('Achetez une carette')}} 
          />
          

        <DrawerItem
         icon={() => <Icon  name='shop'/>} 
         label="Notre shop"
         inactiveBackgroundColor={this.state.Shop ? 'orange' : 'white'}
         onPress={() => {this.setState({Home: false, About: false, Connexion: false, Inscription: false, Shop: true})
                         this.props.navigation.navigate('Shop')}}/>


        <DrawerItem
          icon={() => <Icon  name='input' />} 
          label="Connexion"
          inactiveBackgroundColor={this.state.Connexion ? 'orange' : 'white'}
          onPress={() => {this.setState({Home: false, About: false, Connexion: true, Inscription: false,Shop: false})
                          this.props.navigation.navigate('Connexion')}}
        />
  
        <DrawerItem
          icon={() => <Icon name='get-app' />}
          label="Inscription"
          inactiveBackgroundColor={this.state.Inscription ? 'orange' : 'white'}
          onPress={() => {this.setState({Home: false, About: false, Connexion: false, Inscription: true,Shop: false})
                          this.props.navigation.navigate('Inscription')}}
        />
        
  
      </View>
  
      </DrawerContentScrollView>
    );
    }
  }
  