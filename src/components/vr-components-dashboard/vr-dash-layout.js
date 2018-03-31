import React from 'react';
import {
  View,
  Animated
} from 'react-vr';

import { Easing } from 'react-native';

//import MenuButtons
//Title
//From Components

class DashboardLayout extends React.Component {

  constructor(props) {
    super(props);
    //Define state
    this.state = {
      slideLeft: new Animated.value(-1),
      fadeIn: new Animated.Value(0),
      borderWidths: [0, 0, 0, 0, 0, 0] //lie graph
      selectionIndex:"",
      stage: 1 //index for AJAX
    };
  }

  componentDidMount(){
    //We want to have an animation that translates
    //the dashboard from 2D to 3D
    //Stereographically
  }

  //Input cipher
  updateStage(input) {
    if (this.state.showButton == false) {

    }
  }
}
