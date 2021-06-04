import {Dimensions, Platform} from 'react-native';

//Platform
export const ios = Platform.OS === 'ios';
export const android = Platform.OS === 'android';

//Dimensions
export const height = Dimensions.get('window').height;
export const width = Dimensions.get('window').width;