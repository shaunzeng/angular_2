export interface ICourse {
  courseName: string;
  courseId: string;
  courseCompletion: number;
  courseCompleted: boolean;
  courseUrl: string;
  courseDescription: string;
}

export interface IQuiz {
  title: string;
  course: string;
  grade?: number;
  level?: string;
  isTaken: boolean;
}

export interface IScholarship {
  title: string;
  amount: number;
  status: string;
  approved: boolean;
  source: string;
}
