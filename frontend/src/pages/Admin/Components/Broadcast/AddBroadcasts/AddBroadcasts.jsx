import React, { useRef, useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"
import styles from "./add-broadcasts.module.scss";
import Joi from "joi-browser";
import { Button2 } from "../../../../../components/util/Button/index";
import  Loader  from "../../../../../components/util/Loader/index";
import { SimpleToast } from "../../../../../components/util/Toast/index";
import { END_POINT } from "../../../../../config/api"

export function AddBroadcasts() {
  const tagRef = useRef();
  const imageRef = useRef();
  const [tags, setTags] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const schema = {
    title: "",
    content: "",
    tags: [],
    expiresOn: null,
    imageUrl: [],
    link: "",
  };
  const [formData, setFormData] = useState(schema);
  const [errorObj, setErrorObj] = useState({});
  const [isUploadingData, setIsUploadingData] = useState(false);
  const [open, setOpenToast] = useState(false);
  const [toastMessage,setToastMessage] = useState("");
  const [severity,setSeverity] = useState('success')
  const handleCloseToast = (event, reason) => {
    setTimeout(() => {
      setOpenToast(false);
    }, 500);
  }

  const validationSchema = {
    title: Joi.string().required(),
    tags: Joi.array().items(Joi.string()),
    content: Joi.string().required(),
    expiresOn: Joi.date().required(),
    imageUrl: Joi.array().items(Joi.string()),
    link: Joi.string().required(),
  };

  const isFormValid = () => {
    const check = Joi.validate(formData, validationSchema, {
      abortEarly: false,
    });
    if (!check.error) return true;
    const errors = {};
    check.error.details.map(item => {
      if (!errors[item.path[0]]) errors[item.path[0]] = item.message;
      return 0;
    });
    setErrorObj(errors);
    return false;
  };

  const validateField = input => {
    const { name, value } = input;
    const obj = { [name]: value };
    const obj_schema = { [name]: validationSchema[name] };
    const result = Joi.validate(obj, obj_schema);

    return result.error ? result.error.details[0].message : null;
  };

  const handleChange = e => {
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
      setTags(prevTags => [...prevTags, tag.trim()]);
      setFormData({ ...formData, tags: [...formData.tags, tag.trim()] });
      tagRef.current.value = "";
    }
  };
  const addImageUrl = () => {
    const url = imageRef.current.value;
    if (url.trim()) {
      setImageUrls(prevUrl => [...prevUrl, url.trim()]);
      setFormData({ ...formData, imageUrl: [...formData.imageUrl, url.trim()] });
      imageRef.current.value = "";
    }
  }

  const removeTag = tag => {
    setTags(tags.filter(t => t !== tag));
    setFormData({ ...formData, tags: formData.tags.filter(t => t !== tag) });
  };
  const removeImageUrl = url => {
    setImageUrls(imageUrls.filter(u => u !== url));
    setFormData({ ...formData, imageUrl: formData.imageUrl.filter(u => u !== url) });
  }
  async function uploadData(formData) {
    try {
      let url = `${END_POINT}/broadcast`
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      let errorResponse = false;
      Object.keys(data).forEach((key)=> {
        if(key === "errorType") {
          errorResponse = true;
          setSeverity('error')
          setToastMessage(data.errorType)

        }
      })
      if(errorResponse === false) {
        setSeverity('success')
        setToastMessage("broadcats added successfully!")
        const schema = {
          title: "",
          content: "",
          tags: [],
          expiresOn: "dd-mm-yyyy",
          imageUrl: [],
          link: "",
        };
        setTags([])
        setImageUrls([])
        setFormData(schema)
      }
    }
    catch (err) {
      setToastMessage("Something went wrong");
      setSeverity("error")
    }
    finally {
      setIsUploadingData(false)
      setOpenToast(true)
    }
  }
  const onSubmit = e => {
    e.preventDefault();
    if (isFormValid()) {
      // TODO: send data to server
      setIsUploadingData(true)
      uploadData(formData);
    }
  };

  const onContentChange = content => {
    let value = "";
    if (content !== "<p></p>" && content !== "<p><br></p>") {
      value = content;
    }
    handleChange({ currentTarget: { name: "content", value } });
  };

  return (
    <div>
      <div className={styles["add-broadcasts-container"]}>
      <SimpleToast open={open} message={toastMessage} severity={severity} handleCloseToast={handleCloseToast}/>
      <div className={styles["card"]}>
        <form className={styles["editor"]} noValidate onSubmit={onSubmit}>
          <div className={styles["motive"]}>
            <h1 className={styles["heading"]}>ADD BROADCAST</h1>
            <div className={styles["dash"]}></div>
          </div>
          <div>
            <div className={styles["form-control"]}>
              <input
                type="text"
                name="title"
                className={styles["form-control-input"]}
                placeholder="Heading"
                onChange={handleChange}
                value={formData.title}
              />
              <i className="fas fa-pencil-alt" />
              {errorObj.title && (
                <div className={styles["error"]}>{errorObj.title}</div>
              )}
            </div>
          </div>
          <div>
            <div className={styles["form-control"]}>
              <SunEditor
                lang="en"
                name="content"
                placeholder="Please type here..."
                height="200px"
                onChange={onContentChange}
                setContents={formData.content}
                className={styles["edit"]}
              />
              {errorObj.content && (
                <div className={styles["error"]}>{errorObj.content}</div>
              )}
            </div>
          </div>
          <div>
            <div className={styles["form-control"]}>
              <input
                type="date"
                name="expiresOn"
                className={styles["form-control-input"]}
                value={formData.expiresOn}
                placeholder="Broadcast Date(DD/MM/YY)"
                onChange={handleChange}
              />
              {errorObj.expiresOn && (
                <div className={styles["error"]}>{errorObj.expiresOn}</div>
              )}
            </div>
          </div>
          <div className={styles["form-control"]}>
            <div className={styles["tags-container"]}>
              <div className={styles["tags"]}>
                {imageUrls.map((tag, index) => (
                  <ImageUrl key={index} label={tag} remove={removeImageUrl} />
                ))}
              </div>
              <input
                type="text"
                ref={imageRef}
                onKeyDown={e => {
                  if (e.key === "Enter") {
                    addImageUrl();
                  }
                }}
                placeholder="Enter Image url (Hit enter to add image url)"
              />
              <i className="fas fa-link" />
            </div>
          </div>
          <div>
            <div className={styles["form-control"]}>
              <input
                type="text"
                name="link"
                className={styles["form-control-input"]}
                placeholder="Resource Link"
                value={formData.link}
                onChange={handleChange}
              />
              <i className="fas fa-link" />
              {errorObj.link && (
                <div className={styles["error"]}>{errorObj.link}</div>
              )}
            </div>
          </div>
          <div>
            <div className={styles["tags-container"]}>
              <div className={styles["tags"]}>
                {tags.map((tag, index) => (
                  <Tag key={index} label={tag} remove={removeTag} />
                ))}
              </div>
              <input
                type="text"
                ref={tagRef}
                onKeyDown={e => {
                  if (e.key === "Enter") {
                    addTag();
                  }
                }}
                placeholder="Enter Tags (Hit enter to add tags)"
              />
            </div>
          </div>
            <div className={styles["data-loader"]}>{isUploadingData?<Loader/>:null}</div>
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

const ImageUrl = ({ label, remove }) => {
  return (
    <div className={styles["tag"]} onClick={() => remove(label)}>
      <span className={styles["tag-label"]}>{label}</span>
      <span className={styles["tag-remove"]}>x</span>
    </div>
  )
}
