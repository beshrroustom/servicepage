import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';

export default class PhreshLogo extends Component {
  render() {

    const { viewStyle,
            image,
            container
          }=styles;

    return (
      <View >
        <Image source={{uri: 'http://rbds01.com/PhreshBarberDevSite/wp-content/uploads/2014/03/Phresh_Mens_Salon_Logo1.png'}}
       style={styles.image} 
       />
      </View>
    );
  }
}
const styles = {

    image: {
      width: null,
      height: 150,
      resizeMode:'contain'
    },
    container: {
      padding: 30,
      marginTop: 65,
      alignItems: 'center'
    },

};
