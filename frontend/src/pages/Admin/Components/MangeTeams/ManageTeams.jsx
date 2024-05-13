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
      console.log(res[0])
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
              <img src={d.image || "./images/defaultUser.png"} style={{margin:"auto", borderRadius:"50%", width:"200px", height:"200px"}} alt="" />
            </div>
            <h4> {d.full_name} </h4>
            <div className={style["content"]}>
              <h3 style={{fontWeight:"bolder"}}>About</h3> {d.description}
            </div>
            <div className={style["content"]}>
            <h3 style={{fontWeight:"bold"}}>LinkedIn</h3><a href={d.linkedin_url} target="_blank" rel="noopener noreferrer" >{d.linkedin_url&&`${d.linkedin_url?.slice(0,10)}...${d.linkedin_url?.slice(d.linkedin_url?.length - 10)}`}</a>
            </div>
            <div className={style["content"]}>
            <h3 style={{fontWeight:"bold"}}>GitHub</h3><a href={d.github_url} target="_blank" rel="noopener noreferrer" >{d.github_url&&`${d.github_url?.slice(0,10)}...${d.github_url?.slice(d.github_url?.length - 10)}`}</a>
            </div>
            <div className={style["content"]}>
            <h3 style={{fontWeight:"bold"}}>Twitter</h3><a href={d.twitter_url} target="_blank" rel="noopener noreferrer" >{d.twitter_url&&`${d.twitter_url?.slice(0,10)}...${d.twitter_url?.slice(d.twitter_url?.length - 10)}`}</a>
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
