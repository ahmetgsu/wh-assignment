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
          <View style={styles.textContainer}>
            <Text style={styles.text}>{benefit}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default CourseContent;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingHorizontal: 24,
    marginBottom: 40,
  },
  title: {
    color: colors.text,
    fontSize: 16,
    paddingBottom: 24,
    fontWeight: '400',
  },
  itemContainer: {
    flex: 1,
    marginBottom: 24,
    flexDirection: 'row',
  },
  image: {
    width: 15,
    height: 15,
    marginRight: 24,
  },
  imageContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 4,
    paddingRight: 15,
  },
  text: {
    fontSize: 14,
    // textAlign: 'left',
    lineHeight: 21,
  },
});
