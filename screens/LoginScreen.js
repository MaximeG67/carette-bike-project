import * as React from 'react';
import { Image, View, TextInput, Button, AsyncStorage, Alert, TouchableOpacity, Text } from 'react-native';
import { UserConsumer }  from '../Context/Context';
import styles from '../assets/styles/styles'
import { CheckBox } from 'react-native-elements';
import  LoadingScreen from '../components/LoadingScreen';
import { translate } from "../locale/local";

export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props)
 
    this.state = { username: "", 
                   password: '', 
                   checked: false, 
                   autoConnect: false, 
                   }
  }

  

    UNSAFE_componentWillReceiveProps(newProps) {
      this.setState({username: newProps.route.params.email, isLoading: false})
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
    }

    componentDidMount() {

      this._retrieveData();
      if (this.props.route.params) {
        this.setState({username: this.props.route.params.email})
        // alert(this.props.route.params.alert)
      }
    }

    _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('email');
        
        this.setState({ username: value })

      } catch (error) {
        // Error retrieving data
      }
    };
 
    _displayLoading() {
      if (this.state.isLoading) {
          return (<LoadingScreen/>)
      }
    }
  render() {
 
    
    
  return (
     
    <UserConsumer>{props => {

      return(
        
  <View style={styles.container}>
    <Image style={styles.logo}
        source={require('../assets/images/carettev3.png')}></Image>

    <TextInput

      placeholder="Adresse e-mail"
      placeholderTextColor="white"
      value={this.state.username}
      onChangeText={text => this.setState({username: text})}
      editable={true}
      style={styles.header}
    />
    <TextInput
      placeholder="Mot de passe"
      placeholderTextColor="white"
      value={this.state.password}
      onChangeText={text => this.setState({password: text})}
      secureTextEntry
      style={styles.header}
    />

<CheckBox
      center
      title='Remember me?'
      checked={this.state.checked}
      onPress={() => this.setState({checked: !this.state.checked})}
    />
    {this.state.checked && (
        <CheckBox
        center
        title='Connexion automatique'
        checked={this.state.autoConnect}
        onPress={() => this.setState({autoConnect: !this.state.autoConnect})}
      />)}
    <TouchableOpacity
    
    type="outline"

    onPress={() => {
      props.signIn( {data: {username: this.state.username, password: this.state.password}, checked: JSON.stringify(this.state.checked), autoConnect: JSON.stringify(this.state.autoConnect) });
                    this.setState({ password : "" })  
                    }} 
    >
      <Text>Se connecter</Text>
      </TouchableOpacity>

    <Button 
    style={styles.inscr}
    title="Pas encore inscrit ?"
    type="outline"
    onPress={() => this.props.navigation.navigate(translate("STACK_SIGN_UP"))}
    />
    <Button 
    style={styles.inscr}
    title="mot de passe oublié"
    type="outline"
    onPress={() => this.props.navigation.navigate(translate("STACK_FORGOTTEN_PASSWORD"))}
    />
  
  </View>)}}
  
  </UserConsumer>
  );
  }
}



