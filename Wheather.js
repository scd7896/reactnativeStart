import React, {Component} from 'react';
import {StyleSheet, Text, View}from 'react-native'
import {LinearGradient}from "expo";
import {Ionicons} from '@expo/vector-icons';
export default  class Wheather extends Component{
    render(){
        return(
            <LinearGradient colors={["#00C6F8","#0058EA"]} 
            style={styles.container
            /*배경을 그레디언트를 줄 수 있다  */}> 
                <View style = {styles.upper}>
                    <Ionicons color ="white" size={144} name = "ios-rainy"></Ionicons>
                    
                    <Text style = {styles.temp}>35C'</Text>
                </View>
                <View style = {styles.lower}>
                    <Text style = {styles.title}>비가 온다 우산챙겨라</Text>
                    <Text style = {styles.subTitle}>창밖을 봐라</Text>
                </View>
            </LinearGradient>
        )
    }
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

