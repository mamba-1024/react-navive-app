import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

/**
 * @param title string
 * @param onPress function
 * @return React.Node
 * **/

const TinyLineNav = ({
    onPress,
    title
}) => {
    const _onPressButton = () => {
        console.log('_onPressButton');
    }

    return (
        <TouchableHighlight onPress={onPress} style={styles.container} underlayColor='#E5E5E5'>
            <View style={styles.content}>
                <Image source={require('../../assets/basic_info_icon.png')}></Image>
                <Text style={styles.myText}>{title}</Text>
                <Image source={require('../../assets/arrow.png')}></Image>
            </View>
        </TouchableHighlight>
        // <TouchableOpacity onPress={onPress} style={styles.container} activeOpacity={0.8}>
        //     <View style={styles.content}>
        //         <Image source={require('../../assets/basic_info_icon.png')}></Image>
        //         <Text style={styles.myText}>{title}</Text>
        //         <Image source={require('../../assets/arrow.png')}></Image>
        //     </View>
        // </TouchableOpacity>
    )
}

export default TinyLineNav;

const styles = StyleSheet.create({
    container: {
        paddingLeft: 12,
        backgroundColor: "#fff"
    },
    content: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 12,
        borderBottomWidth: 1,
        borderColor: '#E5E5E5',
        
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    myText: {
        flex: 1,
        marginLeft: 16,
    }
});