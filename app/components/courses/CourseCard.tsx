import React, {FC, ReactElement, useMemo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import {width} from '../../helpers/device';
import {Card, Title} from 'react-native-paper';
import {CourseListProps} from '../../types/courses';
import {getUserAvatar, getUserName} from '../../helpers/user-info';
import HeartButton from '../HeartButton';
import {colors} from '../../styles/common-styles';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

interface Props {
  isVisible: boolean;
  onPressItem: () => void;
  item: CourseListProps;
}

type Combined = string | undefined;

const CourseCard: FC<Props> = ({
  isVisible,
  onPressItem,
  item,
}): ReactElement => {
  console.log('item', item);
  const avatar: Combined = getUserAvatar(item);
  const name: Combined = getUserName(item);

  return (
    <ShimmerPlaceholder
      visible={isVisible}
      style={isVisible ? styles.card : styles.shimmerCard}>
      <View style={styles.heartContainer}>
        <HeartButton />
      </View>
      {item.courseNew && (
        <View style={styles.newContainer}>
          <Text style={styles.newText}>NEW</Text>
        </View>
      )}
      <Card style={styles.card} elevation={5} onPress={onPressItem}>
        <Card.Cover source={{uri: item.courseImage}} style={styles.cardCover} />
        <Card.Content>
          <Title style={styles.title}>{item.courseTitle}</Title>
          <View style={styles.imageContainer}>
            <Image source={{uri: avatar}} style={styles.avatar} />
            <Text>{name}</Text>
          </View>
        </Card.Content>
      </Card>
    </ShimmerPlaceholder>
  );
};

export default CourseCard;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 5,
    borderRadius: 10,
    marginBottom: 15,
  },
  shimmerCard: {
    height: 200,
    width: '95%',
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 20,
  },
  cardCover: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  heartContainer: {
    position: 'absolute',
    top: 178,
    right: 24,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    zIndex: 10,
  },
  title: {
    fontSize: 18,
    marginTop: 18,
    lineHeight: 27,
    marginBottom: 15,
  },
  newContainer: {
    position: 'absolute',
    top: 11,
    left: 11,
    backgroundColor: colors.white,
    zIndex: 10,
    borderRadius: 8,
  },
  newText: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    fontSize: 10,
  },
});
