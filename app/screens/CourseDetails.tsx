import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import { colors } from '../styles/common-styles'

const CourseDetails: FC = () => {
  return (
    <View style={styles.container}>
      <Header title='Course Detail' showBack />
      <View style={styles.content}>
        <Text>Course Details</Text>
      </View>
    </View>
  )
}

export default CourseDetails

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
