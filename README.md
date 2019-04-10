# react-native-infoslider
react native info slider npm package
# Example Video
https://youtu.be/syuTwnHR1D8
# Usage
npm i react-native-infoslider --save

```javascript
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
        autoplayTimeout={3}
        skipButtom={<View><TouchableOpacity style={{marginTop:80}} onPress={()=> {
          console.log("SKIP")}}><Text>S K I P</Text></TouchableOpacity></View>}
        />
    );
  }
}
 ```
 # Props
 | Prop|Defaul value|Type|Description|
 | ---      | ---       | ---      | ---       |
| data(required)|-|Array of object(title, text, image)|This prop array is the data the component will show|
| showDots|true|bool|Show dots pagination|
| activeDotColor| - |string|Custom color for active dot|
| showDots|true|bool|Show dots pagination|
| titleColor| - |stirng|Custom color for title element|
| textColor| - |stirng|Custom color for text element|
| loop| true |bool|Set to false to disable loop mode|
| autoplay| false |bool|Set to true enable autoplay mode|
| autoplayTimeout| 2.5 |number|Delay between auto play transitions in second|
| skipButtom| - |React Native Component|Render a component under your slide Text|
# Data Example

```js
      [
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
```
# Dependencies

react-native-swiper

https://github.com/leecade/react-native-swiper

# Run example

1. clone
2. cd react-native-infoslider/example
3. npm install
4. react-native run-ios

# Contact

Twitter: @holaconstancio
