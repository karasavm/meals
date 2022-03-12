import MealItemList from "../components/MealItemList";
import { Box, Input } from "@chakra-ui/react";
import { getMeals } from "../services/meals";
import { useQuery } from "react-query";
export default function MealsPage() {
  const { data = [] } = useQuery(["meals"], () =>
    getMeals().then(({ meals }) => meals.slice(0, 3))
  );

  return (
    <Box w="70%" display="flex" flexDirection="column">
      <Box p="2">
        <Input type="text" placeholder="Search..." />
      </Box>
      <MealItemList meals={data} />
    </Box>
  );
}
