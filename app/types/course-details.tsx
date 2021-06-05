export interface CardDetails {
  id: number;
  benefits: string[];
}

export interface Video {
  endCard: null;
  videoBenefits: string[];
  videoDescription: string;
  videoDetailPageHidden: boolean;
  videoDuration: number;
  videoId: number;
  videoLog: {
    trainerId: number;
    trainerName: string;
    videoId: number;
    videoTitle: string;
    videoType: string;
  };
  videoReleaseDate: string;
  videoSlug: null;
  videoSrc: null;
  videoTitle: string;
  videoTrainers: Array<object>;
  watchTimeInSec: number;
}
