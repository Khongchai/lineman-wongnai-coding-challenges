export default async (queryParam: string, entireUrl?: string) => {
  return entireUrl
    ? entireUrl
    : await fetch(`http://localhost:5000/api/trips?keyword=${queryParam}`);
};
