import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../styles/common-styles';

interface Props {
  ridingDifficulty: string[];
  videoCount: number;
}

const TopSummary: FC<Props> = ({ridingDifficulty, videoCount}) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstTextContainer}>
        <Text style={styles.firstText}>
          {ridingDifficulty?.length > 1
            ? 'Multiple Levels'
            : ridingDifficulty[0]}
        </Text>
      </View>
      <View style={styles.secondTextContainer}>
        <Text style={styles.secondText}>
          {videoCount > 1 ? `${videoCount} videos` : `${videoCount} video`}
        </Text>
      </View>
    </View>
  );
};

export default TopSummary;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 15,
    marginTop: 10,
  },
  firstTextContainer: {
    padding: 2,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.gray4,
    marginRight: 15,
  },
  firstText: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    color: colors.gray4,
  },
  secondTextContainer: {
    padding: 2,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.gray4,
  },
  secondText: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    color: colors.gray4,
  },
});
