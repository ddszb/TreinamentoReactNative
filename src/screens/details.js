import React, {Component} from 'react'; // 1
import {Text, View,StyleSheet, ImageBackground, Image} from 'react-native';

export default class DetailsScreen extends Component {
    render() {
    const { navigation } = this.props;
      return (  
        <View style={styles.screen}>
          <ImageBackground style={ styles.imgBackground } 
                 source={require('../images/details_background.png')}>
           {/* <Image
            style={styles.image}
            source={{uri:navigation.getParam('image', 'Sem nome')}}
          /> */}
            <View >
                <Text style={styles.name}>
                    {(navigation.getParam('name', 'Sem nome'))}
                </Text>
            </View>
            <View style={styles.rating}>
                <Text style={styles.ratingText}>
                    {JSON.stringify(navigation.getParam('rating', 'Avaliação indisponível')).replace('null', "- -")}
                </Text><Image  style={styles.ratingIcon} source={require('../images/ratings_star.png')}/>
            </View>
            <View >
                <Text style={styles.plot}>
                    {JSON.stringify(navigation.getParam('plot', 'Sinopse indisponível')).replace(/<\/?[^>]+(>|$)/g, "")}
                </Text>
            </View>
          </ImageBackground>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
      },
    name: {
        margin:15,
        marginTop:30,
        fontSize: 30,
        alignSelf:'center',
        color:'#754b8b',
        flexWrap:'wrap'
      },
    plot: {
    fontSize: 16,
    textAlign: 'justify',
    fontStyle:'italic',
    marginLeft:20,
    marginRight:20,
    marginBottom:15,
    color:'#997bba',
    },
    rating: {
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
      },
    ratingText: {
        fontSize: 20,
        textAlign:'center',
        color:'#754b8b',
        padding:10
        },
    ratingIcon:{
      width:28,
      height:28,
      marginBottom:5
    },
    image: {
      borderRadius:5,
      width: 80,
      height: 80,
      resizeMode: 'contain'
    },
    imgBackground: {
      width: '100%',
      height: '100%',
      flex: 1 
  },
    });
