import axios from "axios"

export const getProjectById = async (id, userName) => {
    try {
      const res = await axios.get(`http://localhost:3000/project/${id}`,
        {
            headers: {token: userName}
        }
      );
      return res.data;
    } catch(e) {
      console.error('Error: ', e);
      return e;
    }
  }