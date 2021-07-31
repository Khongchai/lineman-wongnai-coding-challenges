import { Box, Grid, Image } from "@chakra-ui/react";
import React from "react";
import { TouristAttractionImages } from "../types/TouristAttraction";

interface ImagesProps {
  bigImgUrl: string;
  tinyImgUrls: [string, string, string];
  setImagesToEnlargeUrl: React.Dispatch<
    React.SetStateAction<TouristAttractionImages | undefined>
  >;
}

export const Images: React.FC<ImagesProps> = ({
  bigImgUrl,
  tinyImgUrls,
  setImagesToEnlargeUrl,
}) => {
  const sharedImageProps = {
    borderRadius: "8px",
    cursor: "zoom-in",
  };
  return (
    <Grid
      gridTemplateRows={["230px 100px", "230px 187px"]}
      gridTemplateColumns="1fr 1fr 1fr"
      gap="10px"
    >
      <Box gridRow="1" gridColumn="1 / -1">
        <Image
          src={bigImgUrl}
          height="100%"
          objectFit="cover"
          className="enlargeable"
          width="100%"
          {...sharedImageProps}
          onClick={() => setImagesToEnlargeUrl([bigImgUrl, ...tinyImgUrls])}
        />
      </Box>
      {tinyImgUrls.map((url, i) => (
        <Image
          gridRow="2"
          className="enlargeable"
          height="100%"
          width="100%"
          key={url}
          objectFit="cover"
          src={url}
          {...sharedImageProps}
          onClick={() => {
            const urlsClone = [...tinyImgUrls];
            const clickedImg = urlsClone.splice(i, 1);
            setImagesToEnlargeUrl([
              ...clickedImg,
              ...urlsClone,
              bigImgUrl,
            ] as TouristAttractionImages);
          }}
        />
      ))}
    </Grid>
  );
};
