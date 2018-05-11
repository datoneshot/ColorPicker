import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{this.state.title}</Text>
            </View>
        );
    }
}

const styles = {
    header: {
        height: 65,
        backgroundColor: '#ECEFF1',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.3,
        elevation: 2
    },
    headerText: {
        fontSize: 18,
        ...Platform.select({
            ios: {
                marginTop: 15
            },
            android: {
                marginTop: 0
            }
        })
    }
}

