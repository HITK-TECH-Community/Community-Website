import { DELETE_FAIL, DELETE_SUCCESS, POST_FAIL, POST_SUCCESS } from "../common/constants";
import { END_POINT } from "../config/api";
import { showToast } from "./toastService";

async function getTestimonials(setTestimonials, setToast) {
  try {
    const response = await fetch(`${END_POINT}/testimonials/getTestimonials`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      setTestimonials(data);
      // we won't be showing the success message for this as it looks wierd on the home page.
    } else {
      showToast(setToast, "Failed to fetch testimonials.", "error");
    }
  } catch (err) {
    console.error("Network Error:", err);
    showToast(setToast, "Network Error", "error");
  }
};

const deleteTestimonial = async (id, setToast,toast) => {
  try {
    const response = await fetch(`${END_POINT}/testimonials/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to delete testimonial");
    }
    setToast({
      ...toast,
      toastMessage: DELETE_SUCCESS,
      toastStatus: true,
      toastType: "success",
    });
  } catch (err) {
    console.error("Network Error:", err);
    setToast({
      ...toast,
      toastMessage: DELETE_FAIL,
      toastStatus: true,
      toastType: "error",
    });
  }
}

const addTestimonial = async (testimonial, setToast,toast) => {
  try {
    const response = await fetch(`${END_POINT}/testimonials/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(testimonial),
    });
    const res = await response.json();
    if (!response.ok) {
      console.log(res);
      throw new Error("Failed to add testimonial");
    }
    setToast({
      ...toast,
      toastMessage: POST_SUCCESS,
      toastStatus: true,
      toastType: "success",
    });
  } catch (err) {
    console.error("Network Error:", err);
    setToast({
      ...toast,
      toastMessage: POST_FAIL,
      toastStatus: true,
      toastType: "error",
    });
  }
}


export { getTestimonials, addTestimonial, deleteTestimonial}