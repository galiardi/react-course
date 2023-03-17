import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: false,
    error: null,
  });

  const getData = async () => {
    setState({
      ...state,
      isLoading: true,
    });
    try {
      const response = await fetch(url);
      const data = await response.json();

      setState({
        data,
        isLoading: false,
        error: null,
      });
    } catch (err) {
      setState({
        data: null,
        isLoading: false,
        error: err,
      });
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
  };
};
