import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import ProductsItem from '../components/ProductsItem';
import { getAccessories } from '../API/ApiRequest';

class Accessories extends React.Component {
  
    constructor(props) {
      super(props)
      this.state = { products: [] };
      this._loadProducts();
    }
  
  
  
    _loadProducts() {
      getAccessories().then(data => {
        this.setState({ products: data })
      });
    }
  
  
    render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <FlatList
            data={this.state.products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <ProductsItem product={item}/>}
          />
      </ScrollView>
    );
  }
  }

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafafa',
    },
    contentContainer: {
      paddingTop: 15,
    },
    optionIconContainer: {
      marginRight: 12,
    },
    option: {
      backgroundColor: '#fdfdfd',
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderWidth: StyleSheet.hairlineWidth,
      borderBottomWidth: 0,
      borderColor: '#ededed',
    },
    lastOption: {
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    optionText: {
      fontSize: 15,
      alignSelf: 'flex-start',
      marginTop: 1,
    },
  });
  
  export default Accessories
  