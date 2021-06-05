import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {colors} from '../styles/common-styles';

interface Props {
  text: string;
  callback: () => void;
}

const CustomButton: FC<Props> = ({text, callback}) => {
  return (
    <TouchableOpacity onPress={callback} activeOpacity={0.8}>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 48,
    backgroundColor: colors.main,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    letterSpacing: 0.8,
    fontSize: 18,
  },
});
