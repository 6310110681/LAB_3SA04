import React, { useState, useEffect } from "react";
import { Text, ImageBackground, StyleSheet, View } from "react-native";
import Forecast from "./Forecast";
import Constants from 'expo-constants';

 export default function Weather(props) {
     const [forecastInfo, setForecastInfo] = useState(
         {            
            main: '-',
            description: '-',
            temp: 0
        }
    )

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`);
        if (props.zipCode) {
          fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=e755c7959fb15b66f0a808112a1c7537`
          )
            .then((response) => response.json())
            .then((json) => {
              setForecastInfo({
                main: json.weather[0].main,
                description: json.weather[0].description,
                temp: json.main.temp,
              });
            })
            .catch((error) => {
              console.warn(error);
            });
        }
      }, [props.zipCode]);


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