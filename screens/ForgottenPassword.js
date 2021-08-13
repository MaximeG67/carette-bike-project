


import * as React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import  LoadingScreen from '../components/LoadingScreen'





export default class ForgottenPassword extends React.Component {
  
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
                           document.body.style.backgroundColor ='#36485f';
                           var elements = document.getElementsByTagName('label')
                           while (elements[0]) elements[0].parentNode.removeChild(elements[0]);
                           document.querySelector("input#login").placeholder = "Votre email";
                           document.getElementsByTagName('input')["login"].style.backgroundColor="transparent"
                           document.getElementsByTagName('input')["login"].style.borderColor="transparent transparent white transparent";
                           document.getElementsByTagName('input')["login"].style.fontStyle="italic";
                           document.querySelector('form').innerHTML = "<img width= 300 src=https://carette4.odoo.com/web/image/website/1/logo/Carette?unique=499852a/></br>"+document.querySelector('form').innerHTML;
                              
    
    
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
            return (<LoadingScreen/>)
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
  