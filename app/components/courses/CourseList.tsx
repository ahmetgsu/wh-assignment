import React, { FC } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { Card, Title} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';

interface Props {
  data: object[];
}

interface Item {
  courseImage: string;
  courseTitle: string;
  courseTrainerList?: TrainerList[];
}

interface TrainerList {
  trainerAvatar: string;
  trainerAvatarAlt: string;
  trainerFirstName: string;
  trainerLastName: string;
  trainerId: number;
  trainerSlug: string;
}

const CourseList: FC<Props> = (props) => {
  const { data } = props
  const navigation = useNavigation()

  const onPressItem = () => {
    navigation.navigate('CourseDetails')
  }

  const renderCard = ({item, index}: {
    item: Item;
    index: string;
  }
    ) => {
    const avatar: string | undefined = item.courseTrainerList && item.courseTrainerList[0].trainerAvatar
    const name: string | undefined = item.courseTrainerList && `${item.courseTrainerList[0].trainerFirstName} ${item.courseTrainerList[0].trainerLastName}`
    return(
      <Card style={styles.card} elevation={5} onPress={onPressItem}>
        <Card.Cover source={{ uri: item.courseImage }} style={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}/>
        <Card.Content>
          <Title style={{fontSize: 18}}>{item.courseTitle}</Title>
          <View style={{flexDirection: 'row', justifyContent:'flex-start', alignItems: 'center'}}>
          <Image source={{uri: avatar}} style={{width: 30, height: 30, borderRadius: 15, marginRight: 20}} />
          <Text>{name}</Text>
          </View>
        </Card.Content>
      </Card>
    )
  }

  return (
    <View style={styles.listContainer}>
      <FlatList<any>
        data={data}
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderCard}
      />
    </View>
  )
}

export default CourseList

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  contentContainer: {
    paddingBottom: 35
  },
  flatList: {
    paddingTop: 15,
  },
  card:{
    marginHorizontal: 5,
    borderRadius: 10,
    marginBottom: 15
  }
})
