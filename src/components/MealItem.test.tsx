import MealItem from "./MealItem";
import { screen, render, waitFor } from "@testing-library/react";
import { Meal } from "../types";

const meal: Meal = {
  id: "1",
  title: "meal-title",
  thumb: "https://via.placeholder.com/123",
  ingredients: ["ing1", "ing2"],
};

jest.mock("@chakra-ui/react", () => ({
  __esModule: true,
  ...jest.requireActual("@chakra-ui/react"),
  useBreakpointValue: jest.fn().mockReturnValue(2),
}));

describe("<MealItem/> component", () => {
  it("should render correct info", () => {
    render(<MealItem {...meal} />);

    expect(screen.getByText(meal.title)).toBeInTheDocument();
    expect(screen.getByText(meal.title)).toBeInTheDocument();
    expect(screen.getByText(meal.ingredients.join(", "))).toBeInTheDocument();

    expect(screen.getByAltText(meal.title)).toBeInTheDocument();

    expect(screen.getByAltText(meal.title).getAttribute("src")).toEqual(
      "https://via.placeholder.com/550"
    );
  });
});
