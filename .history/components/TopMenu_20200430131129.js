// import React from 'react';
 
// import { View, Text } from 'react-native';
// import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
 
// class TopMenu extends React.PureComponent {
//   _menu = null;
 
//   setMenuRef = ref => {
//     this._menu = ref;
//   };
 
//   hideMenu = () => {
//     this._menu.hide();
//   };
 
//   showMenu = () => {
//     this._menu.show();
//   };
 
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//           <Text>{this.props.title}</Text>
//         <Menu
//           ref={this.setMenuRef}
//           button={<Text onPress={this.showMenu}>Show menu</Text>}
//         >
//           <MenuItem onPress={this.hideMenu}>Connexion</MenuItem>
//           <MenuItem onPress={this.hideMenu}>Inscription</MenuItem>
//           <MenuItem onPress={this.hideMenu} disabled>
//             Menu item 3
//           </MenuItem>
//           <MenuDivider />
//           <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem>
//         </Menu>
//       </View>
//     );
//   }
// }
 
// export default TopMenu;

// import PropTypes from 'prop-types';
// import React, {Component} from 'react';
// import Header from 'react-native-elements';
// // import styles from './SideMenu.style';
// // import {NavigationActions} from 'react-navigation';
// import { StyleSheet,ScrollView, Text, View} from 'react-native';
// // import { StackNavigator } from 'react-navigation';

// // import { Container, Navbar } from 'navbar-native';

// class TopMenu extends Component {
//     render() {
        
//         return (
//             <Header
//   leftComponent={{ icon: 'menu', color: '#fff' }}
//   centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
//   rightComponent={{ icon: 'home', color: '#fff' }}
// />
//         );
//     }
// }



// export default TopMenu;






function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() => props.navigation.toggleDrawer()}
        />
      </DrawerContentScrollView>
    );
  }