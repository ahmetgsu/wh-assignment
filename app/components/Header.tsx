import React, { FC } from 'react';
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import {Appbar} from 'react-native-paper';
import { colors } from '../styles/common-styles';
import { useNavigation } from '@react-navigation/native';

const ios = Platform.OS === 'ios';

interface Props {
  color?: string;
  title?: string;
  showBack?: boolean;
}

const Header: FC<Props> = ({color, title, showBack}) => {
  const navigation = useNavigation()
  const goBack = () => {
    navigation.goBack();
  };

  const backIcon = require('../assets/icons/left-chevron.png');

  return (
    <>
      <StatusBar
        translucent={ios ? false : true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <Appbar.Header style={[styles.header]}>
        <View style={{flex:1, flexDirection: 'row'}}>
          {showBack ? <TouchableOpacity onPress={goBack} style={styles.backContainer}>
            <Image
              source={backIcon}
              style={[styles.backIcon, {tintColor: color}]}
            />
          </TouchableOpacity> : <View style={styles.backContainer}></View>}
          {title ? (
            <View style={styles.title}>
              <Text style={{color: color, fontSize: 20}}>
                {title}
              </Text>
            </View>
          ) : (
            <View style={styles.title}></View>
          )}  
            <View style={styles.action}></View>
        </View>
      </Appbar.Header>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    elevation: 3,
    marginTop: StatusBar.currentHeight,
    backgroundColor: colors.white
  },
  backIcon: {
    width: 36,
    height: 36,
  },
  backContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  action: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
