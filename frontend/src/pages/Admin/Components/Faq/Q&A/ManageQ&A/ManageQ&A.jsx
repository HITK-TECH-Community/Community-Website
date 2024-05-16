import { useEffect, useState } from "react";
import { END_POINT } from "../../../../../../config/api";
import style from "./manage.module.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";

export function Manageqa({ setTab, qId }) {
  const [ans, setAns] = useState([]);
  const [qns, setQns] = useState();
  const [toogle, setToogle] = useState(false);
  const getQuestion = async (id) => {
    try {
      const qUrl = `${END_POINT}/question/getQuestionById/${id}`;
      const qResponse = await fetch(qUrl);
      const qRes = await qResponse.json();
      setQns(qRes);
    } catch (error) {
      console.log(error);
    }
  };
  const updateQuestion = async (id, status) => {
    try {
      const qUrl = `${END_POINT}/question/updateStatus`;
      const qResponse = await fetch(qUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ id: id, status: status }),
      });
      const qRes = await qResponse.json();
      setToogle(!toogle);
    } catch (error) {
      console.log(error);
    }
  };
  const getAnswer = async (questionId) => {
    try {
      const aUrl = `${END_POINT}/answers/${questionId}`;
      const aResponse = await fetch(aUrl);
      const aRes = await aResponse.json();
      setAns(aRes.data);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch!");
    }
  };
  const updateAnswer = async (id, status) => {
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
    } catch (error) {
      console.log(error);
      alert("Failed to fetch!");
    }
  };
  useEffect(() => {
    getQuestion(qId);
    getAnswer(qId);
  }, [toogle]);
  return (
    <div>
      <div className={style["back"]}>
        <AiOutlineArrowLeft size={"35px"} onClick={() => setTab(18)} />
      </div>
      <div className={style["card-item"]}>
        <div className={style["card-info"]}>
          <h1>{qns?.title}</h1>
          <div className={style["questionBox"]}>
            <h3 className={style["card-question"]}>{qns?.description}</h3>
            <div className={style["button-group"]}>
              <button
                className={
                  qns?.isApproved
                    ? style["button-delete"]
                    : style["button-approve"]
                }
                id={`${qns?._id}`}
                onClick={(e) => {
                  updateQuestion(e.currentTarget.id, !qns?.isApproved);
                  
                }}
              >
                {qns?.isApproved ? "DisApprove" : "Approve"}
              </button>
              <button className={style["button-delete"]}>Delete</button>
            </div>
          </div>

          {ans?.map((a) => (
            <div className={style["answerBox"]}>
              <h3 className={style["card-answer"]}>{a.answer}</h3>
              <div className={style["button-group"]}>
                <button
                  className={
                    a?.isApproved
                      ? style["button-delete"]
                      : style["button-approve"]
                  }
                  id={`${a._id}`}
                  onClick={(e) => {
                    updateAnswer(e.currentTarget.id, !a?.isApproved);
                    
                  }}
                >
                  {a?.isApproved ? "DisApprove" : "Approve"}
                </button>
                <button className={style["button-delete"]}>Delete</button>
              </div>
            </div>
          ))}

          <div style={{ display: "flex", padding: "10px 30px 10px 30px" }}>
            {qns?.tags?.map((tag) => (
              <p className={style["tags"]}>{tag}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
