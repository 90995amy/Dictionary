/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

const dictionary =  { 'apple': 'A for apple. It sucks.' } //require("./dictionary.json")

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
	 // alignItems: 'center',
	  backgroundColor: '#F5FCFF',
	},
	welcome: {
	  fontSize: 20,
	  margin: 10,
	},
	instructions: {
	  textAlign: 'center',
	  color: '#333333',
	  marginBottom: 5,
	},
  });
  

export default class Dictionary extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      input : "",
      output : "",
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style = {styles.welcome}
          placeholder = "Enter a word"
          onChangeText = { (word) => this.setState({input : word}) }
          onSubmitEditing = { this.showMeaning.bind(this) } 
        />
        
        <Text style={styles.instructions}>
         { this.state.output }
        </Text>
      </View>
    );
  }

  showMeaning() {
    const meaning = this.state.input in dictionary ?
                  dictionary[this.state.input] :
                  "Not Found"
    alert(meaning)
    this.setState({output : meaning})
  }
  
}

AppRegistry.registerComponent('Dictionary', () => Dictionary);
