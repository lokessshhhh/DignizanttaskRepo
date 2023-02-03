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

const SignUp = ({navigation}) => {
    
  const [useremail, setUseremail] = useState('');
  const [userpassword, setUserpassword] = useState('');
  const [confpassword, setConfpassword] = useState('');

  const SignUpUser = async () => {
    const formData = {
      email: 'eve.holtreqres.in',
      password: 'cityslicka',
    };
    useremail === '' || userpassword === '' || confpassword === ''
      ? alert('Please Insert All Data')
      : userpassword !== confpassword
      ? alert('Password Does Not Match')
      : await axios
          .post(`${BaseURL}api/register`, formData)
          .then(response => {
            console.log(response.data, '===res===');
          })
          .catch(error => {
            console.log(error.response.data, '===err===');
            alert(error.response.data.error);
          });
  };

  return (
    <View style={LoginScreeStyle.mainscreenAlign}>
      <Headertext Sampletext={Strings.signupbelow} />
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
        <InputField
          value={confpassword}
          onChangeText={value => {
            setConfpassword(value);
          }}
          placeholder={Strings.confirmPass}
        />
        <FilledButton
          onPress={() => {
            SignUpUser();
          }}
          buttonText={Strings.signup}
        />
        <TextButton
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}
          mainText={Strings.noacc}
          buttonText={Strings.login}
        />
      </View>
    </View>
  );
};

export default SignUp;
