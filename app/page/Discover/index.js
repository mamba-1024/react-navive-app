import React from 'react';
import {
    View,
    Text, Image
} from 'react-native';

class DiscoverScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        headerTitle: '发现',
        tabBarLabel: '发现',
        headerBackTitle: '发现',
        tabBarIcon: ({tintColor, focused}) => {
            return (<Image
                style={{tintColor: tintColor}}
                source={require('../../assets/tab_bill_icon_gray.png')} />
            )
        },
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Discover Screen</Text>
            </View>
        )
    }
}


export default DiscoverScreen;