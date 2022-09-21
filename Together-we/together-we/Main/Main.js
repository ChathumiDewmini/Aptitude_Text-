import React, { Component } from 'react';
import { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,ImageBackground} from "react-native";
import ActionBarImage from "./ActionBarImage"



export default class Main extends Component {
  static navigationOptions = {
    headerTitle: <ActionBarImage />,
  };

  render() {
    
    const { navigate } = this.props.navigation;
    
     
    return (
     <ImageBackground style={{flex: 1,width: "100%", height: "100%"}} source={require("../Images/main/bgg.png")}> 
      
        <View style={styles.container}>
        
          <Image style={styles.image} source={require("../Images/main/mlogo.png")} />

            <View>
              <Text style={styles.h1}>We want to give them a better tommorow!</Text>
              <Text style={styles.des}>We are non-profit and non-compromised. With the help of thousands of people like you we are continuing to success our mission through a vision.Join with us now!</Text>
            </View>
            
            <TouchableOpacity style={styles.loginBtn }onPress={() =>navigate('Projects')}  >
              <Text style={styles.tText}>Get Started</Text>
            </TouchableOpacity>
            

        </View>
    
    </ImageBackground>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft:10,
    marginRight:10,
  },

  image: {
    marginTop: 20,
    marginBottom: 20,
    width:370,
    height:350,
  },

  h1:{
    color:"white",
    fontSize:30,
    textAlign:"left",
    marginBottom:9,
  },

  des:{
    color:"white",
    fontSize:14,
    textAlign:"left",
  },

  loginBtn: {
    width: 200,
    borderRadius: 15,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "white",
  },
    
  tText:
 {
   fontSize:20,
 },
})
