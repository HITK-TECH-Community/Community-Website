import React from "react";
import { Button2, Button1 } from "../../components/util/Button";
import style from "../Resources/components/ResourceSharingForm/resource-sharing-form.module.scss";
import "./Ques.scss";
import { useState } from "react";
import Joi from "joi-browser";

function Ques(props) {
  let dark = props.theme;

  const Tags = [
    {
      value: "ml",
    },
    {
      value: "open-source",
    },
    {
      value: "deap-learning",
    },
    {
      value: "cp",
    },
    {
      value: "block-chain",
    },
    {
      value: "mern",
    },
    {
      value: "android",
    },
    {
      value: "mean",
    },
    {
      value: "javascript",
    },
    {
      value: "java",
    },
    {
      value: "c++",
    },
    {
      value: "python",
    },
  ];

  const [isButtonPressed, setButtonPressed] = useState(false);
  const [checkedState, setCheckedState] = useState(
    new Array(Tags.length).fill(false)
  );

  const [formdata, setFormData] = useState({
    title: "",
    body: "",
    tags: [],
  });

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    formdata.tags.length = 0;
    formdata.tags.push(checkedState);
  };

  const schema = {
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.required(),
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
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    Object.keys(formdata).map((key) => {
      if (formdata[key] === "" || formdata[key] === null) {
        errors[key] = `${key} is not allowed to be empty`;
      }
      return 0;
    });
    if (errors["info"]) {
      delete errors["info"];
    }
    if (Object.keys(errors).length !== 0) {
      setFormErrors(errors);
    }
    if (Object.keys(errors).length !== 0) {
      console.log(errors);
    } else {
      //Call the Server
      console.log("Submitted");
    }
  };
  function ActiveButton() {
    setButtonPressed(!isButtonPressed);
  }
  function DeactiveButton() {
    setButtonPressed(!isButtonPressed);
  }
  return (
    <div className="popup-creator">
      {isButtonPressed ? (
        <div
          className={
            dark
              ? `${style["resource-section"]} ${style["resource-section-dark"]}`
              : `${style["resource-section"]} ${style["resource-section-light"]}`
          }
        >
          <form className="question_form" onSubmit={handleSubmit}>
            <button className="close-popup" onClick={DeactiveButton}>
              X
            </button>
            <h3
              className={
                dark
                  ? `${style["resource-header-text"]} ${style["resource-header-text-dark"]} `
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
                        ? `${style["resource-input"]} ${style["resource-input-dark"]} `
                        : `${style["resource-input"]} ${style["resource-input-light"]}`
                    }
                  >
                    <input
                      autoFocus="on"
                      placeholder="Subject"
                      type="text"
                      name="title"
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
                        ? `${style["resource-input"]} ${style["resource-input-dark"]} `
                        : `${style["resource-input"]} ${style["resource-input-light"]}`
                    }
                  >
                    <input
                      placeholder="Body"
                      style={{ height: 100 }}
                      type="text"
                      name="body"
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
                    ? `${style["resource-input1"]} ${style["resource-input1-dark"]} `
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
                    style={{ color: "#69a9dd", fontSize: "25px" }}
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
                style={{ justifyContent: "space-around" }}
              >
                <Button2
                  style={{ marginRight: "3%" }}
                  className={style["submit-btn-text"]}
                  label="Submit"
                  type="submit"
                />
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
                  ? `${style["resource-card"]} ${style["resource-card-dark"]} `
                  : `${style["resource-card"]} ${style["resource-card-light"]}`
              }
            >
              <h3
                className={
                  dark
                    ? `${style["resource-header-text"]} ${style["resource-header-text-dark"]} `
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
                      onClick={ActiveButton}
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
