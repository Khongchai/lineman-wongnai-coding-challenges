import React, { useEffect } from "react";
import { TouristAttractionType } from "../../types/TouristAttraction";
import fetchFromParam from "../fetch/fetchData";

let timeoutHandle: any = null;

/**
 * Delay search for x seconds before sending fetch to api
 */
export function useDelayedFetch(
  searchData: string,
  delayMilliseconds: number,
  setFetching: React.Dispatch<React.SetStateAction<boolean>>,
  setDatatoDisplay: React.Dispatch<
    React.SetStateAction<TouristAttractionType[] | []>
  >
) {
  useEffect(() => {
    setFetching(true);
    window.clearTimeout(timeoutHandle);

    timeoutHandle = setTimeout(() => {
      fetchFromParam(searchData)
        .then((res) => res.json())
        .then(
          (data) => {
            setDatatoDisplay(data);
            setFetching(false);
          },
          (error) => {
            console.error(error);
          }
        );
    }, delayMilliseconds);
  }, [searchData]);
}
