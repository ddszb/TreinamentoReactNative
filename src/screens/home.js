import React, {Component} from 'react'; // 1
import {Text, View, StyleSheet, TextInput, FlatList, ImageBackground} from 'react-native';
import api from '../service/api';
import Card from '../components/card';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Series'
      };

    state = {
      searchText: '',
      searchResults: null, // 1
    }
  
    submitSearch = async () => {
      if (this.state.searchText != '') { 
        try {
          const response = await api.get('/search/shows', {
            params: { q: this.state.searchText },
          });
          this.setState({ searchResults: response.data }); // 2
        } catch(error) { 
          alert(JSON.stringify(error));
        }
      }
    }
    
    render() {
      return (
        <View style={styles.screen}>
          <ImageBackground style={ styles.imgBackground } 
                 source={require('../images/home_background.png')}>
          <View style={styles.search}>
            <TextInput
            placeholder={'Busque uma série'}
            style={styles.input}
            onChangeText={(text) => this.setState({ searchText: text })}
            onSubmitEditing={() => this.submitSearch()}
           />
          </View>
          <View style={styles.results}>
          
            <FlatList
              data={this.state.searchResults}
              renderItem={({ item }) => <Card info={item.show}
                                        navigation={this.props.navigation}/>}
              keyExtractor={item => item.show.id}
            />
            
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
    search: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      marginTop: 15,
      height: 40,
      width: 250,
      borderWidth: 1,
      // padding: 10,
      fontSize: 20,
      // marginBottom: 30,
      
      borderRadius:25,
      borderColor:"#754b8b",
      color: "#997bba",
      textAlign:'center',
  
    },
    results: {
      flex: 4,
      // backgroundColor: 'lightgray',
      alignItems: 'center',
    },
    imgBackground: {
      width: '100%',
      height: '100%',
      flex: 1 
  },
  });


  