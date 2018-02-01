import React, { Component } from 'react';
import {
    TabNavigator,
    StackNavigator,
} from 'react-navigation';
import { Image } from 'react-native';

import CircleScreen from './page/Circle';
import ChatScreen from './page/Chat';
import DiscoverScreen from './page/Discover';
import MyScreen from './page/My';

import DetailScreen from './page/My/detail';
import SetScreen from './page/My/seting';
import LoginScreen from './page/Login';
import WalletScreen from './page/My/wallet';


const MainTabs = TabNavigator({
    Circle: { screen: CircleScreen },
    Chat: { screen: ChatScreen },
    Discover: { screen: DiscoverScreen },
    My: { screen: MyScreen },
}, {
        initialRouteName: 'My',
        navigationOptions: { // 处理从登录页面跳转到主页后的情况
            headerBackTitle: null,
            headerTruncatedBackTitle: null,
            headerLeft: null, // 不显示左侧返回按钮
            gesturesEnabled: false, // 是否支持滑动返回手势，iOS默认支持，安卓默认关闭
        },
        tabBarOptions: {
            // style: {
            //     height: 46
            // },
            activeBackgroundColor: 'white', // 选中时的tabBar的背景颜色
            inactiveBackgroundColor: 'white', // 没有选中时的tabBar的背景颜色
            activeTintColor: '#108ee9', // 选中时的字体和tabBarIcon颜色 
            inactiveTintColor: '#aaa', // 没有被选中时的字体和tabBarIcon颜色
        }
    });

const MyNavigator = StackNavigator({
    Main: { screen: MainTabs },
    Login: { screen: LoginScreen },
    Detail: { screen: DetailScreen },
    Set: { screen: SetScreen },
    Wallet: { screen: WalletScreen }
});

module.exports = MyNavigator;