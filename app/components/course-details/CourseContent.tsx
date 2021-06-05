import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../styles/common-styles';

interface Props {
  benefitsList: string[];
}

const CourseContent: FC<Props> = ({benefitsList}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Course Content</Text>
      {benefitsList?.map((benefit, i) => (
        <View key={benefit} style={styles.itemContainer}>
          <Image
            source={require('../../assets/icons/checked.png')}
            style={styles.image}
          />
          <Text style={styles.text}>{benefit}</Text>
        </View>
      ))}
    </View>
  );
};

export default CourseContent;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginRight: 15,
  },
  title: {
    color: colors.black1,
    fontSize: 16,
    paddingBottom: 15,
  },
  itemContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 15,
    height: 15,
  },
  text: {
    fontSize: 14,
    textAlign: 'left',
    paddingLeft: 15,
  },
});
