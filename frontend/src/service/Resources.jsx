import {
  DELETE_FAIL,
  DELETE_SUCCESS,
  GET_FAIL,
  GET_SUCCESS,
  POST_FAIL,
  POST_SUCCESS,
} from "../common/constants";
import { END_POINT } from "../config/api";
import { showToast } from "./toastService";

const getResources = async (setToast, toast) => {
  try {
    const response = await fetch(`${END_POINT}/resources/getresources`, {
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


const postResource = async (data, setToast) => {
  try {
    const response = await fetch(`${END_POINT}/resources`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const _data = await response.json();
      showToast(setToast, "Resource shared successfully", "success");
      return _data;
    } else {
      const errorData = await response.json();
      console.error("Error:", errorData);
      showToast(setToast, "Database error", "error");
      return false;
    }
  } catch (err) {
    console.error("Network Error:", err);
    showToast(setToast, "Network Error", "error");
    return false;
  }
};

const deleteResource = async (id, setToast, toast) => {
  try {
    const response = await fetch(`${END_POINT}/resources/deleteResource`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ resourceId: id }),
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

export { getResources, postResource, deleteResource };
