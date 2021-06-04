import React, { FC, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import { colors } from '../styles/common-styles'
import * as courses from '../data/courses.json'
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from '../navigation/AppStackParamList';
import CourseList from '../components/courses/CourseList'

type coursesScreenProps = StackNavigationProp<AppStackParamList, 'Courses'>;

const Courses: FC = () => {
  const navigation = useNavigation<coursesScreenProps>();
              
  console.log("courses", courses)
  console.log("courses.courseCards", courses.courseCards)

  return (
    <View style={styles.container}>
      <Header title='All Courses' />
      <View style={styles.content}>
        <CourseList data={courses.courseCards} />
      </View>
    </View>
  )
}

export default Courses

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,

  },
  content: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
