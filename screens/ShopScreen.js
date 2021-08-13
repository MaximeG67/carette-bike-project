import * as React from 'react';
import { Image, View, TextInput,  AsyncStorage, Text, ImageBackground, ScrollView, StyleSheet, SafeAreaView, TouchableOpacityBase } from 'react-native';
import { UserConsumer }  from '../Context/Context';
import styles from '../assets/styles/styles'
import { TouchableOpacity } from 'react-native';
import {getProducts } from '../API/ApiRequest';
import { translate } from "../locale/local";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';
import { Header } from 'react-native/Libraries/NewAppScreen';




class ShopScreen extends React.Component {

    constructor(props){
        super(props);
        this.carousel = {}
        this.state = {
          activeIndex:0,
          carouselItems: [
        //   {
        //       image: require('../assets/images/IMG_8238_lzn.jpg'),
        //       title:"Carette V1",
        //       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
        //       button: () => this.props.navigation.navigate(translate("STACK_ABOUT"), {
        //         itemId: 'Carette V1',
        //         image: require('../assets/images/IMG_8238_lzn.jpg'),
        //       }),
        //     },
        //   {
        //       image: require('../assets/images/IMG_8205_lzn.jpg'),
        //       title:"Carette V2",
        //       text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //       button: () => this.props.navigation.navigate(translate("STACK_ABOUT"), {
        //         itemId: 'Carette V2',
        //         image: require('../assets/images/IMG_8205_lzn.jpg'),
        //       }),
        //     },
        //   {
        //       image: require('../assets/images/IMG_8224_lzn.jpg'),
        //       title:"Carette V3",
        //       text: "Text 3",
        //       button: () => this.props.navigation.navigate(translate("STACK_ABOUT"), {
        //         itemId: 'Carette V3',
        //         image: require('../assets/images/IMG_8224_lzn.jpg'),
        //       }),
        //   },
        //   {
        //       image: require('../assets/images/IMG_8224_lzn.jpg'),
        //       title:"Carette V4",
        //       text: "Text 4",
        //       button: () => this.props.navigation.navigate(translate("STACK_ABOUT"), {
        //         itemId: 'Carette V4',
        //         image: require('../assets/images/IMG_8224_lzn.jpg'),
        //       }),
        //   },
        //   {
        //       image: require('../assets/images/IMG_8224_lzn.jpg'),
        //       title:"Carette V6",
        //       text: "Text 5",
        //       button: () => this.props.navigation.navigate(translate("STACK_ABOUT"), {
        //         itemId: 'Carette V5',
        //         image: require('../assets/images/IMG_8224_lzn.jpg'),
        //       }),
        //   },
        ]
      }
    }
      // _toggleShopping(){
      //   const action= {type :"TOGGLE_SHOPPING", value: this.state.item}
      //   this.props.dispatch(action)
      // }

      _loadProducts() {
        getProducts().then(data => {
          this.setState({ carouselItems: data })
        });
      }
      UNSAFE_componentWillMount() {
        this._loadProducts()
      }

    _renderItem({item,index}){
console.log(item)
        return (
            
          <View style={{
              backgroundColor:'floralwhite',
              borderRadius: 10,
              height: 500,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20, }}>
                  <Image style={stile.logo} source={{uri: `data:image/gif;base64,${item.image_1920}`}}/>
                  <Text style={{fontSize: 30}}>{item.name}</Text>
            <ScrollView><Text style={{marginLeft:10,fontStyle:"italic",width:250}}>{item.description_sale}</Text></ScrollView>
            {/* { <Button
            style={{paddingLeft: 50,}}
            onPress={item.button}
  icon={
    <Icon
      name="arrow-right"
      size={15}
      color="blue"
    />
  }
  iconRight
  title="Select   "
  
/> } */}
          </View>

        )
    }


