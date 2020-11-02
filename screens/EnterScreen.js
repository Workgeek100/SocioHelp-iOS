import * as React from 'react';
import {Text, View, TouchableOpacity, TextInput, StyleSheet, Alert} from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import SignUpScreen from './SignUpScreen';
import {RFValue} from 'react-native-responsive-fontsize';
import {Header, Icon, Badge} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';

export default class EnterScreen extends React.Component {
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.buttonText}>Hey There!</Text>
                <Text style = {styles.buttonText}>Welcome to</Text>
                <Text style= {{color : "lightgreen",fontSize : RFValue(70), fontStyle : 'italic', fontWeight : 'bold'}}>SocioHelp</Text>
                <Text style = {styles.buttonText}>Your One Stop</Text>
                <Text style = {styles.buttonText}>Solution To All Your problems</Text>
                <Text style = {{size:RFValue(20), color:"#fff"}}>Sign In or Sign Up</Text>
                <TouchableOpacity
                onPress={()=>{
                    this.props.navigation.navigate("SignIn")
                }}>
                    <Text>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{
                    this.props.navigation.navigate("SignUp")
                }}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:"#222831",
        alignItems:'center',
    },
    button : {
        backgroundColor : "#00adb5",
        borderWidth:RFValue(2),
        borderColor:"#fff",
        justifyContent:'center',
        alignItems:'center',
        marginTop:RFValue(20),
        borderRadius:RFValue(5),
    },
    buttonText:{
        fontWeight:'bold',
        color:"#fff",
        fontSize:RFValue(50),
        fontStyle:'italic',
    },
    inputBox:{
        backgroundColor : '#00adb5',
        borderColor:'#eeeeee',
        borderRadius:RFValue(5),
        borderWidth:RFValue(2),
        width:RFValue(300),
        height:RFValue(50),
        marginTop:RFValue(20),
    },
    header : {
        marginTop:-15,
        flex:0.1,
        width:RFValue(500)
    }
})