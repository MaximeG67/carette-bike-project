import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { getAllProducts } from '../API/ApiRequest';
import ProductItem from '..'

class Products extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { products: [] };
    this._loadProducts();
  }



  _loadProducts() {
    getAllProducts().then(data => {
      this.setState({ products: data })
      console.log(data)
    });
  }


  render() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* <OptionButton
        icon="md-school"
        label="Read the Expo documentation"
        onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}
      />

      <OptionButton
        icon="md-compass"
        label="Read the React Navigation documentation"
        onPress={() => WebBrowser.openBrowserAsync('https://reactnavigation.org')}
      />

      <OptionButton
        icon="ios-chatboxes"
        label="Ask a question on the forums"
        onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
        isLastOption
      /> */}
      <FlatList
          data={this.state.products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem film={item}/>}
        />
    </ScrollView>
  );
}

// function OptionButton({ icon, label, onPress, isLastOption }) {
//   return (
//     <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
//       <View style={{ flexDirection: 'row' }}>
//         <View style={styles.optionIconContainer}>
//           <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
//         </View>
//         <View style={styles.optionTextContainer}>
//           <Text style={styles.optionText}>{label}</Text>
//         </View>
//       </View>
//     </RectButton>
//   );
// }
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

export default Products