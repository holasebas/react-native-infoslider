import React,{Component} from 'react'
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Animated
} from 'react-native'

import Swiper from 'react-native-swiper'
const {width} = Dimensions.get('window')
const Slide = props => (
  
  <View style={styles.TextContainer}>    
    <Animated.Text
       style={{
          color:props.titleColor,
          fontSize:20,
          fontWeight:'400',
          padding:10,
          opacity:props.opacity
        }}
       > 
        <Text>{props.titulo}</Text>

    </Animated.Text>
    <Animated.Text
       style={{
        color:props.textColor,
        fontSize:14,
        paddingLeft:32,
        paddingRight:32,  
        textAlign:'center',
        opacity:props.opacity,
              transform: [                       
              {translateX: props.textValue}, 
            ]
          }}
       > 
        <Text>{props.texto}</Text>
    </Animated.Text>
          {props.skipButtom}
   
  </View>



)


export default class infoslider extends Component{

  constructor(props) {
    super(props);
  
    this.state = {
        titleValue: new Animated.Value(0),
        textValue: new Animated.Value(0),
        imgValue: new Animated.Value(1),
        opacity: new Animated.Value(1),
        index:0,
        before:null,
        currentImage: this.props.data[0].image

    };
  }

  componentDidMount(){
      this.state.textValue.setValue(width);
        this.state.titleValue.setValue(width);
        this.state.imgValue.setValue(0)

        Animated.timing(this.state.imgValue, {
          toValue: 1,
          delay: 0,
          duration: 600
      }).start()
      Animated.timing(this.state.textValue, {
          toValue: 0,
          delay: 0,
          duration: 800
      }).start() 

      Animated.timing(this.state.titleValue, {
          toValue: 0,
          delay: 0,
          duration: 400
      }).start()  


  }

  animacion(index) {
    
    var before = this.state.index
    this.setState({index:index})
    this.state.imgValue.setValue(1);
    if(before < index){
      this.state.textValue.setValue(width);
        this.state.titleValue.setValue(width);
    }else{
      this.state.textValue.setValue(-width);
        this.state.titleValue.setValue(-width);
    }
      Animated.timing(this.state.imgValue, {
          toValue: 0.2,
          delay: 0,
          duration: 500
      }).start((event) => {
        if (event.finished) {
          this.setState({currentImage:this.props.data[index].image}) 
        this.state.imgValue.setValue(.2);
          Animated.timing(this.state.imgValue, {
              toValue: 1,
              delay: 0,
              duration: 500
          }).start()
        }})

      Animated.timing(this.state.textValue, {
          toValue: 0,
          delay: 0,
          duration: 800
      }).start() 

    Animated.timing(this.state.titleValue, {
          toValue: 0,
          delay: 0,
          duration: 400
      }).start()                       
    }


  render(){
    return(

      <View style={styles.container}>
        <View style={styles.ImagesContainer}>
            <Animated.Image  
                source={this.state.currentImage}
                style={{
                    position:'absolute',
                    bottom:0,
                    width:240,
                    height:240,
                    borderRadius:120,
                    opacity:this.state.imgValue,
                      transform: [                    
                        {translateX: 0},  
                      ]
                    }}
                  />
          </View>


          <Swiper
            autoplay={this.props.autoplay}
            autoplayTimeout ={this.props.autoplayTimeout}
            showsPagination ={this.props.showDots}
            activeDotColor={this.props.activeDotColor}
            loop={this.props.loop}
            width={width}
            bounces={true}
            loadMinimal={true}
            loadMinimalSize={0}
            onMomentumScrollEnd={(e,state) => this.animacion(state.index)}
            loadMinimalLoader ={<View></View>}
          >
          {
          this.props.data.map((data, i) => 
              <Slide
                key={i}
                titleColor={this.props.titleColor}
                textColor={this.props.textColor}
                titulo={data.title} 
                texto={data.text} 
                uri={data.image} 
                titleValue={this.state.titleValue} 
                textValue={this.state.textValue} 
                imgValue={this.state.imgValue}
                opacity={this.state.opacity}
                skipButtom={this.props.skipButtom}
              />
              )

          }
          </Swiper>
     
        </View>
      
      )
  }
}

const styles = StyleSheet.create({

  container: {
    flex:1,
     justifyContent: 'center',
     alignItems: 'center',
     borderWidth:1
   },

  ImagesContainer: {
   flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:0
  },
  TextContainer: {
    flex:1,
     alignItems: 'center',
     borderWidth:0
   }
});