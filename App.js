import React , {Component} from 'react';
import { StatusBar,StyleSheet, Text, View,ActivityIndicator } from 'react-native';
import Wheather from './Wheather';
const API_KEY = '0ef3f2a71104f05e46a79a60e2608714';


export default class App extends Component {
  state = {
    isLoad : false,
    error : null,
    whetherData : '',
    temperature : null,
    name : null
  }
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      }, error => {
        this.setState({
          error : error
        })
      });
  }
  _getWeather =(lat,lon)=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json=>{
      console.log(json.weather[0].main);
      this.setState({
        temperature : json.main.temp,
        name : json.weather[0].main,
        isLoad:true
      })
    })
  }
  render() {
    const {isLoad , error, temperature, name} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden = {true}></StatusBar>
        {isLoad ? <Wheather weatherName = {name} temp = {Math.floor(temperature - 269)}></Wheather> : 
            <View style = {styles.loading}>
              <Text style ={styles.loadingText}>날씨 정보를 받아오고있자너</Text>
              {error ? <Text style = {styles.errorText}>{error}</Text> : null}
            </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#fff', //백그라운드
    // flexDirection : 'row' 컴포넌트들의 배정을 위치를 가로로 할것인지 세로로 할 것인지 결정
    // justifyContent :'space-around', // 세로줄의 중앙에 배치
    // alignItems: 'stretch', // 가로줄로 중앙에 배치
    // flexDirection : 'row',
    // flexWrap : 'wrap'
  },
  // redView: {
  //   height: 50,
  //   width : 50,
  //   backgroundColor: 'red',
  //   //alignSelf : 'flex-start' 세로로 자신의 위치를 정할 수 있다.

  // },
  // yellowView: {
  //   height : 50,
  //   width : 50,
  //   backgroundColor: 'yellow',
  //   //alignSelf : 'center'
  // }
  loading : {
    flex : 1,
    backgroundColor : '#FDF6AA',
    justifyContent : 'flex-end',
    paddingLeft : 25
  },
  errorText :{
    color : 'red',
    backgroundColor : "transparent",
    marginBottom : 35
  },  
  loadingText : {
    fontSize : 25,
    marginBottom : 100,
  }
});

