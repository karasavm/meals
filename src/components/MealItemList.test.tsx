import { render } from "@testing-library/react";
import { Meal } from "../types";
import MealItemList from "./MealItemList";
import MealItem from "./MealItem";

const MealItemMock = MealItem as jest.MockedFn<typeof MealItem>;

jest.mock("./MealItem.tsx", () => jest.fn().mockReturnValue("test"));

const meals: Meal[] = [
  {
    id: "1",
    title: "meal-title-1",
    thumb: "https://via.placeholder.com/123",
    ingredients: ["ing1", "ing2"],
  },
  {
    id: "2",
    title: "meal-title-2",
    thumb: "https://via.placeholder.com/123",
    ingredients: ["ing1", "ing2"],
  },
];

describe("<MealItemList /> component", () => {
  it("should render list of <MealItem/> components", () => {
    render(<MealItemList meals={meals} />);

    expect(MealItemMock).toHaveBeenCalledTimes(meals.length);
    expect(MealItemMock.mock.calls).toMatchInlineSnapshot(`
Array [
  Array [
    Object {
      "id": "1",
      "ingredients": Array [
        "ing1",
        "ing2",
      ],
      "thumb": "https://via.placeholder.com/123",
      "title": "meal-title-1",
    },
    Object {},
  ],
  Array [
    Object {
      "id": "2",
      "ingredients": Array [
        "ing1",
        "ing2",
      ],
      "thumb": "https://via.placeholder.com/123",
      "title": "meal-title-2",
    },
    Object {},
  ],
]
`);
  });
});
