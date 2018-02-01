import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

class ChatScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        headerTitle: '聊天',
        tabBarLabel: '聊天',
        headerBackTitle: '聊天',
        tabBarIcon: ({tintColor, focused}) => {
            return (<Image
                style={{tintColor: tintColor}}
                source={require('../../assets/uc_setting_icon.png')} />
            )
        },
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Chat Screen</Text>
            </View>
        )
    }
}

export default ChatScreen;