import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <ScrollView >
      <View style={{flex: 1}}>

      <View style={{flexDirection: 'row',
    justifyContent: 'space-around', marginTop: 25}}>

        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Street Meat</Text>

        <View  style={{flexDirection: 'column',
    justifyContent: 'space-around'}} >
          <Text>11/09/2019</Text>
          <Text style={{marginTop: 8, marginLeft:14}}>09:30 pm</Text>       
          </View>
          
      </View>


      <View style={{flexDirection: 'row',
    justifyContent: '', marginTop: 25}}>
<Text>Order Summary</Text>
      </View>

        

  </View>
      </ScrollView>
    );
  }
}
// op codey
