import React from "react";
import { View, Text , StyleSheet } from "react-native";
  export default function Forecast(props) {
      return (
          <View> 
         
              <View style= {{
                  flexDirection: "row",
                  justifyContent: 'center',
              }}>
                <Text style={style.temp}>{props.temp}</Text>
                     <Text></Text>
                  <Text style={style.Text}>  °C</Text>
                  
            </View>
            <View>
            <Text style={style.Text}></Text>
            </View>
            <Text style={style.Text}>{props.main}</Text>
            <Text style={style.Text}>------------------------------------</Text>
            <View style= {{
                 flexDirection: "row",
                 justifyContent: 'space-between',
             }}>
                 <View>
                     <Text style={style.Text}>   Humidity    {props.humidity} %  </Text>
                     <Text> </Text>
                     <Text style={style.Text}>   Feel Like    {props.feels_like} °C    </Text>
                 </View> 
             <View>
                     <Text> </Text>
                     <Text> </Text>
                     <Text style={style.Text}>{props.description}</Text>
            </View>
             <Text> </Text>
             </View>
             <Text style={style.Text}>~~~~~~~~~~~~~~~~~~~~~~~~~~</Text>


          </View> 
      );
}