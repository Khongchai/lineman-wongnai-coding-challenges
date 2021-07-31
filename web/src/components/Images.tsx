import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import React, { useEffect, useMemo } from "react";

interface ImagesProps {
  bigImgUrl: string;
  tinyImgUrls: [string, string, string];
}

export const Images: React.FC<ImagesProps> = ({ bigImgUrl, tinyImgUrls }) => {
  const sharedImageProps = {
    borderRadius: "8px",
  };
  return (
    <Grid
      gridTemplateRows={["230px 100px", null, null, "230px 187px"]}
      gridTemplateColumns="1fr 1fr 1fr"
      gap="10px"
    >
      <Box gridRow="1" gridColumn="1 / -1">
        <Image
          src={bigImgUrl}
          height="100%"
          objectFit="cover"
          width="100%"
          {...sharedImageProps}
        />
      </Box>
      {tinyImgUrls.map((url) => (
        <Image
          gridRow="2"
          height="100%"
          key={url}
          objectFit="cover"
          src={url}
          {...sharedImageProps}
        />
      ))}
    </Grid>
  );
};
