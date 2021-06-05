export interface Category {
  categoryColor: string;
  categoryIcon: string;
  categoryIconAlt: string;
  categoryId: number;
  categoryName: string;
  categorySlug: string;
}

export interface Item {
  courseImage: string;
  courseTitle: string;
  courseTrainerList?: TrainerList[];
}

export interface TrainerList {
  trainerAvatar: string;
  trainerAvatarAlt: string;
  trainerFirstName: string;
  trainerLastName: string;
  trainerId: number;
  trainerSlug: string;
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
  courseTrainerList: TrainerList;
  progress: null;
  source: null;
}
