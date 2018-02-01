import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import stores from '../app/store';

export default class Index extends Component {

    render() {
        
        return (
            <Provider store={stores}>
                <App /> 
            </Provider>
        )
    }
}