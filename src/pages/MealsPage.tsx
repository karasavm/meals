import React from "react";
import MealItemList from "../components/MealItemList";
import {
  Box,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { getMeals } from "../services/meals";
import { useQuery } from "react-query";
import { usePagination } from "./hooks";
import { useStateDebounced } from "../utils/hooks";
import Error from "../components/Error";

export default function MealsPage() {
  const [query, queryDebounced, setQuery] = useStateDebounced("", 500);
  const { page, nextPage, prevPage } = usePagination([queryDebounced]);

  const [fetchingReason, setFetcingReason] = React.useState<
    "prev" | "next" | "query"
  >("query");

  const {
    data: { meals, hasMore, size } = { meals: [], hasMore: false, size: 0 },
    isFetching,
    isError,
    error,
  } = useQuery(
    ["meals", queryDebounced, page],
    () => getMeals({ query: queryDebounced, page }),
    {
      keepPreviousData: true,
    }
  );

  return (
    <Box w="70%" display="flex" flexDirection="column" flex={1}>
      <Box p="2">
        <InputGroup>
          <Input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setFetcingReason("query");
            }}
          />

          {isFetching && fetchingReason === "query" && (
            <InputRightElement
              children={<Button color="green.500" isLoading variant="ghost" />}
            />
          )}
        </InputGroup>
      </Box>
      <Box display="flex" justifyContent="space-between" p="2">
        <Button
          isLoading={isFetching && fetchingReason === "prev"}
          colorScheme="cyan"
          disabled={page === 0 || isFetching}
          onClick={() => {
            prevPage();
            setFetcingReason("prev");
          }}
        >
          Prev
        </Button>
        {size > 0 && !isError && (
          <Text>
            {page + 1}/{size}
          </Text>
        )}
        <Button
          isLoading={isFetching && fetchingReason === "next"}
          disabled={!hasMore || isFetching}
          onClick={() => {
            nextPage();
            setFetcingReason("next");
          }}
          colorScheme="cyan"
        >
          Next
        </Button>
      </Box>

      {isError ? (
        <Error message={(error as { message: string }).message} />
      ) : (
        <MealItemList meals={meals} />
      )}
    </Box>
  );
}
