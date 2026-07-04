interface Base {
  employmentTypeId: string;
  isCurrentEmployment: boolean;
  companyName: string;
  jobTitle: string;
  joiningDate: string;
  workedTill: string;
  jobProfile: string;
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
