export type TouristAttractionType = {
  title: string;
  eid: string;
  url: string;
  description: string;
  photos: TouristAttractionImages;
  tags: string[];
};

export type TouristAttractionImages = [string, string, string, string];
