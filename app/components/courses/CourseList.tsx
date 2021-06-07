import React, {FC, ReactElement, useEffect, useState} from 'react';
import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CourseListProps, Item} from '../../types/courses';
import CourseCard from './CourseCard';
import {width} from '../../helpers/device';
import {colors} from '../../styles/common-styles';
import {Divider} from 'react-native-paper';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  data: object[];
}

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

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

  const renderCard = ({item}: {item: CourseListProps}): ReactElement => {
    return (
      <CourseCard isVisible={isVisible} onPressItem={onPressItem} item={item} />
    );
  };

  const renderHeader = () => {
    return (
      <View style={{marginBottom: 15}}>
        <ShimmerPlaceholder visible={isVisible} style={styles.background}>
          <ImageBackground
            source={{
              uri: 'https://cdn.wehorse.com/static/startpage/herosection/hero.jpg?width=750&height=420',
            }}
            style={styles.background}>
            <View style={styles.headerContainer}>
              <Text style={styles.header}>
                Level Up Your Training With The Best Trainers
              </Text>
            </View>
          </ImageBackground>
        </ShimmerPlaceholder>
        <View style={styles.subHeaderContainer}>
          <ShimmerPlaceholder
            visible={isVisible}
            style={styles.subHeaderTextShimmer}>
            <Text style={styles.subHeaderText}>
              What do you want to learn today?
            </Text>
          </ShimmerPlaceholder>
        </View>
        <Divider />
      </View>
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
        ListHeaderComponent={renderHeader}
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
    // paddingTop: 15,
  },
  background: {
    width: width,
    height: 210,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: colors.white,
    fontSize: 24,
    lineHeight: 34,
    fontWeight: '700',
  },
  headerContainer: {
    flexDirection: 'row',
    width: width * 0.6,
    justifyContent: 'flex-start',
    marginLeft: 30,
  },
  subHeaderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  subHeaderText: {
    fontSize: 18,
    color: colors.text,
  },
  subHeaderTextShimmer: {
    height: 24,
    width: width * 0.7,
    borderRadius: 12,
  },
});
