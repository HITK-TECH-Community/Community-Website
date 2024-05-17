import React, { useEffect, useState } from "react";
import style from "./qanda.module.scss";
import { END_POINT } from "../../../../../config/api";
import Loader from "../../../../../components/util/Loader";
import { SimpleToast } from "../../../../../components/util/Toast/Toast";

export function QandA() {
  const [cards, setCards] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [toogle, setToogle] = useState(false);
  const [toast, setToast] = useState({
    toastStatus: false,
    toastType: "",
    toastMessage: "",
  });

  const getdata = async () => {
    setIsLoaded(true);
    try {
      const url = `${END_POINT}/question/getallquestions`;
      const response = await fetch(url);
      const res = await response?.json();
      setQuestions(res);
    } catch (error) {
      console.log(error);
      toast({
        ...toast,
        toastMessage: "Check network failed to fetch",
        toastStatus: true,
        toastType: "error",
      });
    }
  };

  useEffect(() => {
    getdata();
  }, [toogle]);

  useEffect(() => {
    const getData = async () => {
      try {
        let answer = [];
        for (let index = 0; index < questions.length; index++) {
          const element = questions[index];
          const res = await getAnswer(element);
          if(res!=undefined){
            res?.map((item) => answer.push(item));
          }
        }
        setIsLoaded(false);
        if(answer.length){
          setCards([...questions, ...answer]);
        }else{
          setCards(questions);
        }
        
      } catch (error) {
        console.log(error);
        setIsLoaded(false)
      }
    };

    if (questions?.length) {
      getData();
    }
  }, [questions]);
  const updateQA = async (id, status) => {
    try {
      const aUrl = `${END_POINT}/answers/updateStatus`;
      const aResponse = await fetch(aUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ id: id, status: status }),
      });
      const aRes = await aResponse.json();
      setToogle(!toogle);
      setToast({
        ...toast,
        toastMessage: "Successfully Updated!",
        toastStatus: true,
        toastType: "success",
      });
    } catch (error) {
      try {
        const aUrl = `${END_POINT}/question/updateStatus`;
        const aResponse = await fetch(aUrl, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ id: id, status: status }),
        });
        const aRes = await aResponse.json();
        setToogle(!toogle);
        setToast({
          ...toast,
          toastMessage: "Successfully Updated!",
          toastStatus: true,
          toastType: "success",
        });
      } catch (error) {
        setToast({
          ...toast,
          toastMessage: "Failed to Update!",
          toastStatus: true,
          toastType: "error",
        });
      }
    }
  };

  const getAnswer = async (data) => {
    try {
      const url = `${END_POINT}/answers/${data._id}`;
      const res = await fetch(url);
      const _res = await res.json();
      return _res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToast({ ...toast, toastStatus: false });
  };

  return (
    <div>
      <h1 className={style["head"]}>Manage Q&A</h1>
      <div className={style["data-loader"]}>{isLoaded ? <Loader /> : null}</div>
      <div className={style["manage-qas"]}>
        {cards?.map((d, index) => (
          <div className={style["crd"]} key={index}>
            <h2 className="head1"> {d?.title} </h2>
            <div className={style["content"]}>
              <h3 style={{ fontWeight: "bolder" }}>
                {d?.description || d?.answer}
              </h3>
            </div>
            <div className={style["content"]}>
              <h5>Status</h5> {`${d.isApproved ? "Approved" : "Not Approved"}`}
            </div>
            <div style={{ display: "flex" }}>
              {d?.tags?.map((tag) => (
                <p className={style["tags"]}>{tag}</p>
              ))}
            </div>
            <div className={style["button-group"]}>
              <button
                className={
                  d?.isApproved
                    ? style["button-delete"]
                    : style["button-approve"]
                }
                id={`${d?._id}`}
                onClick={(e) => {
                  updateQA(e.currentTarget.id, !d?.isApproved);
                }}
              >
                {d?.isApproved ? "DisApprove" : "Approve"}
              </button>
              <button className={style["button-delete"]}>Delete</button>
            </div>
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
