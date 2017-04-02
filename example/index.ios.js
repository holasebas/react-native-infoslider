import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
 import Infoslider from 'react-native-infoslider'
export default class example extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      data:[
          {
          title:"Hello World", 
          text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard",
          image: require('./images/1.jpg')},
          {
          title:"Lorem Ipsum", 
          text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard",
          image: require('./images/2.jpg')},
          {
          title:"Lorem Ipsum", 
          text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard",
          image: require('./images/3.jpg')},
          {
          title:"Lorem Ipsum", 
          text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard",
          image: require('./images/4.jpg')},
          
      ]
    };
  }
  render() {
    return (
      <Infoslider 
        data={this.state.data} 
        showDots={true} 
        activeDotColor="#04B4AE" 
        titleColor="#000" 
        textColor="#666" 
        loop={false} 
        autoplay={true} 
        autoplayTimeout={3}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('example', () => example);
