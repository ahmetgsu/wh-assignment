import React, {FC, ReactElement, useMemo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import {width} from '../../helpers/device';
import {Card, Title} from 'react-native-paper';
import {CourseListProps} from '../../types/courses';
import {getUserAvatar, getUserName} from '../../helpers/user-info';

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
  const avatar: Combined = getUserAvatar(item);
  const name: Combined = getUserName(item);
  console.log('name', name);

  return (
    <ShimmerPlaceholder
      visible={isVisible}
      style={isVisible ? styles.card : styles.shimmerCard}>
      <Card style={styles.card} elevation={5} onPress={onPressItem}>
        <Card.Cover source={{uri: item.courseImage}} style={styles.cardCover} />
        <Card.Content>
          <Title style={{fontSize: 18}}>{item.courseTitle}</Title>
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
    marginBottom: 10,
  },
  shimmerCard: {
    height: 200,
    width: '95%',
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
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
});
