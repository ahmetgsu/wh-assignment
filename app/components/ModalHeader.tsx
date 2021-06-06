import React, {FC} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {Appbar} from 'react-native-paper';
import {colors} from '../styles/common-styles';
import {ios} from '../helpers/device';

interface Props {
  action?: () => void;
}

const ModalHeader: FC<Props> = ({action}) => {
  return (
    <>
      <StatusBar
        translucent={ios ? false : true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <Appbar.Header style={[styles.header]}>
        <View style={{flex: 1, flexDirection: 'row', marginHorizontal: 10}}>
          <View style={styles.title}>
            <Text style={{fontSize: 18}}>Category Filter</Text>
          </View>
          <TouchableOpacity style={styles.action} onPress={action}>
            <Image
              source={require('../assets/icons/close.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
      </Appbar.Header>
    </>
  );
};

export default ModalHeader;

const styles = StyleSheet.create({
  header: {
    elevation: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: colors.white,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  action: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 15,
  },
  image: {width: 20, height: 20},
});
