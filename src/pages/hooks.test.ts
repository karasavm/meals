import { usePagination } from "./hooks";

import { renderHook, act } from "@testing-library/react-hooks";

describe("hooks on pages module", () => {
  describe("usePagination hook", () => {
    it("return correct basic page handling", () => {
      const { result } = renderHook(() => usePagination([]));

      // init page
      expect(result.current.page).toEqual(0);

      // two times go to next page
      act(() => {
        result.current.nextPage();
        result.current.nextPage();
      });

      expect(result.current.page).toEqual(2);

      // one page back

      act(() => {
        result.current.prevPage();
      });
      expect(result.current.page).toEqual(1);
    });

    it("should not exceed page 0 on prev", () => {
      const { result } = renderHook(() => usePagination([]));

      expect(result.current.page).toEqual(0);

      // one page back
      act(() => {
        result.current.prevPage();
      });

      expect(result.current.page).toEqual(0);
    });

    it("when depedencies changed, set page to zero", async () => {
      const { result, rerender } = renderHook((deps: unknown[] = ["initDep"]) =>
        usePagination(deps)
      );

      expect(result.current.page).toEqual(0);

      // await waitForNextUpdate();
      // one page next
      act(() => {
        result.current.nextPage();
      });

      expect(result.current.page).toEqual(1);

      // deps changed
      rerender(["changed-dep"]);

      expect(result.current.page).toEqual(0);
    });
  });
});
