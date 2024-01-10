import React from "react";
import { END_POINT } from "../../../../config/api";
import { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Card } from "./Card/index.js";
import style from "./contactus.module.scss";
import Loader from "../../../../components/util/Loader";

export function Contact() {
  const [contactUsData, setContactUsData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const fetchJoinUs = async () => {
    const response = await fetch(`${END_POINT}/getContactUs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();
    setContactUsData(data.ContactUs);
    setIsLoaded(false);
  };
  useEffect(() => {
    setIsLoaded(true);
    fetchJoinUs();
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Contact Us </h1>
      <div className={style["data-loader"]}>{isLoaded ? <Loader /> : null}</div>
      <div className={style["card-container"]}>
        <Grid container spacing={2}>
          <Grid item>
            {contactUsData &&
              contactUsData.map((data) => {
                return <Card key={data._id} content={data} />;
              })}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
