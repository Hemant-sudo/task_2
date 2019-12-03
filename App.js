import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';


export default class App extends Component {
  render() {
    return (
      <ScrollView >
      <View style={{flex: 1}}>
      

      <View>


      <View style={{flexDirection: 'row', justifyContent: 'space-around', }}>
        <Text style={{fontSize:16, fontWeight: 'bold'}}>Reviews and Ratings</Text>        
        <Text style={{fontSize:16,}}>View all</Text>        
        </View>


        <View style={{flexDirection: 'row', justifyContent: 'flex-start',marginLeft: 40, marginTop: 18 }}>
          <Text style={{fontSize: 20,fontWeight: 'bold'}}>4.2</Text>
          <Text style={{marginTop: 6}}> / 5.0</Text>
        </View>

        <View  style={{flexDirection: 'row',marginLeft: 40,marginTop: 7,}}>
        <Image source={require('./image/star.png')} style={{width: 20, height: 20, }}/> 
        <Image source={require('./image/star.png')} style={{width: 20, height: 20, }}/>
        <Image source={require('./image/star.png')} style={{width: 20, height: 20, }}/>
        <Image source={require('./image/star.png')} style={{width: 20, height: 20, }}/>
        <Image source={require('./image/star.png')} style={{width: 20, height: 20, }}/>
          </View>
         

          <View  style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 25, marginLeft:40}}>

          <Image source={require('./image/man.png')} style={{fontSize: 12 }}/>
          <View  style={{flexDirection: 'column', justifyContent: 'flex-start',}}>
          <Text style={{fontSize: 16}}> Ted Moseby</Text>
          <Text> Top Critic</Text>
          </View>
          
          
          
          <Image source={require('./image/star.png')} style={{width: 20, height: 20, marginLeft: 70 }}/>
          <Image source={require('./image/star.png')} style={{width: 20, height: 20, }}/>
          <Image source={require('./image/star.png')} style={{width: 20, height: 20, }}/>
          <Image source={require('./image/star.png')} style={{width: 20, height: 20, }}/>
          
          </View>

          <View  style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 25, marginLeft:40}}>
            <Text>{`"A great place with an amazing ambiance. \nWould recommend 10/10"`}</Text>
          </View>



          <View style={{flexDirection: 'row', justifyContent: 'flex-start',marginLeft:40, marginTop: 25}}>
          <Image source={require('./image/up_like.png')} style={{width: 20, height: 20,  }}  />
         
          <Image source={require('./image/down_like.png')} style={{width: 20, height: 20, marginLeft:20 }}/>

          <Image source={require('./image/chat_box.png')} style={{width: 25, height: 20,marginLeft:190 }}/>
          </View>
        

          <View  style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 25, marginLeft:40}}>

<Image source={require('./image/woman.png')} style={{fontSize: 12 }}/>
<View  style={{flexDirection: 'column', justifyContent: 'flex-start',}}>
<Text style={{fontSize: 16}}> Jane Crawfard</Text>
<Text> Top Critic</Text>
</View>



<Image source={require('./image/star.png')} style={{width: 20, height: 20, marginLeft: 55 }}/>
<Image source={require('./image/star.png')} style={{width: 20, height: 20, }}/>
<Image source={require('./image/star.png')} style={{width: 20, height: 20, }}/>
<Image source={require('./image/star.png')} style={{width: 20, height: 20, }}/>

</View>

<View  style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 25, marginLeft:40}}>
  <Text>{`"A great place with an amazing ambiance. \nWould recommend 10/10"`}</Text>
</View>



<View style={{flexDirection: 'row', justifyContent: 'flex-start',marginLeft:40, marginTop: 25}}>
<Image source={require('./image/up_like.png')} style={{width: 20, height: 20,  }}  />

<Image source={require('./image/down_like.png')} style={{width: 20, height: 20, marginLeft:20 }}/>

<Image source={require('./image/chat_box.png')} style={{width: 25, height: 20,marginLeft:190 }}/>
</View>

      </View>

  </View>
      </ScrollView>
    );
  }
}
