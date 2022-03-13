import { mockIngredients } from "./mockData";
import { MealApi } from "./types";
import { parseMeal } from "./utils";

const meal: MealApi = {
  idMeal: "meal-1",
  strMeal: "/src/1",
  strMealThumb: "/src/1",
  ...mockIngredients,
};

describe("on services utils module", () => {
  describe("parseMeal", () => {
    it("should return correct info properties when no ingredients", () => {
      expect(parseMeal(meal)).toMatchInlineSnapshot(`
      Object {
        "id": "meal-1",
        "ingredients": Array [],
        "thumb": "/src/1",
        "title": "/src/1",
      }
    `);
    });

    it("should return correct meal when ingredients exist", () => {
      expect(
        parseMeal({
          ...meal,
          strIngredient1: "ing1",
          strIngredient11: "ing11",
          strIngredient2: "ing2",
        })
      ).toMatchInlineSnapshot(`
Object {
  "id": "meal-1",
  "ingredients": Array [
    "ing1",
    "ing2",
    "ing11",
  ],
  "thumb": "/src/1",
  "title": "/src/1",
}
`);
    });
  });

  it("should skip all other properties", () => {
    expect(parseMeal({ ...meal, randomProps: "randomValue", ingredient: "no" }))
      .toMatchInlineSnapshot(`
Object {
  "id": "meal-1",
  "ingredients": Array [],
  "thumb": "/src/1",
  "title": "/src/1",
}
`);
  });
});
