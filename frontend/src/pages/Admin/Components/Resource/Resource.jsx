import React, { useEffect, useState } from "react";
import { END_POINT } from "../../../../config/api";
import axios from "axios";
import "./resource.module.scss";
import style from "./resource.module.scss";

export function Resource() {
  const [resourses, setResources] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchResource = async () => {
      try {
        const data = await axios.get(`${END_POINT}/resources/getresources`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const resource = await data.data;
        setResources(resource);
        console.log(resource);
      } catch (err) {
        console.log("There was some error fetching resource page");
      }
    };
    fetchResource();
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Resource List </h1>
      <div className={style["resource-card-wrapper"]}>
        {resourses &&
          resourses.map((resource, index) => {
            return (
              <div key={index} className={style["resource-card"]}>
                <h2>{resource.name}</h2>
                <h4>{resource.email}</h4>
                <h4>Trust - {resource.trustLevel}</h4>
                <div className={style["description-card"]}>
                  <p>{resource.description}</p>
                  <p className={style["additional-info"]}>
                    {resource.additionalInfo}
                  </p>
                  <div className={style["expire-update-cards"]}>
                    <div className={style["expire-update-card"]}>
                      <p className={style["date-expire"]}>Expire Date</p>
                      <p className={style["additional-info"]}>
                        {resource.expiryDate.slice(0, 10)}
                      </p>
                    </div>
                    <div className={style["expire-update-card"]}>
                      <p className={style["date-update"]}>Last Updated</p>
                      <p className={style["additional-info"]}>
                        {resource.updatedAt.slice(0, 10)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={style["button-group"]}>
                  <a href={resource.url}>
                    <button href={resource.url} className={style["button-url"]}>
                      URL
                    </button>
                  </a>
                  <button className={style["button-delete"]}>Delete</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
