import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image,
    AsyncStorage,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { CHANGE_NUMBER, changeNumber } from '../../action/my';
import {
    TinyLineNav,
    MyButton
} from '../../component';

class MyScreen extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        headerTitle: '我',
        tabBarLabel: '我',
        headerBackTitle: '我',
        tabBarIcon: ({ tintColor, focused }) => {
            return (<Image
                style={{ tintColor: tintColor }}
                source={require('../../assets/tab_mine_icon_gray.png')} />
            )
        },
    }
    componentWillMount() {
        const { navigation } = this.props;
        let name;
        AsyncStorage.getItem('userName').then(result => {
            name = JSON.parse(result);
            console.log(name);
            if (!name) {
                navigation.navigate('Login');
            }
        }).catch(error => {
            console.log(error);
        });
    }
    handleClickIncrease = () => {
        const {
            dispatch,
            number
        } = this.props;
        let newNumber = number + 1;
        dispatch(changeNumber(newNumber));
    }
    handleClickReduce = () => {
        const {
            dispatch,
            number,
        } = this.props;
        let newNumber = number - 1;
        dispatch(changeNumber(newNumber));
    }
    _logout = () => {
        AsyncStorage.removeItem('userName');
        this.props.navigation.navigate('Login');
    }

    
    source = ()=>{
        return <Image source={require('../../assets/basic_info_icon.png')}></Image>
    }

    render() {
        const {
            targetText,
            number,
            navigation
        } = this.props;

        return (
            <ScrollView style={styles.scrollContent}>
                <View>
                    <Text style={{ textAlign: 'center', marginBottom: 15 }}>{targetText}</Text>

                    <View>
                        <TinyLineNav
                            onPress={() => navigation.navigate('Wallet')}
                            title='钱包'
                            source={this.source}
                        />
                        <TinyLineNav
                            onPress={() => navigation.navigate('Set')}
                            title='设置'
                            source={this.source}
                        />
                        <TinyLineNav
                            onPress={() => navigation.navigate('Detail')}
                            title='详情'
                            source={this.source}
                        />
                    </View>

                    <View style={styles.numberContent}>
                        <MyButton
                            title='+'
                            onPress={this.handleClickIncrease}
                        />
                        <Text style={{ fontSize: 20, width: 50, textAlign: 'center' }}>{number}</Text>
                        <MyButton
                            title='-'
                            onPress={this.handleClickReduce}
                        />
                    </View>

                    <View style={{ flex: 0, justifyContent: 'center', alignItems: 'center' }}>
                        <MyButton
                            onPress={this._logout}
                            title="LogOut"
                        ></MyButton>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    const states = state.myReducer;
    return {
        targetText: states.targetText,
        number: states.number,
        userName: state.loginReducer.userName,
        targetKey: states.targetKey
    }
};

export default connect(mapStateToProps)(MyScreen);

const styles = StyleSheet.create({
    scrollContent: {
        paddingTop: 10,
    },
    numberContent: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 15,
        marginTop: 15
    },
    logout: {
        backgroundColor: '#108ee9',
        color: '#fff',
        flex: 0,
        height: 40,
        width: 180,
    },
});