import React from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    Button,
    AsyncStorage
} from 'react-native';
import {
    TabNavigator,
    StackNavigator,
} from 'react-navigation';
import {
    Toast
} from 'antd-mobile';
import { HANDLE_LOGIN, handleLogin } from '../../action/login';
import { MyButton } from '../../component';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        }
    }
    static navigationOptions = {
        header: null,
        gesturesEnabled: false    
    }
    _handleLogin = () => {
        const {
            name,
            password
        } = this.state;

        if (name && password) {
            const {
                navigation,
                dispatch
            } = this.props;
            // 把当前名字存为cache
            AsyncStorage.setItem('userName', JSON.stringify(name));

            dispatch(handleLogin(name));
            console.log('addName:', name);
            Toast.loading('Logining...', 1.5, () => {
                navigation.navigate('Main');
            });
        } else {
            Toast.info('请输入...')
        }

    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../assets/kobe.jpg')}
                    style={{ width: 100, height: 100 }}
                ></Image>
                <View style={styles.loginContent}>
                    <Text style={styles.loginTitle}>用户名:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => { this.setState({ 'name': text }) }}
                    ></TextInput>
                </View>
                <View>
                    <Text style={styles.loginTitle}>密码:</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        onChangeText={(text) => { this.setState({ 'password': text }) }}
                    ></TextInput>
                </View>
                <MyButton
                    title='Login'
                    onPress={this._handleLogin}
                ></MyButton>
            </View>
        )
    }
}

function mapStateToProps(state) {

    return {
        userName: state.loginReducer.userName
    }
}

export default connect(mapStateToProps)(LoginScreen);

const styles = StyleSheet.create({
    loginContent: {
        marginTop: 10
    },
    loginTitle: {
        fontSize: 24,
        color: '#666',
    },
    input: {
        borderWidth: 1,
        borderColor: '#333',
        height: 40,
        width: 180,
        borderRadius: 6,
        fontSize: 24,
        color: '#666',
        marginTop: 5,
        marginBottom: 5
    },
    btn: {
        height: 40,
        width: 180,
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
        lineHeight: 40,
        backgroundColor: '#108ee9',
        borderWidth: 1,
        borderColor: '#108ee9',
        borderRadius: 6,
        marginTop: 10
    }
});