import { useEffect, useState } from "react";

export function useDebounce(state, delay) {
  const [value, setValue] = useState(state);

  useEffect(() => {
    const id = setTimeout(() => {
      setValue(state);
    }, [delay]);

    return () => {
      clearTimeout(id);
    };
  }, [state, delay]);


   return value;

}

