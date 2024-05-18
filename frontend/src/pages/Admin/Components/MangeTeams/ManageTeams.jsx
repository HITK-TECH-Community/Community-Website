import React, { useEffect, useState } from "react";
import style from "./manage-teams.module.scss";
import { END_POINT } from "../../../../config/api";
import { SimpleToast } from "../../../../components/util/Toast/Toast";
import Loader from "../../../../components/util/Loader";

export function ManageTeams() {
  const [cards, setCards] = useState([]);
  const [depend, setDepend] = useState(false);
  const [image, setImage] = useState([]);
  const [toast, setToast] = useState({
    toastStatus: false,
    toastType: "",
    toastMessage: "",
  });
  const [isLoaded, setIsLoaded] = useState(false);

  const getdata = async () => {
    setIsLoaded(true);
    try {
      const url = `${END_POINT}/teamMember/getTeamMembers/`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const res = await response.json();
      let _image = [];
      await res?.map((item) => {
        let formattedPath = item.image?.replace(/\\/g, "/");
        if (formattedPath?.startsWith("uploads/")) {
          formattedPath = formattedPath.replace("uploads/", "");
          if (formattedPath) {
            formattedPath = `${END_POINT}/${formattedPath}`;
          }
        }
        _image.push({ image: formattedPath, id: item._id });
      });
      setImage(_image);
      setCards(res);
      setToast({
        ...toast,
        toastMessage: "Successfully get Teams",
        toastStatus: true,
        toastType: "success",
      });
    } catch (error) {
      console.log(error);
      setToast({
        ...toast,
        toastMessage: "Sorry! Unable to get Teams",
        toastStatus: true,
        toastType: "error",
      });
    }
    setIsLoaded(false);
  };

  const handleDelete = async (id) => {
    setIsLoaded(true);
    try {
      const url = `${END_POINT}/teamMember/deleteTeamMember`;
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ memberId: id }),
      });

      const data = await response.json();
      setToast({
        ...toast,
        toastMessage: "Successfully deleted team",
        toastStatus: true,
        toastType: "success",
      });
      setDepend(!depend);
    } catch (error) {
      console.log(error);
      setToast({
        ...toast,
        toastMessage: "Sorry! Unable to delete Team",
        toastStatus: true,
        toastType: "error",
      });
    }
  };

  useEffect(() => {
    getdata();
  }, [depend]);

  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToast({ ...toast, toastStatus: false });
  };

  return (
    <div>
      <h1 className={style["head"]}>Teams</h1>
      {isLoaded ?<div className={style["data-loader"]}><Loader /></div>: <div className={style["manage-teams"]}>
        {cards.map((d, index) => (
          <div className={style["crd"]} key={d.full_name}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={
                  (image[index].id == d._id && image[index].image) ||
                  "./images/defaultUser.png"
                }
                style={{
                  margin: "auto",
                  borderRadius: "50%",
                  width: "200px",
                  height: "200px",
                  marginTop: "25px",
                }}
                alt=""
              />
            </div>
            <h2 className="head1"> {d.full_name} </h2>
            <div className={style["content"]}>
              <h3 style={{ fontWeight: "bolder" }}>About</h3> {d.description}
            </div>
            <div className={style["content"]}>
              {d.linkedin_url && (
                <a
                  href={d.linkedin_url}
                  className={style["url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              )}
            </div>
            <div className={style["content"]}>
              {d.github_url && (
                <a
                  href={d.github_url}
                  className={style["url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
            <div className={style["content"]}>
              {d.twitter_url && (
                <a
                  href={d.twitter_url}
                  className={style["url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              )}
            </div>
            <div className={style["content"]}>
              <h3 style={{ fontWeight: "bold" }}>Team</h3>
              {d.teams?.join(", ")}
            </div>
            <button
              name={`${d._id}`}
              onClick={(e) => handleDelete(e.currentTarget.name)}
              className={style["delete"]}
            >
              Delete
            </button>
          </div>
        ))}
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
