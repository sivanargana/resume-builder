interface Base {
  skills: string[];
}

export type CreateRequest = {
  data: Base;
};

export type Response = {
  id: string;
  userId: string;
  skillId: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateResponse = Response[];
