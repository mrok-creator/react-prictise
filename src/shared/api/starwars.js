import axios from "axios";

const instance = axios.create({
  baseURL: "https://swapi.py4e.com/api",
});

export const searchPeople = async (name) => {
  const { data } = await instance.get("/people/1/", {
    name,
  });
  return data;
};
