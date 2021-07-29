import {StyleSheet} from 'react-native';
import {SIZES, COLORS, FONTS} from '../../constants';

export const styles = props =>
  StyleSheet.create({
    container: {
      padding: SIZES.padding,
      paddingBottom: SIZES.padding * 2,
      backgroundColor:
        props.id === props.categorySelected ? COLORS.primary : 'white',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: SIZES.padding,
      borderRadius: SIZES.radius,
    },
    iconContainer: {
      width: 50,
      height: 50,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:
        props.id === props.categorySelected ? COLORS.white : COLORS.lightGray,
    },
    text: {
      marginTop: SIZES.padding,
      color: props.id === props.categorySelected ? COLORS.white : COLORS.black,
      ...FONTS.body5,
    },
  });
