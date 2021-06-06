import {timeConverter} from '../app/helpers/video-list';

// test('properly gives converted time', () => {
//   expect(timeConverter(752)).toBe('12:32 min.');
//   expect(timeConverter(600)).toEqual('10:00 min.');
// });
// test('should not be null', () => {
//   expect(timeConverter(752)).not.toBeNull();
// });
// test('should be defined', () => {
//   expect(timeConverter(752)).toBeDefined();
// });

describe('timeConverter', () => {
  it('should properly gives converted time', () => {
    expect(timeConverter(752)).toBe('12:32 min.');
    expect(timeConverter(600)).toEqual('10:00 min.');
  });
  it('should not be null', () => {
    expect(timeConverter(752)).not.toBeNull();
  });
  it('should be defined', () => {
    expect(timeConverter(752)).toBeDefined();
  });
});
