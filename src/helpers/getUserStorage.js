export const getUserStorage = () => {
  return {
    asesor: localStorage.getItem("asesor"),
    escritorio: localStorage.getItem("escritorio"),
  };
};
