import {getUniqueValues, checkExisting} from '../app/helpers/unique-values';
import {mockCourse} from '../app/mock/mock-data';

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
