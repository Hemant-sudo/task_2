import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <ScrollView >
        <View style={{ flex: 1, backgroundColor: '#D3D3D3' }}>

          {/* first part */}
          {/* <View style={{ flexDirection: 'row', justifyContent: "space-around", marginTop: 20, alignItems: 'center' }}>

            <Text style={{ marginLeft: 20, fontSize: 22, fontWeight: 'bold' }}>My Cart</Text>
            <Image source={require('./image/1.png')} style={{ width: 10, height: 20, marginRight: 150 }} />
            <Text style={{ marginRight: 20, fontSize: 19, }} >Clear Cart</Text>

          </View> */}



          {/* second part */}

{/* ==================================================================================================== */}



<View style={{marginTop: 100}}>
<View style={{ flex: 1, backgroundColor: 'white', height: 277, marginLeft: '5%', marginRight: '5%', marginTop: 30, borderRadius: 20, justifyContent: 'center', alignItems: 'center', width: '69%', }}>

<View style={{ height: '80%', width: '89%', }}>

<Image
          source={require('./image/momos.jpg')}
          style={{ width: 220, height:180,borderRadius: 20,marginTop: -100,
          marginLeft: '0%' }}
        />
          <View >

          <Text style={{fontSize: 15, margin: 0, fontWeight: 'bold'}}>
        <Image source={require('./image/red_icon.png')} style={{width: 20, height: 20}}/>  Chicken Momos</Text>
          
          </View>


          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>


<Text style={{fontWeight: 'bold'}}>
<Image source={require('./image/images.png')} style={{width: 20, height: 20,}}/>
4.2
</Text>


<Text style={{fontWeight: 'bold'}}>
<Image source={require('./image/eye.png')} style={{width: 20, height: 20}}/> 2000</Text>


<Text style={{fontWeight: 'bold', }}>
<Image source={require('./image/prep.png')} style={{width: 20, height: 20,}}/> 40-50</Text>
</View>
          
<View  style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 0, borderBottomWidth: 1, borderBottomColor: 'white', paddingBottom: 10 }}>
<Text style={{marginLeft: '-8%',fontSize: 10,}}>( 550 reviews)</Text>
<Text style={{marginLeft: 0,fontSize: 10,}}>Views</Text>
<Text style={{marginRight: '-13%',fontSize: 10, }}>Prep Time</Text>

</View>


<View  style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10,}}>
<Image source={require('./image/star.png')} style={{width: 20, height: 20, }}/>
<Text style={{marginRight: -20}}>
<Image source={require('./image/kcal.jpg')} style={{width: 20, height: 20}}/> &nbsp;500</Text>
<Text style={{marginRight: -20}}><Image source={require('./image/customize.png')} style={{width: 20, height: 20}}/> Customize</Text>
</View>







</View>

<TouchableOpacity style={{padding:12, marginTop: 10,
	backgroundColor: '#FF5733',
	borderBottomLeftRadius: 20,
borderBottomRightRadius: 20, width: '100%'}}
		
		  >
        <View style={{flexDirection: 'row', justifyContent:'center' ,alignItems: 'center'}}>
        <Text style={{ fontSize:15,
	color: '#ffffff',
  textAlign: 'center', }}>Add to cart - </Text>

  <Text style={{ fontSize:20,
	color: '#ffffff',
	textAlign: 'center', }}>Rs 50</Text>
        </View>
		
		  </TouchableOpacity>


</View>
</View>






{/* ==================================================================================================== */}










        </View>



      </ScrollView>
    );
  }
}
//this is the right code of raunak after editing