import React, {FC, useState} from 'react';
import {Image, LayoutAnimation, StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-paper';
import {timeConverter} from '../../helpers/video-list';
import {colors} from '../../styles/common-styles';
import {CardDetails, Video} from '../../types/course-details';

type Details = CardDetails | null;

interface Props {
  videoCount: number;
  videoList: Array<Video>;
}

const VideoList: FC<Props> = ({videoCount, videoList}) => {
  const [cardDetail, setCardDetail] = useState<Details>(null);

  const toggleCard = (item: any) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    if (!cardDetail) {
      setCardDetail({id: item.videoId, benefits: item.videoBenefits});
    } else {
      if (cardDetail.id === item.videoId) {
        setCardDetail(null);
      } else {
        setCardDetail({id: item.videoId, benefits: item.videoBenefits});
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {videoCount > 1 ? `${videoCount} Videos` : `${videoCount} Video`}
      </Text>
      {videoList.map((video: Video, i: number) => (
        <View key={i} style={{marginTop: 15}}>
          <Card
            style={styles.card}
            elevation={5}
            onPress={() => toggleCard(video)}>
            <Card.Content>
              <View style={styles.cardContent}>
                <View style={{flex: 1}}>
                  <Image
                    source={require('../../assets/icons/unlock.png')}
                    style={styles.unlock}
                  />
                </View>
                <View style={{flex: 6}}>
                  <Text>{video.videoTitle}</Text>
                </View>
              </View>
              <View style={styles.timeContainer}>
                <Text>{timeConverter(video.videoDuration)}</Text>
              </View>
              {cardDetail?.id === video.videoId && (
                <View style={{marginTop: 15}}>
                  <Text style={styles.cardDetailTitle}>This video shows:</Text>
                  {cardDetail?.benefits.map((benefit, i) => (
                    <View key={benefit} style={styles.itemContainer}>
                      <Image
                        source={require('../../assets/icons/checked.png')}
                        style={styles.image}
                      />
                      <Text style={styles.text}>{benefit}</Text>
                    </View>
                  ))}
                </View>
              )}
            </Card.Content>
          </Card>
        </View>
      ))}
    </View>
  );
};

export default VideoList;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    color: colors.black1,
    fontSize: 16,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  card: {
    // marginBottom: 10,
  },
  itemContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 10,
    height: 10,
  },
  text: {
    fontSize: 12,
    textAlign: 'left',
    paddingLeft: 15,
  },
  unlock: {
    width: 25,
    height: 25,
    opacity: 0.6,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 10,
  },
  cardDetailTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
