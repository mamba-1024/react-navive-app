import React from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text, Image
} from 'react-native';


class CircleScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        headerTitle: '圈子',
        tabBarLabel: '圈子',
        headerBackTitle: '圈子',
        tabBarIcon: ({tintColor, focused}) => {
            return (<Image
                style={{tintColor: tintColor}}
                source={require('../../assets/tab_index_icon_gray.png')} />
            )
        },
    }
    

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Circle Screen</Text>
                {/* <Button onPress={() => navigation.navigate('Discover')}
                title='Discover'
            /> */}
            </View>
        )
    }
}

function mapStateToProps(state) {

    return {
        
    }
}

export default connect(mapStateToProps)(CircleScreen);