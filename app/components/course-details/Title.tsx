import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../styles/common-styles';
import HeartButton from '../HeartButton';

interface ITitle {
  courseTitle: string;
}

const Title: FC<ITitle> = ({courseTitle}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 6, paddingRight: 10}}>
        <Text style={styles.title}>{courseTitle}</Text>
      </View>
      <View
        style={{
          flex: 1,
          marginLeft: 10,
          alignItems: 'flex-end',
        }}>
        <HeartButton />
      </View>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 34,
    fontWeight: '400',
    color: colors.text,
  },
});
