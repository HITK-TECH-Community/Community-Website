import React, { useState } from "react";
import Joi from "joi-browser";
import { Button2 } from "../../../../components/util/Button/index";
import style from "./resource-sharing-form.module.scss";

export function ResourceSharingForm() {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    link: "",
    description: "",
    trust: null,
    dob: "",
    info: "",
  });

  const [formerrors, setFormErrors] = useState({});

  const schema = {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    dob: Joi.date().required(),
    link: Joi.string().uri().required(),
    description: Joi.string(),
    trust: Joi.required(),
    info: Joi.string(),
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

  const validateProperty = (input) => {
    const { name, value } = input;
    const obj = { [name]: value };
    const obj_schema = { [name]: schema[name] };
    const result = Joi.validate(obj, obj_schema);
    return result.error ? result.error.details[0].message : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    Object.keys(formdata).map((key) => {
      if (formdata[key] === "" || formdata[key] === null) {
        errors[key] = `${key} is not allowed to be empty`;
      }
    });
    if (errors["info"]) {
      delete errors["info"];
    }
    if (Object.keys(errors).length != 0) {
      setFormErrors(errors);
    }
    if (Object.keys(errors).length != 0) {
      console.log(errors);
    } else {
      //Call the Server
      console.log("Submitted");
    }
  };

  const handleChange = (e) => {
    const { currentTarget: input } = e;
    const errors = { ...formerrors };
    const errorMessage = validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...formdata };
    data[input.name] = input.value;
    setFormData({ ...data, [input.name]: input.value });
    setFormErrors(errors);
  };

  return (
    <div className={`${style["resource-form"]} ${style["child2"]}`}>
      <div className={style["resource-card"]}>
        <h3 className={style["resource-header-text"]}>Resource Sharing Form</h3>
        <form onSubmit={handleSubmit}>
          <div className={style["inside-resource"]}>
            <div className={`form-group ${style["form-group"]}`}>
              <div className={style["resource-input"]}>
                <input
                  placeholder="Name"
                  id="txt_name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                />
                <i className="fas fa-user"></i>
                <div
                  className={`${style["validation"]} validation d-sm-none d-md-block`}
                >
                  {formerrors["name"] && <div>* {formerrors["name"]}</div>}
                </div>
              </div>
            </div>

            <div className={`form-group ${style["form-group"]}`}>
              <div className={style["resource-input"]}>
                <input
                  placeholder="Email ID"
                  id="txt_email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
                <i className="fas fa-envelope"></i>
                <div
                  className={`${style["validation"]} validation d-sm-none d-md-block`}
                >
                  {formerrors["email"] && <div>* {formerrors["email"]}</div>}
                </div>
              </div>
            </div>

            <div className={`form-group ${style["form-group"]}`}>
              <div className={style["resource-input"]}>
                <input
                  placeholder="Resource URL"
                  id="txt_link"
                  type="url"
                  name="link"
                  onChange={handleChange}
                />
                <i className="fas fa-link"></i>
                <div
                  className={`${style["validation"]} validation d-sm-none d-md-block`}
                >
                  {formerrors["link"] && <div>* {formerrors["link"]}</div>}
                </div>
              </div>
            </div>

            <div className={style["resource-input"]}>
              <textarea
                placeholder="Resource Description"
                id={style["txt-desc"]}
                rows="6"
                cols="20"
                name="description"
                onChange={handleChange}
              ></textarea>
              <i className="fas fa-comment-dots"></i>
              <div
                className={`${style["validation"]} validation d-sm-none d-md-block`}
              >
                {formerrors["description"] && (
                  <div>* {formerrors["description"]}</div>
                )}
              </div>
            </div>
            <div className={style["resource-input1"]}>
              <div>
                <label className={`mb-3 ${style["level-of-trust"]}`}>
                  Level Of Trust
                </label>
              </div>
              <div className={style["radio-buttons"]}>
                <div className={style["radio-item"]}>
                  <input
                    type="radio"
                    id="ritema"
                    name="trust"
                    value={1}
                    onChange={handleChange}
                  />
                  <label className={`mx-3 ${style["label"]}`} htmlFor="ritema">
                    1
                  </label>
                </div>
                <div className={style["radio-item"]}>
                  <input
                    type="radio"
                    id="ritemb"
                    name="trust"
                    value={2}
                    onChange={handleChange}
                  />
                  <label className={`mx-3 ${style["label"]}`} htmlFor="ritemb">
                    2
                  </label>
                </div>
                <div className={style["radio-item"]}>
                  <input
                    type="radio"
                    id="ritemc"
                    name="trust"
                    value={3}
                    onChange={handleChange}
                  />
                  <label className={`mx-3 ${style["label"]}`} htmlFor="ritemc">
                    3
                  </label>
                </div>
                <div className={style["radio-item"]}>
                  <input
                    type="radio"
                    id="ritemd"
                    name="trust"
                    value={4}
                    onChange={handleChange}
                  />
                  <label className={`mx-3 ${style["label"]}`} htmlFor="ritemd">
                    4
                  </label>
                </div>
                <div className={style["radio-item"]}>
                  <input
                    type="radio"
                    id="riteme"
                    name="trust"
                    value={5}
                    onChange={handleChange}
                  />
                  <label className={`mx-3 ${style["label"]}`} htmlFor="riteme">
                    5
                  </label>
                </div>
                <div
                  className={`${style["validation"]} validation d-sm-none d-md-block`}
                >
                  {formerrors["trust"] && <div>* {formerrors["trust"]}</div>}
                </div>
              </div>
            </div>
            <div className={style["resource-input"]}>
              <div className={style["valid-until"]}>
                <input
                  name="dob"
                  className={style["textbox-n"]}
                  type="date"
                  id="date"
                  placeholder="Valid Until:&nbsp;"
                  onChange={handleChange}
                />
                <div
                  className={`${style["validation"]} validation d-sm-none d-md-block`}
                >
                  {formerrors["dob"] && <div>* {formerrors["dob"]}</div>}
                </div>
              </div>
            </div>
            <div className={style["resource-input"]}>
              <textarea
                placeholder="Additional Info (Optional)"
                id="txt_info"
                rows="6"
                cols="20"
                name="info"
                onChange={handleChange}
              ></textarea>
              <i className="fas fa-pencil-alt"></i>
            </div>
            <div className={style["submit-btn"]}>
              <Button2
                className={style["submit-btn-text"]}
                label="Submit"
                type="submit"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
