import React, { useEffect, useState } from "react";
import style from "./manage-teams.module.scss";
import { END_POINT } from "../../../../config/api";

export function ManageTeams() {
  const [cards,setCards] = useState([])
  const getdata = async ()=>{
    try {
      const url = `${END_POINT}/teamMember/getTeamMembers/`
      const response = await fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('token')}`
        },
      });
      const res = await response.json()
      setCards(res)
      console.log(res)
    } catch (error) {
      console.log(error)
      alert("Failed to fetch!")
    }
    
  }
  useEffect(()=>{
    getdata()
  },[])
  return (
    <div>
      <h1 className={style["head"]}>Teams</h1>
      <div className={style["manage-teams"]}>
        {cards.map((d) => (
          <div
            className={style["crd"]}
            key={d.full_name}
          >
            <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
              <img src={d.image} style={{margin:"auto", borderRadius:"50%", width:"200px", height:"200px"}} alt="" />
            </div>
            <h4> {d.full_name} </h4>
            <div className={style["content"]}>
              <h3 style={{fontWeight:"bolder"}}>About</h3> {d.description}
            </div>
            <div className={style["content"]}>
            <h3 style={{fontWeight:"bold"}}>LinkedIn</h3>{d.linkedin_url}
            </div>
            <div className={style["content"]}>
            <h3 style={{fontWeight:"bold"}}>GitHub</h3>{d.github_url}
            </div>
            <div className={style["content"]}>
            <h3 style={{fontWeight:"bold"}}>Twitter</h3>{d.twitter_url}
            </div>
            <div className={style["content"]}>
            <h3 style={{fontWeight:"bold"}}>Team</h3>{d.teams?.join(", ")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
