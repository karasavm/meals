import MealItemList from "../components/MealItemList";
import React from "react";
import { Meal } from "../types";
import { Box, Input } from "@chakra-ui/react";

export default function MealsPage() {
  const [meals] = React.useState<Meal[]>([
    {
      id: "1",
      title: "Meal 1",
      thumb:
        "https://www.themealdb.com/images/media/meals/yvpuuy1511797244.jpg",
      ingridients: [
        "potato",
        "2 eggs",
        "tomato",
        "tomato",
        "tomato",
        "tomato",
        "tomato",
      ],
    },
    {
      id: "2",
      title: "Meal 1",
      thumb:
        "https://www.themealdb.com/images/media/meals/yvpuuy1511797244.jpg",
      ingridients: ["potato", "2 eggs", "tomato"],
    },
    {
      id: "3",
      title: "Meal 1",
      thumb:
        "https://www.themealdb.com/images/media/meals/yvpuuy1511797244.jpg",
      ingridients: ["potato", "2 eggs", "tomato"],
    },
  ]);

  return (
    <Box w="70%" display="flex" flexDirection="column">
      <Box p="2">
        <Input type="text" placeholder="Search..." />
      </Box>
      <MealItemList meals={meals} />
    </Box>
  );
}
