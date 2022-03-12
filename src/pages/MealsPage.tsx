import React from "react";
import MealItemList from "../components/MealItemList";
import { Box, Input, Button } from "@chakra-ui/react";
import { getMeals } from "../services/meals";
import { useQuery } from "react-query";
import { usePagination } from "./hooks";

export default function MealsPage() {
  const [query, setQuery] = React.useState("");
  const { page, nextPage, prevPage } = usePagination();

  const {
    data: { meals, hasMore } = { meals: [], hasMore: false },
    isFetching,
  } = useQuery(["meals", query, page], () => getMeals({ query, page }), {
    keepPreviousData: true,
  });

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
      <Box display="flex" justifyContent="space-between" p="2">
        <Button
          colorScheme="cyan"
          disabled={page === 0 || isFetching}
          onClick={prevPage}
        >
          Prev
        </Button>
        <Button
          disabled={!hasMore || isFetching}
          onClick={nextPage}
          colorScheme="cyan"
        >
          Next
        </Button>
      </Box>
      <MealItemList meals={meals} />
    </Box>
  );
}
