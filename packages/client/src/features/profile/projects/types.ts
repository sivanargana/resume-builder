interface Base {
  title: string;
  client: string;
  status: string;
  startYear: string;
  endYear: string;
  details: string;
  location: string;
  site: string;
  employmentTypeId: string;
  teamSize: string;
  role: string;
  roleDescription: string;
  skillsUsed: string;
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
