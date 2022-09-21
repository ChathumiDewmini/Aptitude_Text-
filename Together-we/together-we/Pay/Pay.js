import React, { Component } from 'react';
import { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import {StyleSheet,View,ImageBackground,TouchableOpacity} from "react-native";
import { RadioButton, Text ,TextInput} from 'react-native-paper';
import ProjectsBarImage from "./ProjectsBarImage"

export default class Projects extends Component {
  static navigationOptions = {
    headerTitle: <ProjectsBarImage />,
  };
  state = {
		value: null,
	};

render() { 
const MyComponent = () => {
const [value, setValue] = React.useState('');
}
const { value } = this.state;

 const { navigate } = this.props.navigation;
     
    return (
     
<ImageBackground style={{flex: 1,width: "100%", height: "100%"}}
    source={{uri :'https://wallpapercave.com/wp/wp7632525.jpg'}}>

      

          <View style={styles.container}>
            
              <View>
                <Text style={styles.topic}>Select the amount that you want to donate</Text> 
              </View>
              
          
<View >
    <View style={{padding:15}}>
    
      <View style={{flexDirection:'row',alignItems:"center",marginBottom:20}}>
        <RadioButton value="$10" onValueChange={newValue => setValue(newValue)} />
        <Text style={styles.amount}>$10</Text>
      </View>

      <View style={{flexDirection:'row',alignItems:"center",marginBottom:20}}>
        <RadioButton value="$50" />
        <Text style={styles.amount}>$50</Text>
      </View>

      <View style={{flexDirection:'row',alignItems:"center",marginBottom:20}}>
        <RadioButton value="$100" />
        <Text style={styles.amount}>$100</Text>
      </View>

      <View style={{flexDirection:'row',alignItems:"center",marginBottom:20}}>
        <RadioButton value="$500" />
        <Text style={styles.amount}>$500</Text>
      </View>

      <View style={{flexDirection:'row',alignItems:"center",marginBottom:20}}>
        <RadioButton value="$1000" />
        <Text style={styles.amount}>$1000</Text>
      </View>
      

    
    </View>
    </View>      
              




              <TouchableOpacity style={styles.dntBtn} >
                <Text style={styles.dntText} onPress={() =>navigate('Done')}>Pay Now</Text>
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

  topic : {
    marginBottom:25,
    marginLeft:15,
    marginRight:15,
    fontSize:28,
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
   backgroundColor:"orange",
   marginBottom:5,
   marginTop:15,
 },

 dntText:
 {
   color:"white",
   fontSize:20,
 },

  amount : {
    fontSize:20,
    marginLeft:20,
    color:"grey"
  }
    
})