import axios from "axios";

export const getData = async (state, url) => {
  const peticion = await axios.get(url);
  state(peticion.data);
};

export const postData = async (object = {}, url) => {
  try {
    await axios.post(url, object);
  } catch (error) {
    console.log(error);
  }
};

export const PutData = async (url, object = {}) => {
  try {
    await axios.put(url, object);
  } catch (error) {
    console.log(error);
  }
};

export const patchData = async (url, data) => {
  try {
    await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export { getData, postData, patchData, deleteData };
