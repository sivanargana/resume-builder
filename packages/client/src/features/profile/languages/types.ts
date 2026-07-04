interface Base {
  languageId: string;
  proficiencyId: string;
  read: boolean;
  write: boolean;
  speak: boolean;
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
