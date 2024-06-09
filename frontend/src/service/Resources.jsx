import { END_POINT } from "../config/api";
import { showToast } from "./toastService";

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

export { postResource };
