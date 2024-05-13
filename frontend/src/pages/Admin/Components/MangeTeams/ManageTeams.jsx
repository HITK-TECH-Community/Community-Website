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
            <h2 className="head1"> {d.full_name} </h2>
            <div className={style["content"]}>
              <h3 style={{fontWeight:"bolder"}}>About</h3> {d.description}
            </div>
            <div className={style["content"]}>
            {d.linkedin_url&&<a href={d.linkedin_url} className={style["url"]} target="_blank" rel="noopener noreferrer" >Linkedin</a>}
            </div>
            <div className={style["content"]}>
            {d.github_url&&<a href={d.github_url} className={style["url"]} target="_blank" rel="noopener noreferrer" >GitHub</a>}
            </div>
            <div className={style["content"]}>
            {d.twitter_url&&<a href={d.twitter_url} className={style["url"]} target="_blank" rel="noopener noreferrer" >Twitter</a>}
            </div>
            <div className={style["content"]}>
            <h3 style={{fontWeight:"bold"}}>Team</h3>{d.teams?.join(", ")}
            </div>
            <button className={style["delete"]}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
