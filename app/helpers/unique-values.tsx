import {Category, CourseListProps} from '../types/courses';

export const getUniqueValues = (arr: CourseListProps[]) => {
  let newArr: Array<Category> = [];
  arr.map((item: CourseListProps) => {
    const isExist = checkExisting(item, newArr);
    !isExist && newArr.push(item.courseMainCategory);
  });
  return newArr;
};

const checkExisting = (item: CourseListProps, arr: Array<Category>) => {
  return arr.find(a => a.categoryId === item.courseMainCategory.categoryId);
};

export {checkExisting};
