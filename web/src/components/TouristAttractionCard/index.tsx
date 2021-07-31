import { Flex, Heading, Link, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  TouristAttractionImages,
  TouristAttractionType,
} from "../../types/TouristAttraction";
import EnlargedImages from "../EnlargedImages";
import { Images } from "../Images";
import { Description } from "./Description";
import { Tags } from "./Tags";

const TouristAttractionCard: React.FC<{
  data: TouristAttractionType[];
  setSearchData: React.Dispatch<React.SetStateAction<string>>;
}> = ({ data, setSearchData }) => {
  const [imagesToEnlargeUrl, setImagesToEnlargeUrl] =
    useState<TouristAttractionImages>();
  return (
    <Stack spacing="2.25rem">
      <EnlargedImages
        imagesToEnlargeUrl={imagesToEnlargeUrl}
        setImagesToEnlargeUrl={setImagesToEnlargeUrl}
      />
      {data.map((card) => (
        <Flex
          key={card.title}
          width={["100%", null, null, "unset"]}
          flexDir="column"
          as={Stack}
          spacing="0.5rem"
        >
          <Heading
            fontSize={["1.15rem", null, "1.5rem", "1.85rem"]}
            as={Link}
            href={card.url}
            target="_blank"
          >
            {card.title}
          </Heading>
          <Tags setSearchData={setSearchData} tags={card.tags} />
          <Images
            //Target requires fixed size array, pass members explicitly.
            bigImgUrl={card.photos[0]}
            tinyImgUrls={[card.photos[1], card.photos[2], card.photos[3]]}
            setImagesToEnlargeUrl={setImagesToEnlargeUrl}
          />
          <Description description={card.description} link={card.url} />
        </Flex>
      ))}
    </Stack>
  );
};

export default TouristAttractionCard;
