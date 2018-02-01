import React, { Component } from 'react';
import {
    View,
    Button,
    Text
} from 'react-native';

class DetailScreen extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        headerTitle: 'Detail',
    }

    render() {
        const {
            navigation
        } = this.props;
        return (
            <View>
                <Text style={{ fontSize: 20, fontWeight: '700' }}>详情页面</Text>
                <Button
                    title='go to Setting'
                    onPress={() => navigation.navigate('Set')}
                ></Button>
            </View>
        )
    }
}

export default DetailScreen;