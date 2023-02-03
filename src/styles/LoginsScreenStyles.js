import {StyleSheet} from 'react-native';
import {ColorsSchemes} from '../styles/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const LoginScreeStyle = StyleSheet.create({
  mainscreenAlign: {
    flex: 1,
    backgroundColor: ColorsSchemes.mainbg,
    alignItems: 'center',
  },
  textinputView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    height: hp(6),
    width: wp(90),
    marginVertical:hp(1.5),

  },
  textinputstyle: {
    width: '70%',
    paddingLeft: wp(5),
  },
  filledbuttonView:{
    backgroundColor: ColorsSchemes.buttonBackground,
    width: wp(90),
    height: hp(6),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(2.5),
  }
})
