export type Category = {
  categoryColor: string;
  categoryIcon: string;
  categoryIconAlt: string;
  categoryId: number;
  categoryName: string;
  categorySlug: string;
};

export interface Item {
  courseImage: string;
  courseTitle: string;
  courseTrainerList?: TrainerList[];
}

export type TrainerList = {
  trainerAvatar: string;
  trainerAvatarAlt: string;
  trainerFirstName: string;
  trainerLastName: string;
  trainerId: number;
  trainerSlug: string;
};

export interface AuthProps {
  fullAccess: boolean;
  isChargebee: boolean;
  isFullyAuthenticated: boolean;
  runningSubscription: boolean;
  userId: number;
}

export interface CourseListProps {
  courseDescription: string;
  courseDuration: number;
  courseId: number;
  courseImage: string;
  courseImageAlt: string;
  courseItems: number;
  courseMainCategory: Category;
  courseNew: boolean;
  courseSlug: string;
  courseTitle: string;
  courseTrainerList: [TrainerList];
  progress: any;
  source: any;
}

export interface JSONProps {
  code: number;
  auth: AuthProps;
  courseCards: CourseListProps[];
  default: any;
  errors: any;
  hasError: boolean;
  message: any;
  orderData: string;
  status: string;
  trackId: string;
}
