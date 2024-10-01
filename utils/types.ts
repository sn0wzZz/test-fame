export type Question = {
  id: string;
  questionName: string;
  typeAnswer: string;
  isRequired: boolean;
  answers: Answers;
};

export type Answer = {
  id: string;
  value: string;
  name: string;
  createdAt: string;
};

export type Member = {
  company: string; 
  firstName: string; 
  id: string;
  imgUrl: string;
  isBoard: boolean; 
  lastName: string;
  logos?: string[] | null;
  longDesc: string;
  memberCategory: string;
  role: string;
  shortDesc: string;
__typename?: string;
};

export type Answers = Array<Answer>;
export type Questions = Array<Question>;
export type Members = Array<Member>;
