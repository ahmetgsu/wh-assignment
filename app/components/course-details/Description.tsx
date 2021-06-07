import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../styles/common-styles';
import HTML from 'react-native-render-html';
import {width} from '../../helpers/device';

interface Props {
  showSection: boolean;
  toggleSection: () => void;
  desc: string;
}

const Description: FC<Props> = ({showSection, toggleSection, desc}) => {
  const customStyle = {
    p: {
      fontSize: 14,
      lineHeight: 23,
      color: colors.text,
      marginTop: 16,
      marginBottom: 16,
    },
  };
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
        <HTML
          source={{html: desc}}
          contentWidth={width}
          tagsStyles={customStyle}
        />
      )}
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 95,
  },
  title: {
    color: colors.text,
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
