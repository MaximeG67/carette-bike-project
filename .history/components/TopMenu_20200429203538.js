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

class TopMenu extends Component {
    render() {
        
        return (
            <View style={styles.container}>
            <ScrollView>
              <View>
                <Text style={styles.sectionHeadingStyle}>
                  Section 1
                </Text>
                <View style={styles.navSectionStyle}>
                  <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page1')}>
                  Page1
                  </Text>
                </View>
              </View>
              <View>
                <Text style={styles.sectionHeadingStyle}>
                  Section 2
                </Text>
                <View style={styles.navSectionStyle}>
                  <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page2')}>
                    Page2
                  </Text>
                  <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page3')}>
                    Page3
                  </Text>
                </View>            
              </View>
              <View>
                <Text style={styles.sectionHeadingStyle}>
                  Section 3
                </Text>
                <View style={styles.navSectionStyle}>
                  <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page4')}>
                  Page4
                  </Text>
                </View>
              </View>
            </ScrollView>
            <View style={styles.footerContainer}>
              <Text>This is my fixed footer</Text>
            </View>
          </View>
        );
    }
}

export default TopMenu;