//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ColorsSchemes} from '../styles/Colors';
import { LoginScreeStyle } from '../styles/LoginsScreenStyles';

const FilledButton = ({buttonText,onPress}) => {
    return (
        <TouchableOpacity
        onPress={onPress}
          style={LoginScreeStyle.filledbuttonView}>
          <Text style={{color: ColorsSchemes.white, fontsize: hp(4)}}>
            {buttonText}
          </Text>
        </TouchableOpacity>
    );
};

export default FilledButton;
