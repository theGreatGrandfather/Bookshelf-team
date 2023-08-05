export const setItem = data => {
  try {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(data.id, jsonData);
  } catch (error) {
    console.log(error);
  }
};

export const getItem = id => {
  return localStorage.getItem(id);
};

export const removeItem = id => {
  localStorage.removeItem(id);
};
