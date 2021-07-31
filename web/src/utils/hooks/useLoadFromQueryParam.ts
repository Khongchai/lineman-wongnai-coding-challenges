import { useEffect } from "react";

/**
 * This function loads after ComponentDidmount the value from query param to
 * the search box.
 */
export default function useLoadFromQueryParamOnLoad(
  setSerchParam: React.Dispatch<React.SetStateAction<string>>
) {
  useEffect(() => {
    const params = new URLSearchParams(document.location.search.substring(1));
    const paramFromUrl: string | null = params.get("search");
    if (paramFromUrl) {
      setSerchParam(paramFromUrl);
    }
  }, []);
}
