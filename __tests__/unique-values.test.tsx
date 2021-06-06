import {getUniqueValues, checkExisting} from '../app/helpers/unique-values';
import {CourseListProps} from '../app/types/courses';

describe('checkExisting', () => {
  it('should return undefined', () => {
    expect(checkExisting(mockCourse, [])).toBe(undefined);
  });
  it('should return related object', () => {
    expect(checkExisting(mockCourse, [mockCourse.courseMainCategory])).toBe(
      mockCourse.courseMainCategory,
    );
  });
});

describe('getUniqueValues', () => {
  it('should return an array with single category object', () => {
    expect(getUniqueValues([mockCourse])).toEqual([
      mockCourse.courseMainCategory,
    ]);
  });
});

const mockCourse = {
  courseDescription: '123',
  courseDuration: 4352,
  courseId: 283,
  courseImage: '123',
  courseImageAlt: '123',
  courseItems: 4,
  courseMainCategory: {
    categoryColor: '123',
    categoryIcon: '123',
    categoryIconAlt: '123',
    categoryId: 1,
    categoryName: '123',
    categorySlug: '123',
  },
  courseNew: true,
  courseSlug: '123',
  courseTitle: '123',
  courseTrainerList: [
    {
      trainerAvatar: '123',
      trainerAvatarAlt: '123',
      trainerFirstName: '123',
      trainerId: 1,
      trainerLastName: '123',
      trainerSlug: '123',
    },
  ],
  progress: null,
  source: null,
} as CourseListProps;
