import React, { useEffect, useState } from "react";
import style from "./qanda.module.scss";
import { getAllQuestions } from "../../../../../service/Faq";
import { SimpleToast } from "../../../../../components/util/Toast/Toast";
import Loader from "../../../../../components/util/Loader";
import { hideToast } from "../../../../../service/toastService";

export function QandA({ setTab, setQId, tab }) {
  const [cards, setCards] = useState([]);
  const [isLoaded,setIsLoaded] = useState(false)
  const [toast, setToast] = useState({
    toastStatus: false,
    toastType: "",
    toastMessage: "",
  });

  const getdata = async () => {
    setIsLoaded(true);
    const data = await getAllQuestions(setToast, toast);
    setCards(data);
    setIsLoaded(false);
  };

  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    hideToast(setToast);
  };

  useEffect(() => {
    getdata();
  }, [tab]);

  return (
    <div>
      <h1 className={style["head"]}>Manage Q&A</h1>
      <div className={style["data-loader"]}>{isLoaded ? <Loader /> : null}</div>
      <div className={style["manage-qas"]}>
        {cards?.map((d, index) => (
          <div className={style["crd"]} key={index}>
            <h2 className="head1"> {d.title} </h2>
            <div className={style["content"]}>
              <h3 style={{ fontWeight: "bolder" }}>{d.description}</h3>
            </div>
            <div className={style["content"]}>
              <h5>Status</h5> {`${d.isApproved ? "Approved" : "Not Approved"}`}
            </div>
            <div style={{ display: "flex" }}>
              {d.tags.map((tag) => (
                <p className={style["tags"]}>{tag}</p>
              ))}
            </div>
            <button
              id={`${d._id}`}
              onClick={(e) => {
                setQId(e.currentTarget.id);
                setTab(19);
              }}
              className={style["manage"]}
            >
              Answer
            </button>
          </div>
        ))}
      </div>
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
