import React from "react";

function usePagination() {
  const [page, setPage] = React.useState(0);

  const prevPage = React.useCallback(() => {
    setPage((p) => Math.max(0, p - 1));
  }, []);

  const nextPage = React.useCallback(() => setPage((p) => p + 1), []);

  return { page, nextPage, prevPage };
}

export { usePagination };
