import React, { useRef, useState } from "react";
import Joi from "joi-browser";
import { Button2 } from "../../../../components/util/Button/index";
import { formatTag } from '../../../../components/util/Tags';
import style from "./resource-sharing-form.module.scss";
import Loader from "../../../../components/util/Loader";
import { SimpleToast } from "../../../../components/util/Toast";
import { postResource } from "../../../../service/Resources";

export function ResourceSharingForm(props) {
  const tagRef = useRef();
  const imageRef = useRef();
  const [tags, setTags] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({
    toastStatus: false,
    toastType: "",
    toastMessage: "",
  });

  let dark = props.theme;

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: [],
    expiresOn: "",
    imageUrl: [],
    link: "",
  });

  const [formerrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const schema = {
    title: Joi.string().trim().required().min(3).label("Title"),
    content: Joi.string().trim().required().min(8).label("Content"),
    tags: Joi.array().items(Joi.string()).min(1).required().label("Tags"),
    expiresOn: Joi.date().label("Expires On"),
    imageUrl: Joi.array().items(Joi.string()).min(1).required().label("Image Url"),
    link: Joi.string().uri().label("Link"),
  };

  const validate = () => {
    const result = Joi.validate(formData, schema, { abortEarly: false });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    Object.keys(formData).forEach((key) => {
      if (formData[key] === "" || formData[key] === null) {
        errors[key] = `${key} is not allowed to be empty`;
      }
    });
    if (errors && Object.keys(errors).length !== 0) {
      setFormErrors(errors);
      setSubmitted(false);
    } else {
      setIsLoading(true);
      await postResource(formData, setToast, toast);
      setFormData({
        title: "",
        content: "",
        tags: [],
        expiresOn: "",
        imageUrl: [],
        link: "",
      });
      setIsLoading(false);
      setSubmitted(true);
      console.log("Submitted");
    }
  };

  const handleChange = (e) => {
    const { currentTarget: input } = e;
    const errors = { ...formerrors };
    const errorMessage = validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...formData };
    data[input.name] = input.value;
    setFormData({ ...data, [input.name]: input.value });
    setFormErrors(errors);
  };

  const handleCloseResourceToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToast({ ...toast, toastStatus: false });
  };

  const addTag = (e) => {
    e.preventDefault();
    const tag = formatTag(tagRef.current.value.trim(), "Hyphens");
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
      setFormData({ ...formData, tags: [...tags, tag] });
      tagRef.current.value = "";
    }
  };

  const removeTag = (tagToRemove) => {
    const newTags = tags.filter(tag => tag !== tagToRemove);
    setTags(newTags);
    setFormData({ ...formData, tags: newTags });
  };

  const addImageUrl = (e) => {
    e.preventDefault();
    const url = imageRef.current.value;
    if (url.trim()) {
      setImageUrls(prevUrl => [...prevUrl, url.trim()]);
      setFormData({ ...formData, imageUrl: [...formData.imageUrl, url.trim()] });
      imageRef.current.value = "";
    }
  };

  const removeImageUrl = (url) => {
    setImageUrls(imageUrls.filter(u => u !== url));
    setFormData({ ...formData, imageUrl: formData.imageUrl.filter(u => u !== url) });
  };

  return (
    <div
      className={
        dark
          ? `${style["resource-form"]} ${style["resource-form-dark"]} ${style["child2"]}`
          : `${style["resource-form"]} ${style["resource-form-light"]} ${style["child2"]}`
      }
    >
      {submitted ? (
        isLoading ? (
          <React.Fragment>
            <div className={style["goodbye-card"]}>
              <Loader height="25vh" />
            </div>
          </React.Fragment>
        ) : toast.toastType === "error" ? (
          <React.Fragment>
            <div className={style["goodbye-card"]}>
              <h1 className={style["card-heading"]}>OOPS !</h1>
              <div className={style["inside-card"]}>
                <p style={{ textAlign: "center" }}>
                  Sorry for the inconvenience caused, our servers are currently
                  facing some issues. 🔧 <br />
                  Please try again later!
                </p>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className={style["goodbye-card"]}>
              <h1 className={style["card-heading"]}>Hello There !</h1>
              <div className={style["inside-card"]}>
                <p style={{ textAlign: "center" }}>
                  Congratulations !!! ✨ <br />
                  Your Resource has been successfully added. 😄
                </p>
              </div>
            </div>
          </React.Fragment>
        )
      ) : (
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
            Resource Sharing Form
          </h3>
          <form onSubmit={handleSubmit}>
            <div className={style["inside-resource"]}>
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
                    placeholder="Title"
                    id="txt_title"
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
                   <textarea
                    placeholder="Resource Description"
                    id="txt_content"
                    rows="6"
                    cols="20"
                    type="text"
                    name="content"
                    onChange={handleChange}
                  ></textarea>
                  <i className="fas fa-comment-dots"></i>
                  <div
                    className={`${style["validation"]} validation d-sm-none d-md-block`}
                  >
                    {formerrors["content"] ? (
                      <div>* {formerrors["content"]}</div>
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
                <div className={style["tags-container"]}>
                  <div className={style["tags"]}>
                    {tags.map((tag, index) => (
                      <Tag key={index} label={tag} remove={removeTag} />
                    ))}
                  </div>
                    <input
                     type="text"
                     ref={tagRef}
                     onKeyDown={(e) => {
                       if (e.key === "Enter") {
                         e.preventDefault();
                         addTag(e);
                       }
                     }}
                     placeholder="Enter Tags (Hit enter to add tags)"
                    />
                     <i className="fas fa-tag"></i>
                  </div>
                  <div
                    className={`${style["validation"]} validation d-sm-none d-md-block`}
                  >
                    {formerrors["tags"] ? (
                      <div>* {formerrors["tags"]}</div>
                    ) : (
                      <div>&nbsp; &nbsp;</div>
                    )}
                  </div>
                </div>
              </div>

              <div className={`form-group ${style["form-group"]}`}>
              <label
                  className={
                    dark
                      ? `mb-3 ${style["level-of-trust"]} ${style["level-of-trust-dark"]}`
                      : `mb-3 ${style["level-of-trust"]} ${style["level-of-trust-dark"]}`
                  }
                >
                  Resource expiry date
                </label>
                <div
                  className={
                    dark
                      ? `${style["resource-input"]} ${style["resource-input-dark"]} `
                      : `${style["resource-input"]} ${style["resource-input-light"]}`
                  }
                > 
                  <input
                    type="date"
                    name="expiresOn"
                    className={style["form-control-input"]}
                    value={formData.expiresOn}
                    placeholder="Broadcast Date(DD/MM/YY)"
                    onChange={handleChange}
                  />
                  <div
                    className={`${style["validation"]} validation d-sm-none d-md-block`}
                  >
                    {formerrors["expiresOn"] ? (
                      <div>* {formerrors["expiresOn"]}</div>
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
                  <div className={style["tags-container"]}>
                    <div className={style["tags"]}>
                      {imageUrls.map((tag, index) => (
                        <ImageUrl key={index} label={tag} remove={removeImageUrl} />
                      ))}
                    </div>
                    <input
                      type="text"
                      ref={imageRef}
                      onKeyDown={e => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addImageUrl(e);
                        }
                      }}
                      placeholder="Enter Image url (Hit enter to add image url)"
                    />
                    <i className="fas fa-image" />
                  </div>
                  <div
                    className={`${style["validation"]} validation d-sm-none d-md-block`}
                  >
                    {formerrors["imageUrl"] ? (
                      <div>* {formerrors["imageUrl"]}</div>
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
                    placeholder="Resource Link"
                    id="txt_link"
                    type="url"
                    name="link"
                    onChange={handleChange}
                  />
                  <i className="fas fa-link"></i>
                  <div
                    className={`${style["validation"]} validation d-sm-none d-md-block`}
                  >
                    {formerrors["link"] ? (
                      <div>* {formerrors["link"]}</div>
                    ) : (
                      <div>&nbsp; &nbsp;</div>
                    )}
                  </div>
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
      )}
      {toast.toastStatus && (
        <SimpleToast
          open={toast.toastStatus}
          message={toast.toastMessage}
          handleCloseToast={handleCloseResourceToast}
          severity={toast.toastType}
        />
      )}
    </div>
  );
}

const Tag = ({ label, remove }) => {
  return (
    <div className={style["tag"]} onClick={() => remove(label)}>
      <span className={style["tag-label"]}>{label}</span>
      <span className={style["tag-remove"]}>x</span>
    </div>
  );
};

const ImageUrl = ({ label, remove }) => {
  return (
    <div className={style["tag"]} onClick={() => remove(label)}>
      <span className={style["tag-label"]}>{label}</span>
      <span className={style["tag-remove"]}>x</span>
    </div>
  )
}
