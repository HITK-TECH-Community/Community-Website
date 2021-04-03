import React, { useState } from "react";
import Joi from "joi-browser";
import styles from "./add-team-member.module.scss";
import MultiSelect from "react-multi-select-component";

import { Button2 } from "../../../../components/util/Button/index";
import { Grid } from "@material-ui/core";
import { SimpleToast } from "./../../../../components/util/Toast/Toast";

export function AddTeamMember() {
  const options = [
    { label: "Open Source", value: "open-source" },
    { label: "Broadcast", value: "broadcast" },
    { label: "Design", value: "design" },
    { label: "Social", value: "social" },
    { label: "Resource Sharing", value: "resource-sharing" },
  ];

  const [formdata, setFormData] = useState({
    fullName: "",
    description: "",
    linkedin: "",
    twitter: "",
    github: "",
  });

  const [formerrors, setFormErrors] = useState({});
  const [teamError, setTeamError] = useState();
  const [teams, setTeams] = useState([]);
  const [picUrl, setPicUrl] = useState("./images/admin.png");
  const [pic, setPic] = useState();
  const [openSuccess, setOpenSuccessToast] = React.useState(false);

  const schema = {
    fullName: Joi.string().required(),
    description: Joi.string().required(),
    linkedin: Joi.string().uri(),
    twitter: Joi.string().uri(),
    github: Joi.string().uri(),
  };

  const validate = () => {
    const result = Joi.validate(formdata, schema, { abortEarly: false });
    if (!result.error) return {};
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
    let result = Joi.validate(obj, obj_schema);
    if (name === "linkedin" || name === "twitter" || name === "github") {
      if (value === "") {
        result = {};
      }
    }
    return result.error ? result.error.details[0].message : null;
  };

  const onPicChange = (event) => {
    const { target } = event;
    const { files } = target;

    if (files && files[0]) {
      setPic(files[0]);
      let reader = new FileReader();
      reader.onload = function (e) {
        setPicUrl(e.target.result);
      };
      reader.readAsDataURL(files[0]);
    }
    return;
  };

  const changePic = () => {
    return document.getElementById("profile-pic-input")?.click();
  };

  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccessToast(false);
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

  console.log("formerrors: ", formerrors);

  const onSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (formdata["linkedin"] === "") {
      if (errors["linkedin"]) {
        delete errors["linkedin"];
      }
    }
    if (formdata["twitter"] === "") {
      if (errors["twitter"]) {
        delete errors["twitter"];
      }
    }
    if (formdata["github"] === "") {
      if (errors["github"]) {
        delete errors["github"];
      }
    }
    if (teams.length === 0) {
      setTeamError("* Teams cannot be empty");
    } else {
      setTeamError("");
    }
    setFormErrors(errors);
    if (Object.keys(errors).length !== 0 || teams.length === 0) {
      console.log(errors);
    } else {
      //Call the Server
      console.log("Submitted");
      const temp = {
        fullName: "",
        description: "",
        linkedin: "",
        twitter: "",
        github: "",
      };
      setFormData(temp);
      setTeams([]);
      setOpenSuccessToast(true);
    }
    return pic;
  };
  return (
    <div className={styles["add-team-member-section"]}>
      <div className={styles["add-team-member-parent"]}>
        <div
          className={styles["add-team-member-child"] + " " + styles["child1"]}
        >
          <div className={styles["add-team-member-card"]}>
            <h1 className={styles["add-team-member-header-text"]}>
              Add Team Member
            </h1>
            <form
              className={styles["inside-add-team-member"]}
              onSubmit={onSubmit}
            >
              <Grid container>
                <Grid xs={12} sm={2} md={3} />
                <Grid xs={12} sm={8} md={6}>
                  <div className={styles["upload-section"]} onClick={changePic}>
                    <img
                      src={picUrl}
                      className={styles["img-admin"]}
                      alt="admin_img"
                    />
                    <h1
                      className={styles["h1"]}
                      style={{ color: "white", fontSize: "15px" }}
                    >
                      Click to Change
                    </h1>
                    <input
                      id="profile-pic-input"
                      type="file"
                      accept="image/*"
                      capture="camera"
                      onChange={onPicChange}
                      style={{ display: "none" }}
                    />
                  </div>
                </Grid>
              </Grid>
              <div className={styles["add-team-member-input"]}>
                <input
                  id="txt_name"
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formdata["fullName"]}
                  onChange={handleChange}
                />
                <i className="fas fa-signature"></i>
                <div
                  className={`${styles["validation"]} validation d-sm-none d-md-block`}
                >
                  {formerrors["fullName"] && (
                    <div>* {formerrors["fullName"]}</div>
                  )}
                </div>
              </div>
              <div className={styles["add-team-member-input"]}>
                <input
                  id="txt_description"
                  type="text"
                  name="description"
                  placeholder="Short Description"
                  value={formdata["description"]}
                  onChange={handleChange}
                />
                <i className="fas fa-prescription"></i>
                <div
                  className={`${styles["validation"]} validation d-sm-none d-md-block`}
                >
                  {formerrors["description"] && (
                    <div>* {formerrors["description"]}</div>
                  )}
                </div>
              </div>
              <div className={styles["add-team-member-input"]}>
                <input
                  id="txt_linkedin"
                  name="linkedin"
                  placeholder="LinkedIn URL"
                  value={formdata["linkedin"]}
                  onChange={handleChange}
                />
                <i className="fab fa-linkedin-in"></i>
                <div
                  className={`${styles["validation"]} validation d-sm-none d-md-block`}
                >
                  {formerrors["linkedin"] && (
                    <div>* {formerrors["linkedin"]}</div>
                  )}
                </div>
              </div>
              <div className={styles["add-team-member-input"]}>
                <input
                  id="txt_github"
                  name="github"
                  placeholder="Github URL"
                  value={formdata["github"]}
                  onChange={handleChange}
                />
                <i className="fab fa-github"></i>
                <div
                  className={`${styles["validation"]} validation d-sm-none d-md-block`}
                >
                  {formerrors["github"] && <div>* {formerrors["github"]}</div>}
                </div>
              </div>
              <div className={styles["add-team-member-input"]}>
                <input
                  id="txt_twitter"
                  name="twitter"
                  placeholder="Twitter URL"
                  value={formdata["twitter"]}
                  onChange={handleChange}
                />
                <i className="fab fa-twitter"></i>
                <div
                  className={`${styles["validation"]} validation d-sm-none d-md-block`}
                >
                  {formerrors["twitter"] && (
                    <div>* {formerrors["twitter"]}</div>
                  )}
                </div>
              </div>
              <label className={styles["add-team-member-label-text"]}>
                Teams :
              </label>
              <MultiSelect
                options={options} // Options to display in the dropdown
                value={teams} // Preselected value to persist in dropdown
                onChange={setTeams} // Function will trigger on change event
                labelledBy={"Teams"} // Property name to display in the dropdown options
                className={styles["dropdown"]}
              />
              <div
                className={`${styles["validation"]} validation d-sm-none d-md-block`}
              >
                {teamError && <div>{teamError}</div>}
              </div>
              <br />
              <br />
              <div className={styles["submit-btn"]}>
                <Button2
                  className={styles["submit-btn-text"]}
                  label="Submit"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <SimpleToast
        open={openSuccess}
        message="New member added successfully"
        handleCloseToast={handleCloseToast}
        severity="success"
      />
    </div>
  );
}
