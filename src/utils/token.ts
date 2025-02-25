export const GET_TOKEN = () => {
  return localStorage.getItem("TOKEN") || null;
};

export const SET_TOKEN = (token: string) => {
  localStorage.setItem("TOKEN", token);
};
