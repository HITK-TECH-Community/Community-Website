import { DELETE_FAIL, DELETE_SUCCESS, GET_FAIL, GET_SUCCESS, POST_FAIL, POST_SUCCUSS } from "../common/constants";
import { END_POINT } from "../config/api";

const getContactUs = async (setToast, toast) => {
  try {
    const response = await fetch(`${END_POINT}/contactus/getcontactus`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();
    setToast({
      ...toast,
      toastMessage: GET_SUCCESS,
      toastStatus: true,
      toastType: "success",
    });
    return data.ContactUs;
  } catch (err) {
    console.log(err);
    setToast({
      ...toast,
      toastMessage: GET_FAIL,
      toastStatus: true,
      toastType: "error",
    });
  }
};

const postContactUs = async (data,setToast,toast) => {
  try {
    const response = await fetch(`${END_POINT}/contactus/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const _data = await response.json();
    setToast({
      ...toast,
      toastMessage: POST_SUCCUSS,
      toastStatus: true,
      toastType: "success",
    });
    return _data;
  } catch (err) {
    console.log(err);
    setToast({
      ...toast,
      toastMessage: POST_FAIL,
      toastStatus: true,
      toastType: "error",
    });
  }
};

const deleteContactUs = async (id, setToast, toast) => {
  try {
    const response = await fetch(`${END_POINT}/contactus/deleteContactUs`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ contactUsId: id }),
    });

    const data = await response.json();
    setToast({
      ...toast,
      toastMessage: DELETE_SUCCESS,
      toastStatus: true,
      toastType: "success",
    });
    return data;
  } catch (err) {
    console.log(err);
    setToast({
      ...toast,
      toastMessage: DELETE_FAIL,
      toastStatus: true,
      toastType: "error",
    });
  }
};

export { getContactUs, postContactUs, deleteContactUs };
