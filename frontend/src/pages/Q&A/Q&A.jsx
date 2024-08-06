import React, { useEffect, useState } from "react";
import { Button2 } from "../../components/util/Button";
import style from "../Resources/components/ResourceSharingForm/resource-sharing-form.module.scss";
import "./Ques.scss";
import Joi from "joi-browser";
import Loader from "../../components/util/Loader/index";
import { SimpleToast } from "../../components/util/Toast";
import {
  getAllQuestion,
  uploadData,
  upvote,
  downvote,
} from "../../service/Faq";
import { showToast, hideToast } from "../../service/toastService";
import { AnswerModel } from './AnswerModel/index'

function Ques(props) {
  let dark = props.theme;

  const Tags = [
    { value: "ml" },
    { value: "open-source" },
    { value: "deap-learning" },
    { value: "cp" },
    { value: "block-chain" },
    { value: "mern" },
    { value: "android" },
    { value: "mean" },
    { value: "javascript" },
    { value: "java" },
    { value: "c++" },
    { value: "python" },
  ];

  const [isUploadingData, setIsUploadingData] = useState(false);
  const [isButtonPressed, setButtonPressed] = useState(false);
  const [checkedState, setCheckedState] = useState(
    new Array(Tags.length).fill(false)
  );
  const [open, setOpen] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState({})
  const [toast, setToast] = useState({
    toastStatus: false,
    toastType: "",
    toastMessage: "",
  });
  const [loading, setLoading] = useState(true);

  const [formdata, setFormData] = useState({
    title: "",
    description: "",
    tags: [],
    created_by:""
  });

  const handleCloseToast = () => {
    hideToast(setToast);
  };

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const selectedTags = updatedCheckedState
      .map((currentState, index) => {
        if (currentState === true) {
          return Tags[index].value;
        }
        return null;
      })
      .filter((item) => item !== null);

    setFormData({ ...formdata, tags: selectedTags });
  };

  const schema = {
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.required(),
    created_by:Joi.string().required()
  };

  const validate = () => {
    const result = Joi.validate(formdata, schema, { abortEarly: false });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  const [formerrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { currentTarget: input } = e;

    const data = { ...formdata };
    data[input.name] = input.value;
    setFormData({ ...data, [input.name]: input.value });
    setFormErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const errors = validate();
    Object.keys(formdata).map((key) => {
      if (formdata[key] === "" || formdata[key] === null) {
        errors[key] = `${key} is not allowed to be empty`;
        setFormErrors(errors);
        isValid = false;
      }
      return 0;
    });
    if (isValid && formdata.tags.length !== 0) {
      setIsUploadingData(true);
      uploadData(formdata, setToast)
        .then(() => {
          setIsUploadingData(false);
          setFormData({
            title: "",
            description: "",
            tags: [],
          });
          setFormErrors({});
          setCheckedState(new Array(Tags.length).fill(false));
          setButtonPressed(false);
        })
        .catch(() => {
          setIsUploadingData(false);
        });
    }
  };

  const filterApprovedQuestions = (questions) => {
    return questions.filter((question) => question.isApproved == true)
  }

  const [getQuestions, setQuestions] = useState([]);
  const fetchQuestions = () => {
    getAllQuestion(setToast).then((data) => {
      setLoading(true);
      setQuestions(filterApprovedQuestions(data));
    });
  };

  const handleUpvote = async (questionId) => {
    await upvote(questionId, setToast);
    fetchQuestions();
  };

  const handleDownvote = async (questionId) => {
    await downvote(questionId, setToast);
    fetchQuestions();
  };

  useEffect(() => {
    setLoading(false)
    fetchQuestions();
  }, []);

  return (
    <div
      className="popup-creator"
      style={{ background: dark ? "#171717" : "white" }}
    >
      <AnswerModel theme={dark} open={open} data={currentQuestion} handleClose={setOpen} />
    {
      !loading ?
        <Loader /> :
        getQuestions.length == 0 ?
          <div>
            <h1 className="py-5 text-center">No Questions Found !</h1>
          </div>
          :
          <div className="question-cards">
            {getQuestions?.map((item, key) => (
              <div className="question-card" key={key}>
                <div className="card-up">
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                  <div className="tags-container">
                    {item.tags.map((tag, index) => (
                      <span className="tag-space" key={index}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div>
                    <p className="question-author">- {item?.created_by||"Anonymous"}</p>
                  </div>
                </div>
                <div className="card-down">
                  <div>
                    <p>Created At {new Date(item.createdAt).toLocaleString()}</p>
                  </div>
                  <div>
                    <button
                      className="vote-btn"
                      onClick={() => handleUpvote(item._id)}
                    >
                      👍{item.upvotes}
                    </button>
                    <button
                      className="vote-btn"
                      onClick={() => handleDownvote(item._id)}
                    >
                      👎 {item?.downvotes}
                    </button>
                  </div>
                </div>
                <button className="answer-btn" onClick={() => {
                  setCurrentQuestion(item)
                  setOpen(true)
                }}>Answers</button>
              </div>
            )
            )}
        </div>
      }
      {toast.toastStatus && (
        <SimpleToast
          open={toast.toastStatus}
          message={toast.toastMessage}
          handleCloseToast={handleCloseToast}
          severity={toast.toastType}
        />
      )}
      {isButtonPressed ? (
        <div
          className={
            dark
              ? `${style["resource-section"]} ${style["resource-section-dark"]}`
              : `${style["resource-section"]} ${style["resource-section-light"]}`
          }
        >
          <form className="question_form" onSubmit={handleSubmit}>
            <button
              className="close-popup"
              onClick={() => setButtonPressed(false)}
            >
              X
            </button>
            <h3
              className={
                dark
                  ? `${style["resource-header-text"]} ${style["resource-header-text-dark"]}`
                  : `${style["resource-header-text"]} ${style["resource-header-text-light"]}`
              }
            >
              Ask your questions
            </h3>
            <div className={style["inside-resource"]}>
              <div className="question-inputs">
              <div className={`form-group ${style["form-group"]}`}>
                  <div
                    className={
                      dark
                        ? `${style["resource-input"]} ${style["resource-input-dark"]}`
                        : `${style["resource-input"]} ${style["resource-input-light"]}`
                    }
                  >
                    <input
                      autoFocus="on"
                      placeholder="Your Name"
                      type="text"
                      name="created_by"
                      value={formdata.created_by}
                      onChange={handleChange}
                    />
                    <i className="fas fa-heading"></i>
                    <div
                      className={`${style["validation"]} validation d-sm-none d-md-block`}
                    >
                      {formerrors["title"] ? (
                        <div>* {formerrors["title"]}</div>
                      ) : (
                        <div>&nbsp; &nbsp;</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className={`form-group ${style["form-group"]}`}>
                  <div
                    className={
                      dark
                        ? `${style["resource-input"]} ${style["resource-input-dark"]}`
                        : `${style["resource-input"]} ${style["resource-input-light"]}`
                    }
                  >
                    <input
                      autoFocus="on"
                      placeholder="Subject"
                      type="text"
                      name="title"
                      value={formdata.title}
                      onChange={handleChange}
                    />
                    <i className="fas fa-heading"></i>
                    <div
                      className={`${style["validation"]} validation d-sm-none d-md-block`}
                    >
                      {formerrors["title"] ? (
                        <div>* {formerrors["title"]}</div>
                      ) : (
                        <div>&nbsp; &nbsp;</div>
                      )}
                    </div>
                  </div>
                </div>

                <div className={`form-group ${style["form-group"]}`}>
                  <div
                    className={
                      dark
                        ? `${style["resource-input"]} ${style["resource-input-dark"]}`
                        : `${style["resource-input"]} ${style["resource-input-light"]}`
                    }
                  >
                    <input
                      placeholder="Body"
                      style={{ height: 100 }}
                      type="text"
                      name="description"
                      value={formdata.description}
                      onChange={handleChange}
                    />
                    <i
                      className="fas fa-envelope"
                      style={{ marginTop: 27 }}
                    ></i>
                    <div
                      className={`${style["validation"]} validation d-sm-none d-md-block`}
                    >
                      {formerrors["body"] ? (
                        <div>* {formerrors["body"]}</div>
                      ) : (
                        <div>&nbsp; &nbsp;</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={
                  dark
                    ? `${style["resource-input1"]} ${style["resource-input1-dark"]}`
                    : `${style["resource-input1"]} ${style["resource-input1-light"]}`
                }
              >
                <div>
                  <label
                    className={
                      dark
                        ? `mb-3 ${style["level-of-trust"]} ${style["level-of-trust-dark"]}`
                        : `mb-3 ${style["level-of-trust"]} ${style["level-of-trust-dark"]}`
                    }
                    style={{
                      color: "#69a9dd",
                      fontSize: "25px",
                      textAlign: "center",
                    }}
                  >
                    Tags
                  </label>
                </div>
                <div>
                  <ul className="toppings-list">
                    {Tags.map((data, index) => {
                      return (
                        <li key={index}>
                          <div className="checkbox-item">
                            <div className="left-section">
                              <input
                                type="checkbox"
                                id={`custom-checkbox-${index}`}
                                name="Tags"
                                value={data.value}
                                checked={checkedState[index]}
                                onChange={() => handleOnChange(index)}
                              />
                              <label
                                htmlFor={`custom-checkbox-${index}`}
                                style={{
                                  paddingLeft: "3%",
                                  color: dark ? "white" : "black",
                                }}
                              >
                                {data.value}
                              </label>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div
                className={style["submit-btn"]}
                style={{ justifyContent: "space-around", marginBottom: "1rem" }}
              >
                <div className="data-loader">
                  {isUploadingData ? (
                    <Loader />
                  ) : (
                    <Button2
                      style={{ marginRight: "3%" }}
                      className={style["submit-btn-text"]}
                      label="Submit"
                      type="submit"
                    />
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div
          className={
            dark
              ? `${style["resource-section"]} ${style["resource-section-dark"]}`
              : `${style["resource-section"]} ${style["resource-section-light"]}`
          }
        >
          <div
            className={
              dark
                ? `${style["resource-form"]} ${style["resource-form-dark"]} ${style["child2"]}`
                : `${style["resource-form"]} ${style["resource-form-light"]} ${style["child2"]}`
            }
            style={{ marginTop: "12%" }}
          >
            <div
              className={
                dark
                  ? `${style["resource-card"]} ${style["resource-card-dark"]}`
                  : `${style["resource-card"]} ${style["resource-card-light"]}`
              }
            >
              <h3
                className={
                  dark
                    ? `${style["resource-header-text"]} ${style["resource-header-text-dark"]}`
                    : `${style["resource-header-text"]} ${style["resource-header-text-light"]}`
                }
              >
                Ask your questions
              </h3>
              {isButtonPressed ? null : (
                <div className={style["Ask-div-main"]}>
                  <div className={style["Ask-div"]}>
                    <Button2
                      className={style["Ask-div-button"]}
                      label="Ask Question"
                      style={{ width: 200 }}
                      onClick={() => setButtonPressed(true)}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ques;
