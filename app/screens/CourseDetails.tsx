import React, {FC, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  LayoutAnimation,
} from 'react-native';
import Header from '../components/Header';
import {colors} from '../styles/common-styles';
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

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const CourseDetails: FC = () => {
  const [showSection, setShowSection] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const player = useRef(null);

  console.log('course-detail', course.courseDetail);

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

  const onBuffer = () => {};
  const videoError = () => {};
  const onVideoLoad = () => {
    setIsVisible(true);
  };

  const toggleSection = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setShowSection(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <Header title="Course Detail" showBack color={colors.main} />
      <ScrollView style={styles.content} contentContainerStyle={styles.bottom}>
        <ShimmerPlaceholder visible={isVisible} style={styles.backgroundVideo}>
          <Video
            source={{uri: courseTrailerSrc, type: 'm3u8'}}
            ref={player}
            onBuffer={onBuffer}
            controls={true}
            onError={videoError}
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
          <Text style={styles.title}>{courseTitle}</Text>
          <CourseContent benefitsList={courseBenefitsList} />
          <Description
            showSection={showSection}
            toggleSection={toggleSection}
            desc={courseDescription}
          />
          <Trainers trainerList={courseTrainerList} />
          <VideoList
            courseVideoCount={courseVideoCount}
            courseVideoList={courseVideoList}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CourseDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
  },
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
    marginTop: width * videoPlayerRatio + 10,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
  },
});
