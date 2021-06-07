import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../styles/common-styles';

interface TrainerObject {
  trainerAvatar: string;
  trainerAvatarAlt: string;
  trainerFirstName: string;
  trainerId: number;
  trainerLastName: string;
  trainerSlug: string;
}

interface Props {
  trainerList: Array<TrainerObject>;
}

interface TrainerTypes {
  trainerAvatar: string;
  trainerAvatarAlt: string;
}

const Trainers: FC<Props> = ({trainerList}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trainers</Text>
      {trainerList.map((trainer: TrainerTypes, i) => (
        <View key={i} style={styles.trainers}>
          <View style={styles.trainerContainer}>
            <Image source={{uri: trainer.trainerAvatar}} style={styles.image} />
            <Text style={styles.name}>{trainer.trainerAvatarAlt}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const areEqual = (prevProps: Props, nextProps: Props) => {
  return (
    JSON.stringify(nextProps.trainerList) ===
    JSON.stringify(prevProps.trainerList)
  );
};

export default React.memo(Trainers, areEqual);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  title: {
    color: colors.black1,
    fontSize: 16,
  },
  trainers: {
    flexDirection: 'row',
    marginTop: 20,
  },
  trainerContainer: {
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    color: colors.black1,
    fontSize: 12,
    marginTop: 5,
  },
});
