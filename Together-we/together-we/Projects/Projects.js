import React, { Component } from 'react';
import { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import {StyleSheet,Text,View,Image,TouchableOpacity,ScrollView,ImageBackground} from "react-native";
import Slider from '@react-native-community/slider';
import ProjectsBarImage from "./ProjectsBarImage"

export default class Projects extends Component {
  static navigationOptions = {
    headerTitle: <ProjectsBarImage />,
  };
  
render() { 
const App = () => {
  const [sliderValue, setSliderValue] = useState(15);
}
 
 const { navigate } = this.props.navigation;
     
    return (
     
<ImageBackground style={{flex: 1,width: "100%", height: "100%"}}
    source={{uri :'https://wallpapercave.com/wp/wp7632525.jpg'}}>

      <ScrollView
              vertical
                showsVerticalScrollIndicator={false}

                style={{
                  marginVertictal: -40,
                  marginTop:27,
                  marginLeft: "auto", 
                  marginRight: "auto",
      }}>

          <View style={styles.container}>
               
             <Image style={styles.image} source={{uri :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlHMivPNCvrC1ySQZUO333-7AbKPTDIySy8Q&usqp=CAU'}} />
            
              <View>
                <Text style={styles.topic}>Build School - Wellawaya, Sri Lanka</Text> 
              </View>
            
              <Slider
                maximumValue={100}
                minimumValue={0}
                minimumTrackTintColor="orange"
                maximumTrackTintColor="#c9c8c7"
                step={1}
                value={50}
                thumbTintColor= "orange"
              />
        
              <View style={{
                flexDirection : "row",
                paddingHorizontal: 10,
                marginBottom:15,
              }}>
                <Text style={{fontSize:20}}>$6900 <Text style={{color: "#807e7e",fontSize:14.5}}>Raised</Text></Text> 
              </View>

              <TouchableOpacity style={styles.dntBtn} onPress={() =>navigate('Pay')} >
                <Text  style={styles.dntText} >Donate Now</Text>
              </TouchableOpacity>

          </View>

          <View style={styles.container}>
               
             <Image style={styles.image} source={{uri :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGGaFJZDbAhbD6Q6TGgl9wH0etGmm8dPHl0w&usqp=CAU'}} />
            
              <View>
                <Text style={styles.topic}>Build Hospital - Wellawaya, Sri Lanka</Text> 
              </View>
            
              <Slider
                maximumValue={100}
                minimumValue={0}
                minimumTrackTintColor="orange"
                maximumTrackTintColor="#c9c8c7"
                step={1}
                value={20}
                thumbTintColor= "orange"
              />
        
              <View style={{
                flexDirection : "row",
                paddingHorizontal: 10,
                marginBottom:15,
              }}>
                <Text style={{fontSize:20}}>$6900 <Text style={{color: "#807e7e",fontSize:14.5}}>Raised</Text></Text> 
              </View>

              <TouchableOpacity style={styles.dntBtn} onPress={() =>navigate('Pay')} >
                <Text  style={styles.dntText}>Donate Now</Text>
              </TouchableOpacity>

          </View>

          <View style={styles.container}>
               
             <Image style={styles.image} source={{uri :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmuKo_o4M8oIWhvzxNSEEpUKLTqUj5DjkhA&usqp=CAU'}} />
            
              <View>
                <Text style={styles.topic}>Donate Medicines to Anuradhapura Hospital, Sri Lanka</Text> 
              </View>
            
              <Slider
                maximumValue={100}
                minimumValue={0}
                minimumTrackTintColor="orange"
                maximumTrackTintColor="#c9c8c7"
                step={1}
                value={70}
                thumbTintColor= "orange"
              />
        
              <View style={{
                flexDirection : "row",
                paddingHorizontal: 10,
                marginBottom:15,
              }}>
                <Text style={{fontSize:20}}>$6900 <Text style={{color: "#807e7e",fontSize:14.5}}>Raised</Text></Text> 
              </View>

              <TouchableOpacity style={styles.dntBtn} onPress={() =>navigate('Pay')}>
                <Text  style={styles.dntText}>Donate Now</Text>
              </TouchableOpacity>

          </View>

          <View style={styles.container}>
               
             <Image style={styles.image} source={{uri :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGGaFJZDbAhbD6Q6TGgl9wH0etGmm8dPHl0w&usqp=CAU'}} />
            
              <View>
                <Text style={styles.topic}>Build Hospital - Wellawaya, Sri Lanka</Text> 
              </View>
            
              <Slider
                maximumValue={100}
                minimumValue={0}
                minimumTrackTintColor="orange"
                maximumTrackTintColor="#c9c8c7"
                step={1}
                value={90}
                thumbTintColor= "orange"
              />
        
              <View style={{
                flexDirection : "row",
                paddingHorizontal: 10,
                marginBottom:15,
              }}>
                <Text style={{fontSize:20}}>$6900 <Text style={{color: "#807e7e",fontSize:14.5}}>Raised</Text></Text> 
              </View>

              <TouchableOpacity style={styles.dntBtn} onPress={() =>navigate('Pay')}>
                <Text  style={styles.dntText}>Donate Now</Text>
              </TouchableOpacity>

          </View>

          <View style={styles.container}>
               
             <Image style={styles.image} source={{uri :'https://media.4-paws.org/6/3/1/f/631f8b7e6e4772c6350b660a9b871be32b51212f/VIER%20PFOTEN_2016-09-18_081-1927x1333-1920x1328.webp'}} />
            
              <View>
                <Text style={styles.topic}>Animal Shelter - Gampaha, Sri Lanka</Text> 
              </View>
            
              <Slider
                maximumValue={100}
                minimumValue={0}
                minimumTrackTintColor="orange"
                maximumTrackTintColor="#c9c8c7"
                step={1}
                value={85}
                thumbTintColor= "orange"
              />
        
              <View style={{
                flexDirection : "row",
                paddingHorizontal: 10,
                marginBottom:15,
              }}>
                <Text style={{fontSize:20}}>$6900 <Text style={{color: "#807e7e",fontSize:14.5}}>Raised</Text></Text> 
              </View>

              <TouchableOpacity style={styles.dntBtn} onPress={() =>navigate('Pay')}>
                <Text  style={styles.dntText}>Donate Now</Text>
              </TouchableOpacity>

          </View>

          <View style={styles.container}>
               
             <Image style={styles.image} source={{uri :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGGaFJZDbAhbD6Q6TGgl9wH0etGmm8dPHl0w&usqp=CAU'}} />
            
              <View>
                <Text style={styles.topic}>Build Hospital - Wellawaya, Sri Lanka</Text> 
              </View>
            
              <Slider
                maximumValue={100}
                minimumValue={0}
                minimumTrackTintColor="#12de93"
                maximumTrackTintColor="#c9c8c7"
                step={1}
                value={100}
                thumbTintColor= "#12de93"
              />
        
              <View style={{
                flexDirection : "row",
                paddingHorizontal: 10,
                marginBottom:15,
              }}>
                <Text style={{fontSize:20}}>$6900 <Text style={{color: "#807e7e",fontSize:14.5}}>Raised</Text></Text> 
              </View>

              <TouchableOpacity style={styles.dntBtn} onPress={() =>navigate('Pay')}>
                <Text  style={styles.dntText}>Donate Now</Text>
              </TouchableOpacity>

          </View>

               <TouchableOpacity style={styles.moreBtn} >
                <Text  style={styles.moreText}>More Projects</Text>
              </TouchableOpacity>

      </ScrollView>

</ImageBackground>      

    
  );
}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height:370,
    width:300,
    borderRadius:15,
    padding:5,
    marginBottom: 17,
    elevation: 3,
    shadowColor: '#52006A',
  },

  image : {
   flex: 1,
   width: "100%",
   height: "100%",
   borderRadius: 20,
   marginTop:5,
  },

  topic : {
    marginTop:5,
    marginBottom:10,
    marginLeft:15,
    marginRight:15,
    fontSize:20,
  },

  dntBtn:
 {
   width:250,
   borderRadius:15,
   height:50,
   alignItems:"center",
   justifyContent:"center",
   marginLeft: "auto",
   marginRight: "auto",
   backgroundColor:"#307ecc",
   marginBottom:5,
 },

 dntText:
 {
   color:"white",
   fontSize:15,
 },

  moreBtn:
 {
   width:170,
   borderRadius:10,
   height:50,
   alignItems:"center",
   justifyContent:"center",
   marginLeft: "auto",
   marginRight: "auto",
   backgroundColor:"#ede7e6",
   marginBottom:5,
 },

 moreText:
 {
   fontSize:15,
 },
    
})