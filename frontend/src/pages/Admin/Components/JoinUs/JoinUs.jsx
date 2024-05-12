import React from "react";
import { END_POINT } from "../../../../config/api";
import { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid"
import { Card } from './Card/index.js'
import style from './joinus.module.scss'
import Loader from "../../../../components/util/Loader";
// import { useState } from "react";
// import { END_POINT } from "../../../../../config/api";
import axios from "axios";
import { SimpleToast } from "../../../../components/util/Toast/Toast.jsx";
export function JoinUs() {
  const [joinUsData, setJoinUsData] = useState([]);
  const [isLoaded,setIsLoaded] = useState(false);
  const fetchJoinUs = async () => {
    const response = await fetch(`${END_POINT}/joinUs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    const data = await response.json()
    setJoinUsData(data)
    setIsLoaded(false)
    console.log(data)
  }

    /* card deleting functionality */

  const handleDeleteSuccess = (id) => {
    setJoinUsData(prevData => prevData.filter(item => item._id !== id));
    console.log(id);
  };

  const [openDeleteToast, setDeleteToast] = useState(false);
  const [openDeleteError, setDeleteError] = useState(false);

  const onClickDelete = async (id) => {
    const token = localStorage.getItem("token");
  
    try {
      const response = await axios.delete(`${END_POINT}/joinUs/deleteJoinUs`, {
        headers: { Authorization: `Bearer ${token}` },
        data: { itemId: id },
      });
      const message = await response.data;
      
      if (message.message === "Deleted successfully") {
        setDeleteToast(true);
        // update and set the joinUsData 
        handleDeleteSuccess(id);
      
        
      } else {
        setDeleteError(true);
      }
    } catch (err) {
      setDeleteError(true);
     
      
    }
  };

  const handleDeleteToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setDeleteToast(false);
  };

  const handleDeleteError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setDeleteError(false);
  };


  useEffect(() => {
    setIsLoaded(true)
    fetchJoinUs()
  }, [])
 
  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Join Us </h1>
      <div className={style["data-loader"]}>{isLoaded?<Loader/>:null}</div>
      {joinUsData && <div className={style["card-container"]}>
        <Grid container spacing={2}>
          <Grid item>
            {
              joinUsData.map((data) => {
                return (
                  <Card key={data._id} content={data} onClickDelete={onClickDelete}/>
                );
              })
            }
          </Grid>
        </Grid>
      </div>}
      <SimpleToast
                open={openDeleteToast}
                message="Resource deleted successfully!"
                handleCloseToast={handleDeleteToast}
                severity="success"
            />
            <SimpleToast
                open={openDeleteError}
                message="Something went wrong. Try again!"
                handleCloseToast={handleDeleteError}
                severity="error"
            />
    </div>
  );
}
