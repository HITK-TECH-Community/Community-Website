import {
  DELETE_FAIL,
  DELETE_SUCCESS,
  GET_FAIL,
  GET_SUCCESS,
  POST_FAIL,
  POST_SUCCUSS,
} from "../common/constants";
import { END_POINT } from "../config/api";

const boardcast = async (setToast, toast) => {
  try {
    const response = await fetch(`${END_POINT}/broadcast`, {
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
    return data;
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

const customBoardcast = async (api) => {
  try {
    const response = await fetch(api, {
      method: "GET",
    });
    const _data = await response.json();
    return _data;
  } catch (err) {
    console.log(err);
  }
};

const deleteBoardcast = async (id, setToast, toast) => {
  try {
    const response = await fetch(`${END_POINT}/broadcast/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const data = await response.json();
    setToast({
      ...toast,
      toastMessage: DELETE_SUCCESS,
      toastStatus: true,
      toastType: "success",
    });
    return true;
  } catch (err) {
    console.log(err);
    setToast({
      ...toast,
      toastMessage: DELETE_FAIL,
      toastStatus: true,
      toastType: "error",
    });
    return false;
  }
};

const postBoardcast = async ( data, setToast, toast) => {
  try {
    const response = await fetch(`${END_POINT}/broadcast`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
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
    return true;
  } catch (err) {
    console.log(err);
    setToast({
      ...toast,
      toastMessage: POST_FAIL,
      toastStatus: true,
      toastType: "error",
    });
    return false;
  }
};

const UpdateBoardCast = async (data, setToast, toast) => {
  try {
    const response = await fetch(`${END_POINT}/broadcast/update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to Approve");
    }
    setToast({
      ...toast,
      toastMessage: "Successfully Approved",
      toastStatus: true,
      toastType: "success",
    });
    return true;
  } catch (error) {
    console.log("Failed to Approve", error.message);
    setToast({
      ...toast,
      toastMessage: "Failed to Approve",
      toastStatus: true,
      toastType: "error",
    });
  }
};

export {
  boardcast,
  customBoardcast,
  deleteBoardcast,
  postBoardcast,
  UpdateBoardCast,
};
