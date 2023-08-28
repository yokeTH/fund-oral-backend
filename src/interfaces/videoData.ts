export interface VideoData {
  [studentId: string]: {
    name: string;
    lastname: string;
    studentID: string;
    sections: {
      [sec: string]: { video: string; percentage: string }[];
    };
  };
}
