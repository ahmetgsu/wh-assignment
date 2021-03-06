import {Category, CourseListProps} from '../types/courses';

export const mockCourse = {
  courseDescription: 'string',
  courseDuration: 4352,
  courseId: 283,
  courseImage: 'string',
  courseImageAlt: 'string',
  courseItems: 4,
  courseMainCategory: {
    categoryColor: 'string',
    categoryIcon: 'string',
    categoryIconAlt: 'string',
    categoryId: 1,
    categoryName: 'string',
    categorySlug: 'string',
  },
  courseNew: true,
  courseSlug: 'string',
  courseTitle: 'string',
  courseTrainerList: [
    {
      trainerAvatar: 'JohnDoe',
      trainerAvatarAlt: 'string',
      trainerFirstName: 'John',
      trainerId: 1,
      trainerLastName: 'Doe',
      trainerSlug: 'string',
    },
  ],
  progress: null,
  source: null,
} as CourseListProps;

export const mockCourseWithoutTrainerList = {
  courseDescription: 'string',
  courseDuration: 4352,
  courseId: 283,
  courseImage: 'string',
  courseImageAlt: 'string',
  courseItems: 4,
  courseMainCategory: {
    categoryColor: 'string',
    categoryIcon: 'string',
    categoryIconAlt: 'string',
    categoryId: 1,
    categoryName: 'string',
    categorySlug: 'string',
  },
  courseNew: true,
  courseSlug: 'string',
  courseTitle: 'string',
  progress: null,
  source: null,
} as CourseListProps;

export const mockCategory = {
  categoryColor: 'string',
  categoryIcon: 'string',
  categoryIconAlt: 'string',
  categoryId: 1,
  categoryName: 'string',
  categorySlug: 'string',
} as Category;
