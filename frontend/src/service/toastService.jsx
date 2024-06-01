
export const showToast = (setToast, message, type = "success") => {
    setToast({
      toastStatus: true,
      toastType: type,
      toastMessage: message,
    });
  };
  
export const hideToast = (setToast) => {
    setToast({
        toastStatus: false,
        toastType: "",
        toastMessage: "",
    });
};