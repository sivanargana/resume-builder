interface Base {
  educationTypeId: string;
  university: string;
  course: string;
  specialization: string;
  startYear: string;
  endYear: string;
  gradeSystem: string;
  marks: string;
}

export type CreateRequest = {
  data: Base;
};

export type UpdateRequest = {
  id: string;
  data: Base;
};

export type DeleteRequest = {
  id: string;
};

export type Response = Base & {
  id: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateResponse = Response;
export type UpdateResponse = Response;
export type DeleteResponse = Response;
