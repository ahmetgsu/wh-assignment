import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Courses from '../screens/Courses';
import CourseDetails from '../screens/CourseDetails';
import {AppStackParamList} from '../navigation/AppStackParamList';

const Stack = createStackNavigator<AppStackParamList>();

export const AppStack: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Courses" component={Courses} />
        <Stack.Screen name="CourseDetails" component={CourseDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
