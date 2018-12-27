import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Alert, ScrollView} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{borderWidth: 1, borderColor: "red"}}>
          <Text style={styles.welcome}>Hallo Hayder, wie geht es dir?</Text>
          <TextInput/>
          <Button
              onPress={() => {Alert.alert("jojojo")}}
              title="Learn More"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
        </View>
        <ScrollView>

           <Text style={styles.instructions}>To get started, edit App.js</Text>
           
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
