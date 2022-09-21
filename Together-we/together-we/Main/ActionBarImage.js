import React from 'react';
import {View, Image} from 'react-native';
 
const ActionBarImage = () => {
  return (
    <View style={{flexDirection: 'row'}}>
    
      <Image
        source={require("../Images/main/mt.png")}
        style={{
          width: 170,
          height: 45,
          marginLeft: 1,
        }}
      />
    </View>
  );
};
 
export default ActionBarImage;
