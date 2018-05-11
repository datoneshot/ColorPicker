import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    Slider,
    View
} from 'react-native';

export default class ColorControl extends Component {
    constructor(props) {
        super(props);
        // this.state = props;
    }

    render() {
        return (
            <View style={styles.rowItem}>
                <Text>{this.props.title}</Text>
                <Slider style={styles.slider} minimumValue={0} maximumValue={255} value={this.props.value} step={1}
                onValueChange={(val) => {
                    // this.setState({value: val});
                    this.props.onValueChanged(val);
                }}/>
                <TextInput value={`${this.props.value}`} style={styles.textInput} />
            </View>
        );
    }
}

const styles = {
    slider: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5
    },
    textInput: {
        width: 50,
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center'
    },
    rowItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
}

