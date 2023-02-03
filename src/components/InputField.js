//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,Image, TextInput} from 'react-native';
import { ColorsSchemes } from '../styles/Colors';
import { LoginScreeStyle } from '../styles/LoginsScreenStyles';

// create a component
const InputField = ({placeholder,onChangeText,value}) => {

    return (
        <View style={LoginScreeStyle.textinputView}>
        <TextInput
        placeholderTextColor={ColorsSchemes.black}
        style={LoginScreeStyle.textinputstyle}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        />
        </View>
    );
};

export default InputField;
