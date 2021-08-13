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
//       console.log(this.props)
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
import React, { Component } from 'react';
import { View } from 'react-native';

import { Container, Navbar } from 'navbar-native';

class TopMenu extends React.Component {
    render() {
        return (
            
                <Navbar
                    title={"Navbar Native"}
                    left={{
                        icon: "ios-arrow-back",
                        label: "Back",
                        onPress: () => {alert('Go back!')}
                    }}
                    right={[{
                        icon: "ios-search",
                        onPress: () => {alert('Search!')}
                    },{
                        icon: "ios-menu",
                        onPress: () => {alert('Toggle menu!')}
                    }]}
                />

           
        );
    }
}

export default TopMenu;