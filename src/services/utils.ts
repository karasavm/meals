import { Meal } from "../types";
import { IngidientsApi, MealApi } from "./types";

function parseIngridients(ingridients: IngidientsApi): Meal["ingridients"] {
  return (Object.keys(ingridients) as (keyof IngidientsApi)[]).map(
    (key) => ingridients[key] as string
  );
}

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
    ingridients: parseIngridients(ingindients),
  };
}

export { parseMeal };
