export const saveToLocalStorage = (key, state) =>
  window.localStorage.setItem(key, JSON.stringify(state));

export const loadFromLocalStorage = key => {
  const data = window.localStorage.getItem(key);
  return data === null ? (key === "cities" ? [] : {}) : JSON.parse(data);
};
