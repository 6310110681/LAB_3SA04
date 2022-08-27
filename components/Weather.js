import React, { useState } from "react";
import { Text, ImageBackground, StyleSheet, View } from "react-native";
import Forecast from "./Forecast";
import Constants from 'expo-constants';

 export default function Weather(props) {
     const [forecastInfo, setForecast] = useState(
         {            
            main: '',
            description: '',
            temp: 0
        }
    )
    return (
        <ImageBackground source={require('../bg_sky.jpg')} style={style.backdrop}>
               <View style={style.highlight}>
                 <Text style={style.titleText}>Zip code is {props.zipCode}.</Text>
                 <Forecast {...forecastInfo}/>
             </View>
         </ImageBackground>

     );
 }
 const style = StyleSheet.create(
     {
         backdrop: {
             alignItems: 'center',
             width: '100%',
             height: '100%'
         },
         highlight: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            width:"100%", 
            height:"35%", 
            paddingTop: Constants.statusBarHeight, 
            alignItems: 'center'
         },
        titleText: {
            fontSize: 25,
            fontWeight: "bold",
            color: 'white',
            textAlign: 'center'
         }
    }
) 