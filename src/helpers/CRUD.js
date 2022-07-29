const getData = async (url, state) => {
  try {
    const respuesta = await fetch(url);

    const datos = await respuesta.json();

    state(datos);
  } catch (error) {
    console.log(error);
  }
};

const postData = async (url, data) => {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
  } catch (error) {
    console.error(error);
  }
};

const patchData = async (url, data) => {
  try {
    await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
  } catch (error) {
    console.error(error);
  }
};

const deleteData = async (url) => {
  try {
    await fetch(url, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(error);
  }
};

export { getData, postData, patchData, deleteData };
