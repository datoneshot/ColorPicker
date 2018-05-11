/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Slider,
  TextInput,
  View
} from 'react-native';
import HeaderComponent from './Components/HeaderComponent';
import ColorControl from './Components/ColorControl';

export default class App extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      red: 100,
      green: 150,
      blue: 200
    };
  }

  onSliderValueChanged = (color) => {
    this.setState(color);
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderComponent title="Color Picker" />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: 300, height: 350 }}>
            <View style={{ flex: 1 }}>
              <ColorControl title='R' value={this.state.red} onValueChanged={(val) => {
                const currentColors = this.state;
                const newColor = {...currentColors, red: val};
                this.onSliderValueChanged(newColor);
              }} />
              <ColorControl title='G' value={this.state.green} onValueChanged={(val) => {
                const currentColors = this.state;
                const newColor = {...currentColors, green: val};
                this.onSliderValueChanged(newColor);
              }} />
              <ColorControl title='B' value={this.state.blue} onValueChanged={(val) => {
                const currentColors = this.state;
                const newColor = {...currentColors, blue: val};
                this.onSliderValueChanged(newColor);
              }} />
            </View>
            <View style={{ flex: 1, backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})` }}>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  }
});
