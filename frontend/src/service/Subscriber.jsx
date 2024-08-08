import { END_POINT } from "../config/api";
import { showToast } from "./toastService";

const postSubscriber = async (data, setToast) => {
  try {
    const response = await fetch(`${END_POINT}/subscriber/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const _data = await response.json();
      showToast(setToast, "Newsletter Subscribed successfully", "success");
      return true;
    } else {
      const errorData = await response.json();
      console.error("Error:", errorData);
      showToast(setToast, "You already subscribed", "error");
      return false;
    }
  } catch (err) {
    console.error("Network Error:", err);
    showToast(setToast, "Something went wrong", "error");
    return false;
  }
};

export { postSubscriber };
