import {filterCourses} from '../app/helpers/filter-courses';
import {mockCategory, mockCourse} from '../app/mock/mock-data';

describe('filterCourses', () => {
  it('should return all result when no filter selected', () => {
    expect(filterCourses([mockCourse], mockCategory)).toEqual([mockCourse]);
  });
  it('should not return null', () => {
    expect(filterCourses([mockCourse], mockCategory)).not.toBeNull();
  });
});
