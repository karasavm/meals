import MealItemList from "../components/MealItemList";
import React from "react";
import { Meal } from "../types";
import { Box, Input } from "@chakra-ui/react";
import { getMeals } from "../services/meals";

export default function MealsPage() {
  const [meals, setMeals] = React.useState<Meal[]>([]);

  React.useEffect(() => {
    getMeals().then(({ meals }) => {
      setMeals(meals.slice(0, 3));
    });
  }, []);

  return (
    <Box w="70%" display="flex" flexDirection="column">
      <Box p="2">
        <Input type="text" placeholder="Search..." />
      </Box>
      <MealItemList meals={meals} />
    </Box>
  );
}
