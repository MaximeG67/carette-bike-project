
import * as React from 'react';






export default class RenderItem extends React.Component {
    render() {
        console.log(this.props)
      return (
        <View>
          {/* 
          


            <View style={{flex:1, paddingBottom:10}}>
               <TouchableOpacity style={{flex:1}}>
               
          <Text style={{width:250,height:50,borderColor:'black',borderWidth:1,paddingLeft:105,paddingTop:10}}>test</Text>
                </TouchableOpacity>
              </View>


          
          
          
          
          <Image
            style={styles.image}
            source={{uri: "image"}}
          />
          <View style={styles.content_container}>
            <View style={styles.header_container}>
              <Text style={styles.title_text}>Titre du film</Text>
              <Text style={styles.vote_text}>Vote</Text>
            </View>
            <View style={styles.description_container}>
              <Text style={styles.description_text} numberOfLines={6}>Description</Text>
             
            </View>
            <View style={styles.date_container}>
              <Text style={styles.date_text}>Sorti le 00/00/0000</Text>
            </View>
          </View> */}
        </View>
      )
    }
  }