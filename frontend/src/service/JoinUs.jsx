import { END_POINT } from "../config/api";
import { showToast } from "./toastService";

const postJoinUs = async (data, setToast) => {
    try {
      showToast(setToast,"Loading...","info")
      const response = await fetch(`${END_POINT}/joinUs/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const _data = await response.json();
        showToast(setToast, "Form submitted successfully!", "success");
        return true;
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
        showToast(setToast, "Something went wrong", "error");
        return false;
      }
    } catch (err) {
      console.error("Network Error:", err);
      showToast(setToast, "Something went wrong", "error");
      return false;
    }
  };
  
  export { postJoinUs };