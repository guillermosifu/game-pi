const url = `https://64a39ad4c3b509573b564f07.mockapi.io/pigame/users`

export const getUsers = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      return(error);
    }
  };

  
export  const createUsers = async (body) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return(error);
    }
  }

  export const updateUsers = async (id, body) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };



const deleteAllUsers = async () => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (response.ok) {
      console.log("Datos eliminados correctamente.");
    } else {
      console.log("No se pudo eliminar los datos.");
    }
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
  }
};

deleteAllUsers();
