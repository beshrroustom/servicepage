import React, {Component} from 'react';
import {View, Text, ListView, StyleSheet,FlatList,Image} from 'react-native';


const TopServices =[

    {
        key: 1,
        name:'Haircut',
        image: 'http://rbds01.com/PhreshBarberDevSite/wp-content/uploads/2014/03/IMG_20140304_211131-1024x1024-1024x1024.jpg'

    },
    {
        key:2,
        name:'Beard',
        image:'https://www.menshairstyletrends.com/wp-content/uploads/2017/06/Braid-Barbers-Cool-Short-Hairstyles-with-Beard-for-Men.jpg'
    },
    {
        key:3,
        name:'Blackmask',
        image:'https://i.ytimg.com/vi/paz1o1iGGDA/maxresdefault.jpg'
    },
    {
        key:4,
        name:'Beard enhancement',
        image: 'https://i.ytimg.com/vi/KZIErgjRkPs/maxresdefault.jpg'
    },
    
]

const Senskids =[
    {
        key:7,
        name:'kids Haircut',
        image:'http://rbds01.com/PhreshBarberDevSite/wp-content/uploads/2014/03/IMG_20140218_230302-1024x1024-1024x1024.jpg'
    },
    {
        key:8,
        name:'Senior haircut',
        image:'https://scontent.fyto1-1.fna.fbcdn.net/v/t1.0-1/p240x240/19260271_787426594765438_9163124791831597486_n.jpg?oh=634a67b0a7fbe4b4d551a7a2a61d83cb&oe=5B13BE79'
    }
]
const Products=[
    {key: 6,
     name:'cream',
     image: 'https://scontent-mrs1-1.xx.fbcdn.net/v/t34.0-0/p280x280/28449774_1598068546949831_227661522_n.png?_nc_ad=z-m&_nc_cid=0&oh=6483fc1f86c5733cecf837f2853814e3&oe=5A900C00'
    },{
        key:9,
        name:'razor',
        image: 'https://images-na.ssl-images-amazon.com/images/I/61PaQ5y00eL._SX355_.jpg'
    }
]



class Services extends Component {
    _renderItem (item){
        return (
            <Image style={{width:120, height:100}} source={{uri: item.image}} />
        )
    }
    render(){
    return(
        <View>
        <View>
            <Text> Popular Services </Text>
            <FlatList
                horizontal
                SeparatorComponent={() => <View style={{width: 5}} />}
                renderItem={({item})=>this._renderItem(item)}
                data={TopServices}
            />
        </View>
         <View>
         <Text> Seniors and kids </Text>
         <FlatList
             horizontal
             SeparatorComponent={() => <View style={{width: 5}} />}
             renderItem={({item})=>this._renderItem(item)}
             data={Senskids}
         />
     </View>
      <View>
      <Text> Products </Text>
      <FlatList
          horizontal
          SeparatorComponent={() => <View style={{width: 5}} />}
          renderItem={({item})=>this._renderItem(item)}
          data={Products}
      />
  </View>
</View>
    );

}
}

export default Services; 