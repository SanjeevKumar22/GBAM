// import axios from "axios";

// const url = "http://localhost:8081";

// export const authenticateLogin = async (user) => {
//   try {
//     return await axios.post(`${url}/login`, user);
//   } catch (error) {
//     console.log("Error while calling login API: ", error);
//   }
// };


import axios from "axios";

const url = "http://localhost:8081";

export const authenticateLogin = async (user) => {
  try {
    return await axios.post(`${url}/login`, user);
  } catch (error) {
    console.log("Error while calling login API: ", error);
  }
};

export const addAcc = async (user) => {
  try {
    return await axios.post(`${url}/openAccount`, user);
  } catch (error) {
    console.log("Error while calling login API: ", error);
  }
};
export const addBranch = async (user) => {
  try {
    return await axios.post(`${url}/addbranch`, user);
  } catch (error) {
    console.log("Error while calling login API: ", error);
  }
};