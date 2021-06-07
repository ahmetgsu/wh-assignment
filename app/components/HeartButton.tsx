import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../styles/common-styles';

const HeartButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleState = () => setIsLiked(prev => !prev);
  return (
    <TouchableOpacity
      style={styles.touchable}
      onPress={toggleState}
      activeOpacity={0.8}>
      <View style={styles.container}>
        {isLiked ? (
          <Image
            source={require('../assets/icons/heart-filled.png')}
            style={{width: 24, height: 24}}
          />
        ) : (
          <Image
            source={require('../assets/icons/heart.png')}
            style={{width: 24, height: 24}}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default HeartButton;

const styles = StyleSheet.create({
  container: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray3,
  },
  touchable: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
