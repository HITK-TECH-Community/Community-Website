import React from "react";
import { END_POINT } from "../../../../config/api";
import { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid"
import { Card } from './Card/index.js'
import style from './joinus.module.scss'
import Loader from "../../../../components/util/Loader";
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
  useEffect(() => {
    setIsLoaded(true)
    fetchJoinUs()
  }, [])

  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Join Us </h1>
      <div className={style["data-loader"]}>{isLoaded?<Loader/>:null}</div>
      <div className={style["card-container"]}>
        <Grid container spacing={2}>
          <Grid item>
            {
              joinUsData.map((data) => {
                return (
                  <Card key={data._id} content={data} />
                );
              })
            }
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
