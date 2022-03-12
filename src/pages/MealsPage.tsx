import MealItemList from "../components/MealItemList";
import React from "react";
import { Meal } from "../types";

export default function MealsPage() {
  const [meals] = React.useState<Meal[]>([
    {
      id: 1,
      title: "Meal 1",
      thumb:
        "https://www.themealdb.com/images/media/meals/yvpuuy1511797244.jpg",
      ingridients: ["potato", "2 eggs", "tomato"],
    },
  ]);

  return (
    <div>
      <input type="text" />
      <MealItemList meals={meals} />
    </div>
  );
}
