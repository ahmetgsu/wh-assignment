import React, {FC, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  LayoutAnimation,
} from 'react-native';
import Header from '../components/Header';
import {colors, commonStyles} from '../styles/common-styles';
import Video from 'react-native-video';
import * as course from '../data/course.json';
import {width, videoPlayerRatio} from '../helpers/device';
import TopSummary from '../components/course-details/TopSummary';
import CourseContent from '../components/course-details/CourseContent';
import Description from '../components/course-details/Description';
import Trainers from '../components/course-details/Trainers';
import VideoList from '../components/course-details/VideoList';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import Title from '../components/course-details/Title';
import {Divider} from 'react-native-paper';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const CourseDetails: FC = () => {
  const [showSection, setShowSection] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const player = useRef(null);

  const {
    courseTrailerSrc,
    courseRidingDifficulty,
    courseVideoCount,
    courseTitle,
    courseBenefitsList,
    courseDescription,
    courseTrainerList,
    courseVideoList,
  } = course.courseDetail;

  const onVideoLoad = () => setIsVisible(true);

  const toggleSection = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setShowSection(prev => !prev);
  };

  return (
    <View style={commonStyles.container}>
      <Header title="Course Detail" showBack color={colors.main} />
      <ScrollView
        style={commonStyles.content}
        contentContainerStyle={styles.bottom}
        showsVerticalScrollIndicator={false}>
        <ShimmerPlaceholder visible={isVisible} style={styles.backgroundVideo}>
          <Video
            source={{uri: courseTrailerSrc}}
            ref={player}
            controls={true}
            onLoad={() => onVideoLoad()}
            paused={true}
            posterResizeMode="cover"
            style={styles.backgroundVideo}
          />
        </ShimmerPlaceholder>
        <View style={styles.details}>
          <TopSummary
            ridingDifficulty={courseRidingDifficulty}
            videoCount={courseVideoCount}
          />
          <Title courseTitle={courseTitle} />
          <CourseContent benefitsList={courseBenefitsList} />
          <Divider />
          <Description
            showSection={showSection}
            toggleSection={toggleSection}
            desc={courseDescription}
          />
          <Divider />
          <Trainers trainerList={courseTrainerList} />
          <Divider style={{height: 25, opacity: 0.4, marginTop: 24}} />
          <VideoList
            videoCount={courseVideoCount}
            videoList={courseVideoList}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CourseDetails;

const styles = StyleSheet.create({
  bottom: {
    paddingBottom: 35,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: width,
    height: width * videoPlayerRatio,
  },
  details: {
    marginTop: width * videoPlayerRatio,
    paddingHorizontal: 0,
  },
});
