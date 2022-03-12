import { Meal } from "../types";
import { IngidientsApi, MealApi } from "./types";

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

export { parseMeal };
