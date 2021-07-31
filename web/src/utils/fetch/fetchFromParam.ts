export default async (queryParam: string) =>
  await fetch(`http://localhost:5000/api/trips?keyword=${queryParam}`);
