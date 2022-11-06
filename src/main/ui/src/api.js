import axios from "axios";

const url = "http://localhost:8081";

export const authenticateLogin = async (user) => {
  try {
    return await axios.post(`${url}/login`, user);
  } catch (error) {
    console.log("Error while calling login API: ", error);
  }
};
export const getAllCustomer = async () => {
  try {
    return await axios.get(`${url}/allcustomers`);
  } catch (error) {
    console.log("Error while calling login API: ", error);
  }
};
