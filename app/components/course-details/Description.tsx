import React, {FC} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {colors} from '../../styles/common-styles';
import HTML from 'react-native-render-html';

interface Props {
  showSection: boolean;
  toggleSection: () => void;
  desc: string;
}

const Description: FC<Props> = ({showSection, toggleSection, desc}) => {
  const contentWidth = useWindowDimensions().width;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleSection}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Course Description</Text>
          {showSection ? (
            <Image
              source={require('../../assets/icons/up-arrow.png')}
              style={styles.imageDown}
            />
          ) : (
            <Image
              source={require('../../assets/icons/up-arrow.png')}
              style={styles.imageUp}
            />
          )}
        </View>
      </TouchableOpacity>
      {!showSection && (
        <HTML source={{html: desc}} contentWidth={contentWidth} />
      )}
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: colors.black1,
    fontSize: 16,
  },
  imageDown: {
    width: 15,
    height: 15,
    transform: [{rotate: '180deg'}],
  },
  imageUp: {
    width: 15,
    height: 15,
  },
});
