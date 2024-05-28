import React from "react";
import { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Card } from "./Card/index.js";
import style from "./contactus.module.scss";
import Loader from "../../../../components/util/Loader";
import { SimpleToast } from "../../../../components/util/Toast/Toast.jsx";
import { deleteContactUs, getContactUs } from "../../../../service/ContactUs.jsx";

export function Contact() {
  const [contactUsData, setContactUsData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [toast, setToast] = useState({
    toastStatus: false,
    toastType: "",
    toastMessage: "",
  });
  const fetchJoinUs = async () => {
    setIsLoaded(true);
    try{
    const data = await getContactUs();
    setContactUsData(data);
    setToast({
        ...toast,
        toastMessage: "Successfully get data!",
        toastStatus: true,
        toastType: "success",
      });
    }catch(error){
      setToast({
        ...toast,
        toastMessage: "Unable to get data!",
        toastStatus: true,
        toastType: "error",
      });
    }
    setIsLoaded(false);
  };
  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToast({ ...toast, toastStatus: false });
  };
  const handleDelete = async (id) => {
    try {
      const data = await deleteContactUs(id);
      setToast({
        ...toast,
        toastMessage: "Successfully deleted!",
        toastStatus: true,
        toastType: "success",
      });
      fetchJoinUs()
    } catch (error) {
      console.log(error);
      setToast({
        ...toast,
        toastMessage: "Unable to delete!",
        toastStatus: true,
        toastType: "error",
      });
    }
  };
  useEffect(() => {
    setIsLoaded(true);
    fetchJoinUs();
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Contact Us </h1>
      {isLoaded ? <div className={style["data-loader"]}><Loader /></div>:
      <div className={style["card-container"]}>
        <Grid container spacing={2} >
          <Grid item container alignItems="center" justifyContent="center">
            {contactUsData &&
              contactUsData.map((data) => {
                return <Card key={data._id} id={data._id} handleDelete={handleDelete} content={data} />;
              })}
          </Grid>
        </Grid>
      </div>}
      {toast.toastStatus && (
        <SimpleToast
          open={toast.toastStatus}
          message={toast.toastMessage}
          handleCloseToast={handleCloseToast}
          severity={toast.toastType}
        />
      )}
    </div>
  );
}
