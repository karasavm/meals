import React from "react";

function useStateDebounced<T>(initState: T | (() => T), timeout: number) {
  const [state, setState] = React.useState(initState);
  const [stateDebounced, setStateDebounced] = React.useState(state);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setStateDebounced(state);
    }, timeout);

    return () => clearTimeout(timer);
  }, [state, timeout]);

  return [state, stateDebounced, setState] as const;
}

export { useStateDebounced };
