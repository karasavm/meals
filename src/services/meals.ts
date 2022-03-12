import axios from "axios";
import { MealApi, IngidientsApi } from "./types";
import { Meal } from "../types";

type GetMealsParams = {
  query?: string;
};

function parseMeal({
  idMeal,
  strMealThumb,
  strMeal,
  ...ingindients
}: MealApi): Meal {
  return {
    id: idMeal,
    thumb: strMealThumb,
    title: strMeal,
    ingridients: (Object.keys(ingindients) as (keyof IngidientsApi)[]).map(
      (key) => ingindients[key] as string
    ),
  };
}

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
