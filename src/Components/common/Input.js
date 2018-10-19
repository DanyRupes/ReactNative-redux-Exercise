import React from 'react';
import { View, TextInput, Text } from 'react-native';


const Input = ({ label, value, onChangeText, textContentType, placeholder, secureTextEntry })=>{
    const { container, labelStyle, inputStyle } = styles
    return(
        <View style={container}>
            <Text style={labelStyle}> {label} </Text>
            
            <TextInput 
            autoCorrect={false}
            textContentType={textContentType}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            style={inputStyle}
            value={value}
            onChangeText={onChangeText}/>
        </View>
        )
}

const styles = {
    container:{
        height: 60,
        paddingLeft: 20,
        flex:1,
        flexDirection: 'row',
        alignItems: 'center'

    },
    labelStyle : {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 16,
        lineHeight: 23,
        flex: 2,
        marginTop:2
    }
}

export { Input };