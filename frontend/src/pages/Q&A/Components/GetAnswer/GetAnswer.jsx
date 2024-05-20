import React, { useEffect } from "react";
import { useState } from "react";
import "./GetAnswer.scss";
import "../../../Q&A/Ques.scss";
import { END_POINT } from "../../../../config/api";
import { useParams } from "react-router-dom";

function GetAnswer() {
  const { answerId } = useParams();
  // console.log(answerId);

  const [answer, setAnswer] = useState([]);

  //Get Answer
  const GetAnswer = (answerId) => {
    try {
      fetch(`${END_POINT}/answers/${answerId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setAnswer(data.data);
        });
    } catch (error) {
      console.error("Error fetching answer:", error);
    }
  };
  useEffect(() => {
    GetAnswer(answerId);
  }, []);

  console.log(answer);

  return (
    <>
      <div className="main">
        <div className="question">question</div>
        <div className="answers">
          {answer.length > 0 ? (
            answer.map((item, key) => (
              <div className="question-cards" key={key}>
                <div className="question-card">
                  <div className="card-up">
                    <p>{item.answer}</p>
                    <span className="tag-space">#</span>
                  </div>
                  <div className="card-down">
                    <div>
                      <p>
                        Created At {new Date(item.createdAt).toLocaleString()}
                      </p>
                      <p>Created By {item.created_by}</p>
                    </div>
                    <div>
                      <button className="vote-btn">👍</button>
                      <button className="vote-btn">👎</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1>No Answer</h1>
          )}
        </div>
      </div>
    </>
  );
}
export default GetAnswer;
