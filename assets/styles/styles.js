import { StyleSheet } from 'react-native';


const styles = StyleSheet.create ({
    inscr :{
      color:"white",
      fontStyle:'italic',
      fontSize:12,
      justifyContent:"center",
      marginBottom:52
    },
    button :{
      marginBottom:10,
      backgroundColor:"green",
      width:300,
      alignItems:"center",
      borderRadius:20,
      height:30,
      shadowColor: 'rgba(0,0,0, .4)', // IOS
      shadowOffset: { height: 1, width: 1 }, // IOS
      shadowOpacity: 1, // IOS
      shadowRadius: 1, //IOS
      backgroundColor: '#fff',
      elevation: 2, // Android
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',    
    },
    buttonShop :{
      marginBottom:50,
      width:300,
      alignItems:"center",
      borderRadius:15,
      height:40,
      backgroundColor: 'black',
      elevation: 2, // Android
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',    
    },
    button1 :{
      marginBottom:10,
      marginTop:5,
      backgroundColor:"green",
      width:300,
      alignItems:"center",
      borderRadius:20,
      height:30,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
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
      containerShop : {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingLeft: 60,
        paddingRight: 60,
      },
      header : {
      alignSelf:'stretch',
      height: 40,
      marginBottom: 15,
      borderBottomColor: '#f8f8f8',
      borderBottomWidth: 1,
      color:'#fff',
      fontStyle:'italic'
      }
    })
    export default styles