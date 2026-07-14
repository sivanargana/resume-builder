import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

const mockInput = {
  basicDetails: {
    location: "Hyderabad",
    country: "India",
    experienceYear: {
      name: "5 Years",
    },
    experienceMonth: {
      name: "6 Months",
    },
    salaryAmount: "10 LPA",
    salaryBreakdown: {
      name: "Per Annum",
    },
    availabilityType: {
      name: "Immediate",
    },
    workStatus: {
      name: "Full Time",
    },
  },
};

const renderCard: any = (input = mockInput) => render(<_Card input={input} />);

const expectedValues = [mockInput.basicDetails.location, mockInput.basicDetails.country, mockInput.basicDetails.experienceYear.name, mockInput.basicDetails.experienceMonth.name, mockInput.basicDetails.salaryAmount, mockInput.basicDetails.salaryBreakdown.name, mockInput.basicDetails.availabilityType.name, mockInput.basicDetails.workStatus.name];

describe("_Card", () => {
  it("renders title", () => {
    renderCard();
    expect(screen.getByText(/Basic Info/i)).toBeInTheDocument();
  });

  it("renders all basic information", () => {
    renderCard();

    expectedValues.forEach((value) => {
      expect(screen.getByText(new RegExp(value, "i"))).toBeInTheDocument();
    });
  });

  it("renders empty state without crashing", () => {
    renderCard({});

    expectedValues.forEach((value) => {
      expect(screen.queryByText(new RegExp(value, "i"))).not.toBeInTheDocument();
    });
  });

  it("shows Edit button when data exists", () => {
    renderCard();

    expect(screen.getByTestId("button-edit")).toBeInTheDocument();
    expect(screen.queryByTestId("button-add")).not.toBeInTheDocument();
  });

  it("shows Add button when data is missing", () => {
    renderCard({});

    expect(screen.getByTestId("button-add")).toBeInTheDocument();
    expect(screen.queryByTestId("button-edit")).not.toBeInTheDocument();
  });

  it("render all form elements after click on edit button", async () => {
    user.setup();
    renderCard(mockInput);
    let editbutton: any = screen.queryByTestId("button-edit");
    await user.click(editbutton);
    expect(screen.getByTestId("button-edit")).toBeInTheDocument();
  });
});
