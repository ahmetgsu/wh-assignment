import {CourseListProps} from '../types/courses';

export const getUserName = (course: CourseListProps) => {
  const {courseTrainerList} = course;
  return (
    courseTrainerList &&
    `${courseTrainerList[0].trainerFirstName} ${courseTrainerList[0].trainerLastName}`
  );
};

export const getUserAvatar = (course: CourseListProps) => {
  const {courseTrainerList} = course;
  return courseTrainerList && courseTrainerList[0].trainerAvatar;
};
