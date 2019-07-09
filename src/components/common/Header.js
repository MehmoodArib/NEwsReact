import React from 'react';
import { Text, View } from 'react-native';


const Header = ({
    headerText,
    style
}) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={[viewStyle, style]}>
            <Text style={textStyle}>{headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#D3D3D3',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

export { Header };
