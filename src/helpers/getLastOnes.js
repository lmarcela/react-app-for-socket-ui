export const getLastOnes = async () => {
  const resp = await fetch("http://localhost:8080/last-ones");
  const data = await resp.json();
  return data.last;
};
