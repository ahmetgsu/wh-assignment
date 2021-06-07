import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../styles/common-styles';

interface Props {
  ridingDifficulty: string[];
  videoCount: number;
}

const TopSummary: FC<Props> = ({ridingDifficulty, videoCount}) => {
  const difficultyCondition =
    ridingDifficulty?.length > 1 ? 'Multiple Levels' : ridingDifficulty[0];
  return (
    <View style={styles.container}>
      <View style={styles.firstTextContainer}>
        <Text style={styles.firstText}>{difficultyCondition}</Text>
      </View>
      <View style={styles.secondTextContainer}>
        <Text style={styles.secondText}>
          {`${videoCount} ${videoCount > 1 ? 'videos' : 'video'}`}
        </Text>
      </View>
    </View>
  );
};

const areEqual = (prevProps: Props, nextProps: Props) => {
  return (
    nextProps.videoCount === prevProps.videoCount &&
    JSON.stringify(nextProps.ridingDifficulty) ===
      JSON.stringify(prevProps.ridingDifficulty)
  );
};

export default React.memo(TopSummary, areEqual);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 15,
    marginTop: 24,
    paddingHorizontal: 24,
  },
  firstTextContainer: {
    padding: 2,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.textSecondary,
  },
  firstText: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    color: colors.textSecondary,
  },
  secondTextContainer: {
    padding: 2,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.textSecondary,
    marginLeft: 6,
  },
  secondText: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    color: colors.textSecondary,
  },
});
