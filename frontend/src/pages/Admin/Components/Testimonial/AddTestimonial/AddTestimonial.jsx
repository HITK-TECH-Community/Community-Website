import React, { useState } from "react";
import Joi from "joi-browser";
import styles from "./add-testimonial.module.scss";
import { Button2 } from "../../../../../components/util/Button/index";
import { Grid } from "@material-ui/core";
import { SimpleToast } from "./../../../../../components/util/Toast/Toast";
import { addTestimonial } from "../../../../../service/Testimonial";

export function AddTestimonial() {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    company: "",
    image: "",
    text: "",
    rating: "",
  });
  const [toast, setToast] = useState({
    toastStatus: false,
    toastType: "",
    toastMessage: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [picUrl, setPicUrl] = useState("./images/testimonialImg.png");
  const [pic, setPic] = useState();
  const schema = {
    name: Joi.string().required().label("Name"),
    position: Joi.string().required().label("Position"),
    company: Joi.string().required().label("Company"),
    image: Joi.any().optional().label("Image"),
    text: Joi.string().required().label("Text"),
    rating: Joi.number().required().min(1).max(5).label("Rating"),
  };

  const validate = () => {
    const result = Joi.validate(formData, schema, { abortEarly: false });
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
    const result = Joi.validate(obj, obj_schema);
    return result.error ? result.error.details[0].message : null;
  };
  const onPicChange = (event) => {
    const { target } = event;
    const { files } = target;

    if (files && files[0]) {
      setPic(files[0]);
      setFormData({ ...formData, image: files[0] });
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
    setToast({ ...toast, toastStatus: false });
  };

  const handleChange = (e) => {
    const { currentTarget: input } = e;
    const errors = { ...formErrors };
    const errorMessage = validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...formData };
    data[input.name] = input.value;
    setFormData(data);
    setFormErrors(errors);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length !== 0) {
      console.log(errors);
    } else {
      // Call the server
      const form = new FormData();
      form.append("name", formData.name);
      form.append("position", formData.position);
      form.append("company", formData.company);
      form.append("text", formData.text);
      form.append("rating", formData.rating);
      form.append("image", formData.image);
      
      await addTestimonial(form, setToast, toast);

      const temp = {
        ...formData,
        name: "",
        position: "",
        company: "",
        text: "",
        rating: "",
      };
      setFormData(temp);
    }
    return pic;
  };

  return (
    <div className={styles["add-testimonial-section"]}>
      <div className={styles["add-testimonial-parent"]}>
        <div
          className={styles["add-testimonial-child"] + " " + styles["child1"]}
        >
          <div className={styles["add-testimonial-card"]}>
            <h1 className={styles["add-testimonial-header-text"]}>
              Add Testimonial
            </h1>
            <form
              className={styles["inside-add-testimonial"]}
              onSubmit={onSubmit}
              enctype="multipart/form-data"
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
              <div className={styles["add-testimonial-input"]}>
                <input
                  id="txt_name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData["name"]}
                  onChange={handleChange}
                />
                <i className="fas fa-signature"></i>
                <div
                  className={`${styles["validation"]} validation d-sm-none d-md-block`}
                >
                  {formErrors["name"] ? (
                    <div>* {formErrors["name"]}</div>
                  ) : (
                    <div>&nbsp; &nbsp;</div>
                  )}
                </div>
              </div>
              <div className={styles["add-testimonial-input"]}>
                <input
                  id="txt_position"
                  type="text"
                  name="position"
                  placeholder="Position"
                  value={formData["position"]}
                  onChange={handleChange}
                />
                <i className="fas fa-briefcase"></i>
                <div
                  className={`${styles["validation"]} validation d-sm-none d-md-block`}
                >
                  {formErrors["position"] ? (
                    <div>* {formErrors["position"]}</div>
                  ) : (
                    <div>&nbsp; &nbsp;</div>
                  )}
                </div>
              </div>
              <div className={styles["add-testimonial-input"]}>
                <input
                  id="txt_company"
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData["company"]}
                  onChange={handleChange}
                />
                <i className="fas fa-building"></i>
                <div
                  className={`${styles["validation"]} validation d-sm-none d-md-block`}
                >
                  {formErrors["company"] ? (
                    <div>* {formErrors["company"]}</div>
                  ) : (
                    <div>&nbsp; &nbsp;</div>
                  )}
                </div>
              </div>
              <div className={styles["add-testimonial-input"]}>
                <input
                  id="txt_text"
                  type="text"
                  name="text"
                  placeholder="Testimonial Text"
                  value={formData["text"]}
                  onChange={handleChange}
                />
                <i className="fas fa-comment"></i>
                <div
                  className={`${styles["validation"]} validation d-sm-none d-md-block`}
                >
                  {formErrors["text"] ? (
                    <div>* {formErrors["text"]}</div>
                  ) : (
                    <div>&nbsp; &nbsp;</div>
                  )}
                </div>
              </div>
              <div className={styles["add-testimonial-input"]}>
                <input
                  id="txt_rating"
                  type="number"
                  name="rating"
                  placeholder="Rating (1-5)"
                  value={formData["rating"]}
                  onChange={handleChange}
                />
                <i className="fas fa-star"></i>
                <div
                  className={`${styles["validation"]} validation d-sm-none d-md-block`}
                >
                  {formErrors["rating"] ? (
                    <div>* {formErrors["rating"]}</div>
                  ) : (
                    <div>&nbsp; &nbsp;</div>
                  )}
                </div>
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
