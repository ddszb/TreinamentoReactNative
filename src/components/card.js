import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class Card extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}
      onPress={() => this.props.navigation.navigate('Details', {
        image: this.props.info.image == null ? 'https://i.ibb.co/YfZFr7k/noimg.png' : this.props.info.image.original ,
        plot : this.props.info.summary,
        name: this.props.info.name,
        rating: this.props.info.rating.average
      })}>
          
        <View style={styles.cardView}>
          <View>
          <Image
            style={styles.image}
            source={{uri: this.props.info.image == null ? 'https://i.ibb.co/YfZFr7k/noimg.png' : (this.props.info.image.original || this.props.info.image.medium) }}
          />
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.name}>{this.props.info.name || 'Sem nome'}</Text>
            <Text style={styles.genres}>{this.props.info.genres || 'Sem gênero'}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  cardView: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor:'#cab0d8',
    // borderRadius: 50,
    borderWidth:3,
    borderColor:'#cab0cf',
    opacity:0.8
    
  },
  image: {
    borderRadius:5,
    width: 80,
    height: 80,
    resizeMode: 'contain'
  },
  name: {
    fontSize: 20,
    fontFamily:'sans-serif-medium',
    marginLeft: 10,
    marginRight: 80,
    color:'#754b8b',
    
    flexWrap:'wrap'
  },
  genres: {
    fontSize: 16,
    marginLeft: 10,
    color:'#997bba'
  },
});