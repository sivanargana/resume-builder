interface Base {
  experienceYearId: string;
  experienceMonthId: string;
  salaryBreakdownId: string;
  availabilityTypeId: string;
  salaryAmount: string;
  country: string;
  location: string;
  workStatusId: string;
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
