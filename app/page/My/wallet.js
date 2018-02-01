import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

const WalletScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>钱包页面</Text>
            <Button
                title='go 设置'
                onPress={() => navigation.navigate('Set')}
            />
        </View>
    )
}

export default WalletScreen;