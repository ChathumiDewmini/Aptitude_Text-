import React, { Component } from 'react';
 
//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
 
//Import screens
import Main from './Main/Main';
import Projects from './Projects/Projects';
import Pay from './Pay/Pay';
import Done from './Done/Done';


const App = createStackNavigator({

    Main: { screen: Main },
    Projects: { screen: Projects },
    Pay: { screen: Pay },
    Done: { screen: Done }, 
    
  },
  {
    initialRouteName: 'Main',
  }
);
export default createAppContainer(App);