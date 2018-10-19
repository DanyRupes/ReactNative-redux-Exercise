import React from 'react';
import { Text,TouchableOpacity } from 'react-native';


const Button = ({ onPress, children })=> {

    return (
        <TouchableOpacity 
        onPress={onPress} //whenever button pressed calling parent onPress MEthod
        style={styles.buttonStyle}>
            <Text style={styles.textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    )

}


const styles = {
    buttonStyle: {
        // padding: 8,
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        margin:5
    },
    textStyle:{
        fontSize: 16,
        alignSelf: 'center',
        color: '#007aff',
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    }
}

export { Button };
