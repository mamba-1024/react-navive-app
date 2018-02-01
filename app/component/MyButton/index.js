import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

/**
 * @param title string
 * @param onPress function
 * @param style object
 * @return React.Node
 * **/

const MyButton = ({
    title,
    onPress,
    style = style ? style : {}
}) => {
    const {
        height,
        width,
        color,
        backgroundColor,
        fontSize
    } = style;

    return (
        <TouchableOpacity activeOpacity={1} onPress={onPress}
            style={[styles.btnContent, {
                height: height ? height : 40,
                width: width ? width : 120, backgroundColor: backgroundColor ? backgroundColor : "#108ee9"
            }]}
        >
            <Text style={[styles.btn, { color: color ? color : '#fff', fontSize: fontSize ? fontSize : 13 }]} >{title}</Text>
        </TouchableOpacity>
    )
}

export default MyButton;

const styles = StyleSheet.create({
    btnContent: {
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#108ee9',
        borderColor: '#108ee9',
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 40
    },
    btn: {
        textAlign: 'center',
        color: '#fff',
    }
});