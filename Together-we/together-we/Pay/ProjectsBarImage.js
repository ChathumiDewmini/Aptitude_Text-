import React from 'react';
import {View, Image} from 'react-native';
 
const ActionBarImage = () => {
  return (
    <View style={{flexDirection: 'row'}}>
    
      <Image
        source={require("../Images/projects/tp.png")}
        style={{
          width: 120,
          height: 35,
          marginright:"auto",
        }}
      />
    </View>
  );
};
 
export default ActionBarImage;
