import React from "react";

function usePagination(deps: unknown[]) {
  const [page, setPage] = React.useState(0);

  const prevPage = React.useCallback(() => {
    setPage((p) => Math.max(0, p - 1));
  }, []);

  const nextPage = React.useCallback(() => setPage((p) => p + 1), []);
  const resetPage = React.useCallback(() => setPage(0), []);

  // reset page when deps changed
  React.useEffect(() => {
    resetPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, resetPage]);

  return { page, nextPage, prevPage };
}

export { usePagination };
