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
import Headertext from '../components/Headertext';
import {ColorsSchemes} from '../styles/Colors';
import {Strings} from '../../src/themes/Strings';
import {Images} from '../themes/Images';
import {LoginScreeStyle} from '../styles/LoginsScreenStyles';
import InputField from '../components/InputField';
import axios from 'axios';
import {BaseURL} from '../themes/BaseURL';
import TextButton from '../components/TextButton';
import FilledButton from '../components/FilledButton';

const LoginScreen = ({navigation}) => {


  const [useremail, setUseremail] = useState('');
  const [userpassword, setUserpassword] = useState('');

  const loginUser = async () => {
    
    const formData = {
      email: 'eve.holtreqres.in',
      password: 'cityslicka',
    };
    useremail === '' || userpassword === ''
      ? alert('Please Insert All Data')
      : await axios
          .post(`${BaseURL}api/login`, formData)
          .then(response => {
            console.log(response.data, '===res===');
            alert('Login Succesfull');
          })
          .catch(error => {
            console.log(error.response.data, '===err===');
            alert('User Not Found');
          });
  };

  return (
    <View style={LoginScreeStyle.mainscreenAlign}>
      <Headertext Sampletext={Strings.loginbelow} />
      <View style={{marginTop: hp(20)}}>
        <InputField
          value={useremail}
          placeholder={Strings.enteremail}
          onChangeText={value => {
            setUseremail(value);
          }}
        />
        <InputField
          value={userpassword}
          onChangeText={value => {
            setUserpassword(value);
          }}
          placeholder={Strings.enterpassword}
        />
        <FilledButton
          onPress={() => {
            loginUser();
          }}
          buttonText={Strings.login}
        />
        <TextButton
          onPress={() => {
            navigation.navigate('SignUp');
          }}
          mainText={Strings.noacc}
          buttonText={Strings.signup}
        />

        <TextButton
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}
          buttonText={Strings.skiplogin}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
