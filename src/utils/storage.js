export const getCosts = () => {
  const data = localStorage.getItem("costs");
  return data ? JSON.parse(data) : [];
};

export const saveCosts = (costs) => {
  localStorage.setItem("costs", JSON.stringify(costs));
};
