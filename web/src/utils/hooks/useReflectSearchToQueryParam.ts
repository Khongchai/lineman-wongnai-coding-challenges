import { useEffect } from "react";

/**
 * This function is responsible for setting the search value to query param, the value of which
 * will be loaded throught useLoadFromQueryParam.
 *
 * This function will not run on first load; first load will be handled by useLoadFromQueryParam
 */
let firstLoad = true;
export default function useReflectSearchToQueryParam(searchQuery: string) {
  useEffect(() => {
    if (!firstLoad) {
      const newParam = searchQuery
        ? `${window.location.pathname}?search=${searchQuery}`
        : window.location.pathname;
      window.history.pushState("", "", newParam);
    }
    firstLoad = false;
  }, [searchQuery]);
}