    pagination () {
      
        return (
            <Pagination
            
              carouselRef={this.carousel}
              dotsLength={this.state.carouselItems.length}
              activeDotIndex={this.state.activeIndex}
              containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: 'rgb(255,0,0)'
              }}
              inactiveDotStyle={{
                backgroundColor: 'rgb(195,187,187)'
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              tappableDots={true}
            />
        );
    }

// render(){
//     return(
        
//             <ImageBackground blurRadius={3} style={stile.containerShop} source={require('../assets/images/IMG_8238_lzn.jpg')}>

//                 <ScrollView
//                 horizontal={true}
//                 contentContainerStyle={{ width: `${200 * 200}%` }}
//                 showsHorizontalScrollIndicator={true}
//                 scrollEventThrottle={2}
//                 decelerationRate="fast"
//                 pagingEnabled
//                 >
//                     <Image style={stile.logo} source={require('../assets/images/IMG_8238_lzn.jpg')}/>
//                     <Image style={stile.logo} source={require('../assets/images/IMG_8238_lzn.jpg')}/>

                    

//                 </ScrollView>
//                 {/* <TouchableOpacity   
//                     style={styles.buttonShop} 
//                     onPress={() => this.props.navigation.navigate(translate("DRAWER_CUSTOM_CARETTE"))}>
//                         <Text style={{fontSize:15, color:'white'}}>{translate('BUTTON_OWNER')}</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity   
//                     style={styles.buttonShop} 
//                     onPress={() => this.props.navigation.navigate(translate("STACK_ABOUT"))}>
//                         <Text style={{fontSize:13, color:'white'}}>JE NE POSSÈDE PAS ENCORE DE CARETTE</Text>
//                 </TouchableOpacity> */}
//             </ImageBackground>
//     )
// }



render() {

    return (

          
      <SafeAreaView style={{flex: 1 }}>
          <ImageBackground style={stile.containerShop} source={require('../assets/images/background_1.jpg')}>
        <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center',paddingTop: 50, }}>
            <Carousel
            style={{paddingTop: 50}}
            
              layout={"default"}
              ref={ref => this.carousel = ref}
              data={this.state.carouselItems}
              sliderWidth={420}
              itemWidth={305}
              renderItem={this._renderItem}
              onSnapToItem = { index => this.setState({activeIndex:index}) } 
              scrollEnabled = {false}
              />
              
        </View>
        <View>
        <TouchableOpacity
            style={{width: 200,height: 50, marginTop: 5, marginLeft: 5, justifyContent: 'center',alignItems: 'center', backgroundColor: '#00BCD4'}}
            onPress={() => {
                // this._toggleShopping();
                this.carousel.snapToItem(this.state.activeIndex);
                // console.log(this.state.activeIndex)
                this.props.navigation.navigate(translate("STACK_ABOUT"),{
                  
                  item:this.state.carouselItems[this.state.activeIndex],
                })
                
                              
            }}


        ><Text style={{color:"white",fontWeight:"bold"}}>SÉLECTIONNER</Text>
    
    </TouchableOpacity>
        </View>
        
        
        <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
            style={{width: 50,height: 50, marginTop: 5, marginLeft: 5, justifyContent: 'center',alignItems: 'center', backgroundColor: '#00BCD4', borderRadius: 25}}
            onPress={() => {

                this.carousel.snapToItem(this.state.activeIndex-1);
                
              
            }}


        ><Icon
        name="arrow-left"
        size={30}
        color="blue"
      />
    
    </TouchableOpacity>
        { this.pagination() }
        <TouchableOpacity
            style={{width: 50, height: 50, marginTop: 5, marginRight: 5, justifyContent: 'center',alignItems: 'center', backgroundColor: '#00BCD4', borderRadius: 25}}
        
        onPress={() => {
          
         
            this.carousel.snapToItem(this.state.activeIndex+1);
            
          
          
        }}
        ><Icon
        name="arrow-right"
        size={30}
        color="blue"
      /></TouchableOpacity>
        </View>
        </ImageBackground>
      </SafeAreaView>
      
    );
}
}

// const mapStateToProps = (state) => {
//   return {
//     shoppingList:state.shoppingList
//   }
// }


const stile = StyleSheet.create({
    logo: {
        width: 250,
        height: 210,
        resizeMode:'contain',
        marginTop:10,
        marginBottom:10
      },
      containerShop : {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       
      },
})

// export default connect(mapStateToProps)(ShopScreen)
export default ShopScreen