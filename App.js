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


<Text style={{fontSize: 19,margin: 30, fontWeight: 'bold',
         }}>
           People also ordered:
         </Text>
<View style={{marginTop: 50}}>

<View style={{ flex: 1, backgroundColor: 'white', height: 277, marginLeft: '5%', marginRight: '5%', marginTop: 30, borderRadius: 20, justifyContent: 'center', alignItems: 'center', width: '69%', }}>

<View style={{ height: '82%', width: '89%', }}>
<View style={{justifyContent: 'center', alignItems: 'center'}}>
<Image 
          source={require('./image/momos.jpg')}
          style={{ width: 220, height:180,borderRadius: 20,marginTop: -100,
          marginLeft: '0%' }}
        />
</View>

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


<View  style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, }}>
<Image source={require('./image/star.png')} style={{width: 20, height: 20, }}/>
<Text style={{marginRight: -20}}>
<Image source={require('./image/kcal.jpg')} style={{width: 20, height: 20}}/> 500</Text>
<Text style={{marginRight: -20}}><Image source={require('./image/customize.png')} style={{width: 20, height: 20}}/> Customize</Text>
</View>







</View>

<TouchableOpacity style={{padding:12, marginTop: 0,
	backgroundColor: '#FF5733',
	borderBottomLeftRadius: 20,
borderBottomRightRadius: 20, width: '101%',}}
		
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
<View >


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

{/* ==================================================================================================== */}


<View style={{marginTop: 10, marginLeft: 10, marginBottom: 20}}>
        {/* Description */}
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>Description</Text>

        <Text style={{marginTop: 12, fontSize: 18}}>A restaurant is a place where cooked food is sold to the public, and where people sit down to eat it. It is also a place where people go to enjoy the time and to eat a meal.</Text>

       {/* allergy */}
        <Text style={{fontSize: 22, fontWeight: 'bold', marginTop: 25}}>Allergy Info</Text>
        <Text style={{marginTop: 12, fontSize: 18}}>This food items contains:</Text>

        <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 30, marginTop: 12}}>
        <Image source={require('./image/peanut.png')} style={{width: 40, height: 40, }}/>
        <Image source={require('./image/gluten.png')} style={{width: 40, height: 40,  marginLeft: 70}}/>

        </View>

        <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 30, marginTop: 12}}>
       <Text>Peanuts</Text>
       <Text style={{ marginLeft: 60}}>Gluten</Text>

        </View>


      {/* Nutrition info */}
      <View style={{marginTop: 25}} >
      <Text style={{fontSize: 22, fontWeight: 'bold'}}>Nutrition Info </Text>

        {/* fat */}
      <View  style={{flexDirection: 'row', justifyContent: 'flex-start',  marginTop: 12}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Fat</Text>
      <Text style={{marginLeft: 230,fontSize: 20,}}> 12 gm</Text>
      </View>
        {/* saturated */}
      <View  style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 8}}>
      <Text style={{fontSize: 20, marginLeft: 18 }}>Saturated </Text>
      <Text style={{fontSize: 20, marginLeft: 156,}}>2.2 gm</Text>
      </View>
    
      {/* unsaturated */}
      <View  style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 8}}>
      <Text style={{fontSize: 20, marginLeft: 18 }}>Unsaturated </Text>
      <Text style={{fontSize: 20, marginLeft: 137,}}>10 gm</Text>
      </View>

      {/* Carbohydrates */}
      <View  style={{flexDirection: 'row', justifyContent: 'flex-start',  marginTop: 12}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Carbohydrates
      </Text>
      <Text style={{marginLeft: 135,fontSize: 20,}}> 24 gm</Text>
      </View>

         {/* Dietrary fibers */}
         <View  style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 8}}>
      <Text style={{fontSize: 20, marginLeft: 18 }}>Dietary Fibers </Text>
      <Text style={{fontSize: 20, marginLeft: 126,}}>2.2 gm</Text>
      </View>
    
      {/* Total sugar */}
      <View  style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 8}}>
      <Text style={{fontSize: 20, marginLeft: 18 }}>Total Sugars </Text>
      <Text style={{fontSize: 20, marginLeft: 137,}}>10 gm</Text>
      </View>


  {/* Proteins */}
  <View  style={{flexDirection: 'row', justifyContent: 'flex-start',  marginTop: 12}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Proteins
      </Text>
      <Text style={{marginLeft: 200,fontSize: 20,}}> 24 gm</Text>
      </View>


  {/* Cholestrol */}
  <View  style={{flexDirection: 'row', justifyContent: 'flex-start',  marginTop: 12}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Cholestrol
      </Text>
      <Text style={{marginLeft: 180,fontSize: 20,}}> 24 gm</Text>
      </View>


        {/* Sodium */}
  <View  style={{flexDirection: 'row', justifyContent: 'flex-start',  marginTop: 12}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Sodium
      </Text>
      <Text style={{marginLeft: 200,fontSize: 20,}}> 24 gm</Text>
      </View>   


      </View>
    
      </View> 



{/* ==================================================================================================== */}
        </View>



      </ScrollView>
    );
  }
}
//this is the right code of raunak after editing