// import { useState, useEffect } from "react";
import { myUseEffect } from "../useEffect";
import { myUseState } from "../useState";
export const useCustomSearchParams = () => {
  const getParams = () => new URLSearchParams(window.location.search);
  const [searchParams, setSearchParams] = myUseState(getParams());
  myUseEffect(() => {
    const handlePopState = () => setSearchParams(getParams());

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);
  const updateSearchParams = (newParams) => {
    const updatedParams = new URLSearchParams(window.location.search);

    Object.keys(newParams).forEach((key) => {
      if (newParams[key] !== null) {
        updatedParams.set(key, newParams[key]);
      } else {
        updatedParams.delete(key);
      }
    });

    const newUrl = `${window.location.pathname}?${updatedParams.toString()}`;
    window.history.pushState({}, "", newUrl);
    setSearchParams(new URLSearchParams(updatedParams));
  };

  return [searchParams, updateSearchParams];
};
