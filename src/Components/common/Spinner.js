import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// fun component
const Spinner = ({ size }) =>{ //prop
    return(
        <View  style={styles.activityIndicator}>
            <ActivityIndicator
                size={ size || 'large'} >
            </ActivityIndicator>
        </View>
    )
}

const styles ={
    activityIndicator: {
        flex: 1,
        padding:5,
        alignSelf: 'center',
        justifyContent: 'center',
    }
}
export { Spinner };