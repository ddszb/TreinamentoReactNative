import React, {Component} from 'react'; // 1
import {Text, View,StyleSheet} from 'react-native';

export default class DetailsScreen extends Component {
    render() {
    const { navigation } = this.props;
      return (  
        <View style={styles.screen}>
            <View >
                <Text style={styles.name}>
                    Nome:{JSON.stringify(navigation.getParam('name', 'Sem nome'))}
                </Text>
            </View>
            <View >
                <Text style={styles.plot}>
                    Sinopse:{JSON.stringify(navigation.getParam('plot', 'Sinopse indisponível'))}
                </Text>
            </View>
            <View >
                <Text style={styles.rating}>
                    Avaliação:{JSON.stringify(navigation.getParam('rating', 'Avaliação indisponível'))}
                </Text>
            </View>
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
        fontSize: 20,
        marginLeft: 10,
        color:'#0e990f',
        flexWrap:'wrap'
      },
    plot: {
    fontSize: 16,
    marginLeft: 10,
    color:'#11ad14'
    },
    rating: {
        fontSize: 16,
        marginLeft: 10,
        color:'#11ad14'
        },
    });
