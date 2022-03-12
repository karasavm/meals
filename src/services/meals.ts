import axios from "axios";
import { MealApi } from "./types";
import { parseMeal } from "./utils";

type GetMealsParams = {
  query?: string;
  limit?: number;
  page?: number;
};

function getMeals({ query = "", limit = 3, page = 0 }: GetMealsParams = {}) {
  return (
    axios
      .get<{ meals: MealApi[] }>(
        `https://www.themealdb.com/api/json/v1/1/search.php?limit=20&s=${query}`
      )
      // Return empty array when meals is null
      .then((data) =>
        data.data.meals === null
          ? {
              ...data,
              data: {
                ...data.data,
                meals: [],
              },
            }
          : data
      )
      .then(({ data: { meals } }) => ({
        meals: meals
          // VIRTUAL implementation of pagination, for demonstration purposes only
          // because MEALdb does not support
          .slice(page * limit, Math.min(page * limit + limit, meals.length))
          .map(parseMeal),
        page,
        limit,
        hasMore: page * limit + limit < meals.length,
        size: Math.ceil(meals.length / limit),
      }))
  );
}

export { getMeals };
