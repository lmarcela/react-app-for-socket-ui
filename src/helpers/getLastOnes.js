export const getLastOnes = async () => {
  const resp = await fetch(`${process.env.REACT_APP_TICKET_SOCKET_URL}/last-ones`);
  const data = await resp.json();
  return data.last;
};
