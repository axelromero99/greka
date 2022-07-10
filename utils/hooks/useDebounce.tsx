import {useState, useEffect} from "react";

/**
 * "useDebounce returns a debounced version of the value passed in as an argument, which delays the
 * returned value for the amount of time specified in the second argument."
 *
 * The first argument is the value we want to debounce. The second argument is the amount of time we
 * want to wait before returning the debounced value
 * @param {any} value - The value to be debounced.
 * @param {number} delay - The delay in milliseconds before the callback is fired.
 * @returns The debounced value.
 */
function useDebounce(value: any, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
