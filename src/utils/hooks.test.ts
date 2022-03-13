import { useStateDebounced } from "./hooks";
import { renderHook, act } from "@testing-library/react-hooks";

jest.useFakeTimers();

const timer = 500;
describe("hooks on utils module", () => {
  describe("useStateDebounced", () => {
    it("should update debounced state on delay", () => {
      const { result } = renderHook(() => useStateDebounced("", timer));

      expect(result.current[0]).toEqual("");
      expect(result.current[1]).toEqual("");

      // update value with `query`
      act(() => {
        result.current[2]("query");
      });

      // verify debouncing has not run yet
      expect(result.current[0]).toEqual("query");
      expect(result.current[1]).toEqual("");

      // some debouncing delay passed but not all
      act(() => {
        jest.advanceTimersByTime(timer - 1);
      });

      // verify that nothing happend
      expect(result.current[0]).toEqual("query");
      expect(result.current[1]).toEqual("");

      // rest of debouncing delay passed
      act(() => {
        jest.advanceTimersByTime(1);
      });

      // verify debounced state is updated
      expect(result.current[0]).toEqual("query");
      expect(result.current[1]).toEqual("query");
    });
  });
});
