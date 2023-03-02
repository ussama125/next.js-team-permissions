import axios from "axios"

export const assignProjectToMember = async (userId, projectId, loginUserId) => {
    try {
      const res = await axios.post(`http://localhost:3000/permission/project/owner`,
      {
        userId, projectId
      },
      {
        headers: {token:loginUserId }
      }
      );
      return res.data;
    } catch(e) {
      console.error('Error: ', e);
      return e;
    }
  }