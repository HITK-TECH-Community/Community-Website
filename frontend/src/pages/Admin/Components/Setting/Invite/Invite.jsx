import React, { useState } from "react";
import { Button2 } from "../../../../../components/util/Button";
import style from "./Invite.module.scss";
import Joi from "joi-browser";

export function Invite() {
  const [formdata, setFormData] = useState({
    email: "",
  });

  const [formerrors, setFormErrors] = useState({});
  const schema = {
    email: Joi.string().email().required(),
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
    if (errors === null) {
      console.log("Submitted");
    } else {
      Object.keys(formdata).map((key) => {
        if (formdata[key] === "" || formdata[key] === null) {
          errors[key] = `${key} is not allowed to be empty`;
        }
        return 0;
      });
      if (Object.keys(errors).length !== 0) {
        setFormErrors(errors);
      }
      if (Object.keys(errors).length !== 0) {
        console.log(errors);
      } else {
        //Call the Server
        console.log("Submitted");
      }
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
    <div className={style["cont"]}>
      <div className="container">
        <div className={style["dash"]}></div>
      </div>
      <div className={style["admin_section"]}>
        <div className={style["admin_card"]}>
          <h1 className={style["h1"]}>Invite Admins</h1>
          <form onSubmit={handleSubmit}>
            <div className={style["inside_admin"]}>
              <div className={style["form_row"]}></div>
              <div className={style["admin_input"]}>
                <input
                  placeholder="Email ID"
                  id="txt_email"
                  name="email"
                  onChange={handleChange}
                />
                <i className="far fa-envelope"></i>
                <div
                  className={`${style["validation"]} validation d-sm-none d-md-block`}
                >
                  {formerrors["email"] && <div>* {formerrors["email"]}</div>}
                </div>
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
    </div>
  );
}
