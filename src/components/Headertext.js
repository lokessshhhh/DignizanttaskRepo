import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ColorsSchemes } from '../styles/Colors';


const Headertext = ({Sampletext}) => {
    return (
        <Text style={{fontSize:hp(4),fontWeight:'bold',color:ColorsSchemes.black,marginTop:hp(10)}}>
        {Sampletext}
    </Text>
    );
};

export default Headertext;
