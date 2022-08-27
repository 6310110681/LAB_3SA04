import React from "react"
import {View, Text, StyleSheet} from 'react-native'

export default function Forecast(props){
    return(
        <View>
            <Text style={style.Text}>main</Text>
            <Text style={style.Text}>{props.main}</Text>
             <Text style={style.Text}>description</Text>
             <Text style={style.Text}>{props.description}</Text>
             <View style= {{
                 flexDirection: "row",
                 justifyContent: 'center',

             }}>
                 <Text style={style.temp}>{props.temp}</Text>
                    <Text></Text>
                 <Text style={style.Text}>  °C</Text>
                 </View> 
        </View>
    )
}

        const style = StyleSheet.create(
        {
            Text: {
                textAlign: 'center',
                fontSize: 30,
                fontWeight: "bold",
                color: 'white',

            },

            temp: {
                fontSize: 40, 
                fontWeight: "bold", 
                color: 'white', 
                textAlign: 'center',
                lineHeight: 40
            }
    }
)  