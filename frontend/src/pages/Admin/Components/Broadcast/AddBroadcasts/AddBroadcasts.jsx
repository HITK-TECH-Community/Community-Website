import React, { useRef, useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import styles from "./add-broadcasts.module.scss";
import Joi from "joi-browser";
import { Button2 } from "../../../../../components/util/Button/index";

export function AddBroadcasts() {
  const tagRef = useRef();
  const [tags, setTags] = useState([]);
  const schema = {
    title: "",
    content: "",
    tags: [],
    expiresOn: null,
    imageUrl: "",
    link: "",
  };
  const [formData, setFormData] = useState(schema);
  const [errorObj, setErrorObj] = useState({});

  const validationSchema = {
    title: Joi.string().required(),
    tags: Joi.array().items(Joi.string()),
    content: Joi.string().required(),
    expiresOn: Joi.date().required(),
    imageUrl: Joi.string().required(),
    link: Joi.string().required(),
  };

  const isFormValid = () => {
    const check = Joi.validate(formData, validationSchema, {
      abortEarly: false,
    });
    if (!check.error) return true;
    const errors = {};
    check.error.details.map((item) => {
      if (!errors[item.path[0]]) errors[item.path[0]] = item.message;
      return 0;
    });
    setErrorObj(errors);
    return false;
  };

  const validateField = (input) => {
    const { name, value } = input;
    const obj = { [name]: value };
    const obj_schema = { [name]: validationSchema[name] };
    const result = Joi.validate(obj, obj_schema);

    return result.error ? result.error.details[0].message : null;
  };

  const handleChange = (e) => {
    const { currentTarget: input } = e;
    const errors = { ...errorObj };
    const errorMessage = validateField(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    setFormData({ ...formData, [input.name]: input.value });
    setErrorObj(errors);
  };

  const addTag = () => {
    const tag = tagRef.current.value;
    if (tag.trim()) {
      setTags((prevTags) => [...prevTags, tag.trim()]);
      setFormData({ ...formData, tags: [...formData.tags, tag.trim()] });
      tagRef.current.value = "";
    }
  };

  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
    setFormData({ ...formData, tags: formData.tags.filter((t) => t !== tag) });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log(formData);
      // TODO: send data to server
    }
  };

  const onContentChange = (content) => {
    let value = "";
    if (content !== "<p></p>" && content !== "<p><br></p>") {
      value = content;
    }
    handleChange({ currentTarget: { name: "content", value } });
  };

  return (
    <form className={styles["editor"]} noValidate onSubmit={onSubmit}>
      <div className={styles["motive"]}>
        <h1 className={styles["heading"]}>ADD BROADCAST</h1>
        <div className={styles["dash"]}></div>
      </div>
      <div>
        <p className={styles["headingg"]}>Broadcast heading</p>
        <div className={styles["form-control"]}>
          <input
            type="text"
            name="title"
            className={styles["form-control-input"]}
            placeholder="Type here..."
            onChange={handleChange}
          />
          {errorObj.title && (
            <div className={styles["error"]}>{errorObj.title}</div>
          )}
        </div>
      </div>
      <div>
        <p className={styles["headingg"]}>
          Enter the Broadcast content here...
        </p>
        <div className={styles["form-control"]}>
          <SunEditor
            lang="en"
            name="content"
            placeholder="Please type here..."
            height="200px"
            onChange={onContentChange}
            className={styles["edit"]}
          />
          {errorObj.content && (
            <div className={styles["error"]}>{errorObj.content}</div>
          )}
        </div>
      </div>
      <div>
        <p className={styles["headingg"]}>Broadcast Date</p>
        <div className={styles["form-control"]}>
          <input
            type="date"
            name="expiresOn"
            className={styles["form-control-input"]}
            placeholder="Type here..."
            onChange={handleChange}
          />
          {errorObj.expiresOn && (
            <div className={styles["error"]}>{errorObj.expiresOn}</div>
          )}
        </div>
      </div>
      <div>
        <p className={styles["headingg"]}>Image Url</p>
        <div className={styles["form-control"]}>
          <input
            type="text"
            name="imageUrl"
            className={styles["form-control-input"]}
            placeholder="Type here..."
            onChange={handleChange}
          />
          {errorObj.imageUrl && (
            <div className={styles["error"]}>{errorObj.imageUrl}</div>
          )}
        </div>
      </div>
      <div>
        <p className={styles["headingg"]}>Link</p>
        <div className={styles["form-control"]}>
          <input
            type="text"
            name="link"
            className={styles["form-control-input"]}
            placeholder="Type here..."
            onChange={handleChange}
          />
          {errorObj.link && (
            <div className={styles["error"]}>{errorObj.link}</div>
          )}
        </div>
      </div>
      <div>
        <p className={styles["headingg"]}>Enter Tags here...</p>
        <div className={styles["tags-container"]}>
          <div className={styles["tags"]}>
            {tags.map((tag, index) => (
              <Tag key={index} label={tag} remove={removeTag} />
            ))}
          </div>
          <input
            type="text"
            className={styles["form-control-input"]}
            ref={tagRef}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTag();
              }
            }}
            placeholder="Hit enter to add tags..."
          />
        </div>
      </div>
      <div className={styles["submit-btn"]}>
        <Button2
          className={styles["submit-btn-text"]}
          label="Submit"
          type="submit"
        />
      </div>
    </form>
  );
}

const Tag = ({ label, remove }) => {
  return (
    <div className={styles["tag"]} onClick={() => remove(label)}>
      <span className={styles["tag-label"]}>{label}</span>
      <span className={styles["tag-remove"]}>x</span>
    </div>
  );
};
