import {timeConverter} from '../app/helpers/video-list';

test('properly gives converted time', () => {
  expect(timeConverter(752)).toBe('12:32 min.');
});
