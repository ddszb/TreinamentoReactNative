import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class Card extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}
      onPress={() => this.props.navigation.navigate('Details', {
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
  },
  image: {
    width: 80,
    height: 120,
    backgroundColor:'black',
    resizeMode: 'contain',
    borderRadius:4
  },
  name: {
    fontSize: 20,
    marginLeft: 10,
    color:'#0e990f',
    flexWrap:'wrap'
  },
  genres: {
    fontSize: 16,
    marginLeft: 10,
    color:'#11ad14'
  },
});