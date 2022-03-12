import axios from "axios";
import { MealApi } from "./types";
import { parseMeal } from "./utils";

type GetMealsParams = {
  query?: string;
};

function getMeals({ query = "" }: GetMealsParams = {}) {
  return axios
    .get<{ meals: MealApi }>(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    )
    .then(({ data: { meals } }) => ({
      meals: parseMeal(meals),
    }));
}

export { getMeals };
