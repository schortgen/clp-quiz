
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Quiz {
  id: string;
  name: string;
  questions: Question[];
}

export interface MissedQuestionInfo {
  question: string;
  correctAnswer: string;
  explanation: string;
}
