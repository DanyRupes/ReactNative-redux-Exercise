// importing
import React from 'react';
import  { Text,View } from 'react-native';

// making a component 
const Header = (props)=> {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.text}>{props.headerText}</Text>
        </View>
        )
}

const styles = {

    viewStyle:{
        // flex:1,
        backgroundColor: '#ecf0f1',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height:80,
        padding: 20,
        position:'relative',
        shadowColor:'#fff',
        shadowOffset: { width:0, height: 5},
        shadowOpacity: 0.9,

    },
    text:{
        fontSize:20,
        color: '#000',
      
       
    }
}
// making Available

export { Header };
