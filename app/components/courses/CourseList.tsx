import React, {FC, ReactElement, useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Item} from '../../types/courses';
import CourseCard from './CourseCard';

interface Props {
  data: object[];
}

const CourseList: FC<Props> = props => {
  const {data} = props;
  const navigation = useNavigation();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 1500);
  }, []);

  const onPressItem = () => {
    navigation.navigate('CourseDetails');
  };

  const renderCard = ({item}: {item: Item}): ReactElement => {
    return (
      <CourseCard isVisible={isVisible} onPressItem={onPressItem} item={item} />
    );
  };

  return (
    <View style={styles.listContainer}>
      <FlatList<any>
        data={data}
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderCard}
      />
    </View>
  );
};

export default CourseList;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 35,
  },
  flatList: {
    paddingTop: 15,
  },
});
