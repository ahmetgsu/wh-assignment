import {CourseListProps, Category} from '../types/courses';

type Selected = Category | null;

export const filterCourses = (data: CourseListProps[], selected: Selected) => {
  return data.filter(
    item => item.courseMainCategory.categoryId === selected?.categoryId,
  );
};
