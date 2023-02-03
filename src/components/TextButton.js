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

const TextButton = ({buttonText, mainText, onPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp(2),
        alignSelf: 'center',
      }}>
      <Text style={{color: ColorsSchemes.grey}}>{mainText}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            color: ColorsSchemes.black,
            borderBottomWidth: 1,
            marginLeft: wp(1.5),
          }}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TextButton;
