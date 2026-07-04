interface Base {
  workStatusId: string;
  fullName: string;
  mobile: string;
  email: string;
}

export type UpdateRequest = {
  id: string;
  data: Base;
};

export type Response = Base & {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateResponse = Response;
