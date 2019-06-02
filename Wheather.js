import React, {Component} from 'react';
import {StyleSheet, Text, View}from 'react-native'
import {LinearGradient}from "expo";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import PropTypes from 'prop-types';
// export default  class Wheather extends Component{
//     render(){
//         return(
//             <LinearGradient colors={["#00C6F8","#0058EA"]} 
//             style={styles.container
//             /*배경을 그레디언트를 줄 수 있다  */}> 
//                 <View style = {styles.upper}>
//                     <Ionicons color ="white" size={144} name = "ios-rainy"></Ionicons>
                    
//                     <Text style = {styles.temp}>35C'</Text>
//                 </View>
//                 <View style = {styles.lower}>
//                     <Text style = {styles.title}>비가 온다 우산챙겨라</Text>
//                     <Text style = {styles.subTitle}>창밖을 봐라</Text>
//                 </View>
//             </LinearGradient>
//         )
//     }
// }
const weatherCase = {
    Rain :{
        colors : ["#00C6F8","#0058EA"],
        title : '비가 온다 우산 챙겨가라',
        subtitle : '창밖을 보아라 비온다',
        icon : 'weather-rainy'
    },
    Clear: {
        colors : ["#FEF253","#FF7300"],
        title : '햇볓은 쨍쨍 대머리는...',
        subtitle : '반짝반짝',
        icon : 'weather-sunny'
    },
    Thunderstorm: {
        colors : ["#00ECBC","#007ADF"],
        title : '천둥번개',
        subtitle : '우르르 쾅쾅',
        icon : 'weather-lightning-rainy'
    },
    Clouds: {
        colors : ["#D7D2CC","#304352"],
        title : '많이 흐리네',
        subtitle : '비올지도??',
        icon : 'weather-cloudy'
    },
    Snow: {
        colors : ["#7DE2FC","#B9B6E5"],
        title : '눈이온다 제설작전!',
        subtitle : '쓸어도 쓸어도 끝이없다',
        icon : 'weather-snowy'
    },
    Drizzle: {
        colors : ["#89F7FE","#66A6FF"],
        title : '비가 적당적당 시원하게',
        subtitle : '머머리되기싫으면 우산 챙겨서 나가라',
        icon : 'weather-cloudy'
    },
    Fog: {
        colors : ["#89F7FE","#304352"],
        title : '안개가 꼈습니다',
        subtitle : '킹갓미세먼지가 문제가 있는것인가',
        icon : 'weather-fog'
    },
    
}
Wheather.propTypes = {
    temp : PropTypes.number.isRequired,
    weatherName : PropTypes.string.isRequired
}
export default function Wheather({weatherName,temp}){
    return(
        <LinearGradient colors={weatherCase[weatherName].colors} 
            style={styles.container
            /*배경을 그레디언트를 줄 수 있다  */}> 
                <View style = {styles.upper}>
                    <MaterialCommunityIcons color ="white" size={144} name = {weatherCase[weatherName].icon}></MaterialCommunityIcons>
                    
                    <Text style = {styles.temp}>{temp}</Text>
                </View>
                <View style = {styles.lower}>
                    <Text style = {styles.title}>{weatherCase[weatherName].title}</Text>
                    <Text style = {styles.subTitle}>{weatherCase[weatherName].subtitle}</Text>
                </View>
            </LinearGradient>
    )
}
const styles = StyleSheet.create ({
    container : {
        flex :1 
    },
    upper :{
        flex :1,
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : 'transparent'
    },
    temp :{
        fontSize : 30,
        backgroundColor : 'transparent',
        color : 'white',
        marginTop : 10 
    },
    lower : {
        flex : 1,
        alignItems : 'flex-start',
        justifyContent : 'flex-end',
        paddingLeft : 25
    },
    title:{
        fontSize : 30,
        backgroundColor : 'transparent',
        color : 'white', 
        marginBottom :10,
        fontWeight : "300"
    },
    subTitle:{
        fontSize : 19,
        backgroundColor : 'transparent',
        color : 'white',
        marginBottom : 24
    }
})

