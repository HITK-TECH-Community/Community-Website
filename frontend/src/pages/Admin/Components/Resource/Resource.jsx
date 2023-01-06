import React, { useEffect, useState } from "react";
import { END_POINT } from "../../../../config/api";
import axios from "axios";
import { SimpleToast } from "../../../../components/util/Toast";
import "./resource.module.scss";
import style from "./resource.module.scss";

export function Resource() {
  const [resourses, setResources] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [openDeleteToast, setDeleteToast] = useState(false);
  const [openDeleteError, setDeleteError] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchResource = async () => {
      try {
        const data = await axios.get(`${END_POINT}/resources/getresources`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const resource = await data.data;
        setResources(resource);
        setLoading(true);
      } catch (err) {
        setOpenError(true);
        setLoading(true);
      }
    };
    fetchResource();
  }, []);

  const onClickDelete = async (id) => {
    const token = localStorage.getItem("token");
    setLoading(false)
    try{
      const response = await axios.delete(`${END_POINT}/resources/deleteResource`, {
        headers: { Authorization: `Bearer ${token}` },
        data: { resourceId: id },
      });
      const message = await response.data;
      setLoading(true)
      if(message.message === 'resource deleted'){
        setDeleteToast(true);
        const filteredResources = resourses.filter((resource) => {
          return resource._id !== id;
        })
        setResources(filteredResources);
      }
      else{
        setDeleteError(true);
      }
    }
    catch(err){
      setDeleteError(true);
      setLoading(true);
    }
  }

  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
  };

  const handleDeleteToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setDeleteToast(false);
  };

  const handleDeleteError = (event, reason) => {
    if(reason === "clickaway") {
      return;
    }
    setDeleteError(false);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Resource List </h1>
      {loading ? (
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
                    <a href={resource.url} target="_blank">
                      <button
                        href={resource.url}
                        className={style["button-url"]}
                      >
                        URL
                      </button>
                    </a>
                    <button className={style["button-delete"]} onClick={() => onClickDelete(resource._id)}>Delete</button>
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <div className={style["dot-loader"]}></div>
      )}
      <SimpleToast
        open={openError}
        message="Unable to load the data!"
        handleCloseToast={handleCloseToast}
        severity="error"
      />
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
