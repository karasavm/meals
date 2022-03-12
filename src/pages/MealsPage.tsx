import React from "react";
import MealItemList from "../components/MealItemList";
import { Box, Input } from "@chakra-ui/react";
import { getMeals } from "../services/meals";
import { useQuery } from "react-query";

export default function MealsPage() {
  const [query, setQuery] = React.useState("");

  const { data = [] } = useQuery(["meals", query], () =>
    getMeals({ query }).then(({ meals }) => meals.slice(0, 3))
  );

  return (
    <Box w="70%" display="flex" flexDirection="column" flex={1}>
      <Box p="2">
        <Input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Box>
      <MealItemList meals={data} />
    </Box>
  );
}
