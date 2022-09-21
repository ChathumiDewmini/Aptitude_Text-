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

 
 const { navigate } = this.props.navigation;
     
    return (
     
<ImageBackground style={{flex: 1,width: "100%", height: "100%"}}
      source={{uri :'https://wallpapercave.com/wp/wp7632525.jpg'}}>

          <View style={styles.container}>
               
             <Image style={styles.image} source={require("../Images/done/td.png")} />
            
              <View>
                <Text style={styles.topic}>You have successfully made the donation!</Text> 
              </View>

              <TouchableOpacity style={styles.dntBtn} onPress={() =>navigate('Projects')} >
                <Text  style={styles.dntText} >Done</Text>
              </TouchableOpacity>

          </View>

</ImageBackground>      

    
  );
}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height:"90%",
    width:"90%",
    borderRadius:15,
    padding:5,
    marginBottom: "auto",
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    elevation: 3,
    shadowColor: '#52006A',
    justifyContent: "center",
  },

  image : {
    marginTop: 10,
    marginBottom: 50,
    marginLeft: "auto",
    marginRight: "auto",
    width:350,
    height:250,
  },

  topic : {
    marginBottom:35,
    marginLeft:15,
    marginRight:15,
    fontSize:28,
    textAlign:"center",
    color: "#2158cf",
  },

  dntBtn:
 {
   width:250,
   borderRadius:15,
   height:55,
   alignItems:"center",
   justifyContent:"center",
   marginLeft: "auto",
   marginRight: "auto",
   backgroundColor:"#8071ad",
 },

 dntText:
 {
   color:"white",
   fontSize:25,
 },


    
})