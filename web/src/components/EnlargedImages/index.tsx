import { Box, Button, Flex, Grid, Image } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { TouristAttractionImages } from "../../types/TouristAttraction";

/**
 * The selected  one should be the first in the array
 */
const EnlargedImages: React.FC<{
  imagesToEnlargeUrl?: TouristAttractionImages;
  setImagesToEnlargeUrl: React.Dispatch<
    React.SetStateAction<TouristAttractionImages | undefined>
  >;
}> = ({ imagesToEnlargeUrl, setImagesToEnlargeUrl }) => {
  const enlargedArea = useRef(null);
  const [imageUrls, setImageUrls] = useState<TouristAttractionImages>();

  useEffect(() => {
    if (enlargedArea.current) {
      const img = enlargedArea.current as unknown as HTMLImageElement;
      if (!imagesToEnlargeUrl) {
        img.style.opacity = "0";
        img.style.pointerEvents = "none";
      } else {
        setImageUrls(imagesToEnlargeUrl);
        img.style.opacity = "1";
        img.style.pointerEvents = "unset";
      }
    }
  }, [imagesToEnlargeUrl]);

  return (
    <>
      <Grid
        onClick={() => {
          setImagesToEnlargeUrl(undefined);
        }}
        position="fixed"
        top="0"
        pointerEvents="none"
        opacity="0"
        left="0"
        width="100vw"
        height="100vh"
        cursor="zoom-out"
        zIndex="300"
        padding={["3rem 1rem", null, null, "3rem 6rem"]}
        display="grid"
        placeItems="center"
        transition=".3s"
        background="rgba(0,0,0,0.95)"
        ref={enlargedArea}
      >
        <Grid
          gridTemplateRows={["", null, null, "60vh 20vh"]}
          gridTemplateColumns="1fr 1fr 1fr"
          maxWidth="800px"
          gap="12px"
          position="relative"
        >
          {imageUrls?.map((imgLink, i) => {
            return (
              <Box
                width="100%"
                height="100%"
                gridRow={i == 0 ? 1 : 2}
                gridColumn={i == 0 ? "1 / -1" : "auto"}
                key={imgLink}
              >
                <Image
                  src={imgLink}
                  cursor={i == 0 ? "auto" : "pointer"}
                  objectFit="cover"
                  height={i == 0 ? ["unset", null, null, "100%"] : "100%"}
                  width="100%"
                  borderRadius="8px"
                  onClick={
                    i === 0
                      ? (e) => {
                          e.stopPropagation();
                        }
                      : (e) => {
                          e.stopPropagation();
                          //If not first element(the enlarged one), when user clicks on it,
                          //swap its place with the first element
                          let imageUrlsClone = [...imageUrls];
                          let tmp = imageUrlsClone[i];
                          imageUrlsClone[i] = imageUrlsClone[0];
                          imageUrlsClone[0] = tmp;
                          setImageUrls(
                            imageUrlsClone as TouristAttractionImages
                          );
                        }
                  }
                />
              </Box>
            );
          })}
          <Button
            onClick={() => {
              setImagesToEnlargeUrl(undefined);
            }}
            position="absolute"
            right={["0", null, null, "-60px"]}
            fontWeight="bold"
            color="white"
            fontSize="20px"
            fontFamily=""
            _hover={{ bg: " #2D3748" }}
            bg="none"
            padding="1rem"
          >
            <Image
              filter="invert(1)"
              src="/cross.png"
              width="15px"
              height="15px"
            />
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default EnlargedImages;
