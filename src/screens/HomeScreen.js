import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Linking,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ColorsSchemes} from '../styles/Colors';
import {LoginScreeStyle} from '../styles/LoginsScreenStyles';
import axios from 'axios';
import {WebView} from 'react-native-webview';

const HomeScreen = () => {
    
  const [alldata, setAlldata] = useState([]);

  useEffect(() => {
    GetAllData();
  }, []);

  const RowView = ({secondtext, firsttext}) => {
    return (
      <View
        style={{flexDirection: 'row', marginRight: wp(25), marginTop: hp(2)}}>
        <Text style={{fontWeight: 'bold', color: ColorsSchemes.black}}>
          {firsttext}
        </Text>
        <Text numberOfLines={null} style={{color: ColorsSchemes.grey}}>
          {'  '}
          {secondtext}
        </Text>
      </View>
    );
  };

  const GetAllData = async () => {
    await axios
      .get(`https://api.thecatapi.com/v1/breeds?page=1&limit=5`)
      .then(response => {
        setAlldata(response.data);
      })
      .catch(error => {
        console.log(error.response.data, '===err===');
      });
  };

  const RenderItem = ({item}) => {
    return (
      <View style={LoginScreeStyle.listmainView}>
        <Text style={{fontWeight: 'bold', fontSize: hp(3), marginTop: hp(2)}}>
          {item.name}
        </Text>
        <ScrollView
          style={{marginRight: wp(5), marginTop: hp(1)}}
          showsHorizontalScrollIndicator={false}
          horizontal={true}>
          <RowView firsttext={'temperament:'} secondtext={item.temperament} />
        </ScrollView>
        <RowView firsttext={'Origin:'} secondtext={item.origin} />
        <RowView firsttext={'Description:'} secondtext={item.description} />
        {item.cfa_url ? (
          <View style={LoginScreeStyle.webViewstyle}>
            <WebView source={{uri: item.cfa_url}} />
          </View>
        ) : null}
        <TouchableOpacity
          style={{
            marginHorizontal: wp(10),
            alignSelf: 'center',
            marginVertical: hp(2.5),
          }}
          onPress={() => {
            Linking.openURL(item.wikipedia_url);
          }}>
          <Text style={{color: 'blue'}}>{item.wikipedia_url}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={LoginScreeStyle.mainscreenAlign}>
      <FlatList
        contentContainerStyle={{paddingBottom:hp(20)}}
        showsVerticalScrollIndicator={false}
        pagingEnabled={true}
        data={alldata}
        renderItem={RenderItem}
      />
    </View>
  );
};

export default HomeScreen;
