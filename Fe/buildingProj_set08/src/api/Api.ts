import axios from "axios";
const url = "http://localhost:2211/api/v1";

export const viewData = async () => {
  try {
    return await axios.get(`${url}/viewData`).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
export const viewSortedData = async () => {
  try {
    return await axios.get(`${url}/viewSortedData`).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
