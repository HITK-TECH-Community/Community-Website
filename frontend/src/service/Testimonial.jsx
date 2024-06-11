import { END_POINT } from "../config/api";
import { showToast } from "./toastService";

export async function getTestimonials(setTestimonials, setToast) {
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

