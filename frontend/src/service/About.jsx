import {
  DELETE_FAIL,
  DELETE_SUCCESS,
  GET_FAIL,
  GET_SUCCESS,
  POST_FAIL,
  POST_SUCCUSS,
} from "../common/constants";
import { END_POINT } from "../config/api";

const getTeamMembers = async (setToast, toast) => {
  try {
    const response = await fetch(`${END_POINT}/teamMember/getTeamMembers/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();
    const _data = data.map((item) => {
      return {
        ...item,
        teams: item.teams,
      };
    });
    let _image = [];
    await _data?.map((item) => {
      let formattedPath = item.image?.replace(/\\/g, "/");
      if (formattedPath?.startsWith("uploads/")) {
        formattedPath = formattedPath.replace("uploads/", "");
        if (formattedPath) {
          formattedPath = `${END_POINT}/${formattedPath}`;
        }
      }
      _image.push({ image: formattedPath, id: item._id });
    });

    setToast({
      ...toast,
      toastMessage: GET_SUCCESS,
      toastStatus: true,
      toastType: "success",
    });
    return { teamMembers: _data, _image: _image };
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

const postTeamMember = async (data, setToast, toast) => {
  try {
    const response = await fetch(`${END_POINT}/teamMember/addTeamMember`, {
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

const deleteTeamMember = async (id, setToast, toast) => {
  try {
    const response = await fetch(`${END_POINT}/teamMember/deleteTeamMember`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ memberId: id }),
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

export { getTeamMembers, postTeamMember, deleteTeamMember };
