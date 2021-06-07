import {getUserName, getUserAvatar} from '../app/helpers/user-info';
import {mockCourse, mockCourseWithoutTrainerList} from '../app/mock/mock-data';

describe('getUserName', () => {
  it('should return undefined when no trainerlist array exist', () => {
    expect(getUserName(mockCourseWithoutTrainerList)).toBeUndefined();
  });
  it("should properly return trainer's name", () => {
    expect(getUserName(mockCourse)).toBe('John Doe');
  });
});

describe('getUserAvatar', () => {
  it('should return undefined when no trainerlist array exist', () => {
    expect(getUserAvatar(mockCourseWithoutTrainerList)).toBeUndefined();
  });
  it("should properly return trainer's avatar", () => {
    expect(getUserAvatar(mockCourse)).toBe('JohnDoe');
  });
});
