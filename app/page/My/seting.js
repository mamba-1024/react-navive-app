import React from 'react';
import {
    View,
    Text
} from 'react-native';


class SetScreen extends React.Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        headerTitle: 'Setting',
    }

    render() {

        return (
            <View>
                <Text>设置。。。。</Text>
            </View>
        )
    }
}

export default SetScreen;