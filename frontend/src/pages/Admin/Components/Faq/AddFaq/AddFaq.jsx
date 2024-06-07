import React, { useRef, useState } from "react";
import styles from "./add-faq.module.scss";
import { Button2 } from "../../../../../components/util/Button/index";
import { formatTag } from '../../../../../components/util/Tags';
import { SimpleToast } from "../../../../../components/util/Toast/Toast";
import { postFaq } from "../../../../../service/Faq"; 

export function AddFaq() {
  const tagRef = useRef();
  const [tags, setTags] = useState([]);
  const [formData, setFormData] = useState({ question: "", answer: "", tags: [] });
  const [errorObj, setErrorObj] = useState({});
  const [toast, setToast] = useState({
    toastMessage: "",
    toastStatus: false,
    toastType: "success",
  });

  const handleCloseToast = () => {
    setToast({
      ...toast,
      toastStatus: false,
    });
  };

  const handleValidation = () => {
    let errors = {};
    let formIsValid = true;

    if (tags.length === 0) {
      formIsValid = false;
      errors["tags"] = "* Please provide the necessary tags";
    }
    if (!formData["question"]) {
      formIsValid = false;
      errors["question"] = "* Question cannot be empty";
    }

    if (!formData["answer"]) {
      formIsValid = false;
      errors["answer"] = "* Answer cannot be empty";
    }

    if (formData["question"] && formData["question"].length < 8) {
      formIsValid = false;
      errors["question"] = "* Question should consist of a minimum of 8 characters";
    }

    if (formData["answer"] && formData["answer"].length < 8) {
      formIsValid = false;
      errors["answer"] = "* Answer should consist of a minimum of 8 characters";
    }

    setErrorObj(errors);
    return formIsValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addTag = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const { success } = await postFaq(formData, setToast, toast);
      if (success) {
        setFormData({ question: "", answer: "", tags: [] });
        setTags([]);
      }
    }
  };

  return (
    <div className={styles["faq-section"]}>
      <div className={styles["faq-parent"]}>
        <div className={styles["faq-child"] + " " + styles["child1"]}>
          <div className={styles["faq-card"]}>
            <h1 className={styles["faq-header-text"]}>Add &nbsp; Faq</h1>
            <div className={styles["inside-faq"]}>
              <form onSubmit={handleSubmit}>
                <div className={styles["faq-input"]}>
                  <input
                    id="question"
                    type="text"
                    name="question"
                    placeholder="Question"
                    onChange={handleChange}
                    value={formData.question}
                  />
                  <i className="fas fa-question-circle"></i>
                  <br />
                  <div>
                    {errorObj.question ? (
                      <div className={`${styles["validation"]} validation`}>
                        {errorObj.question}
                      </div>
                    ) : (
                      <div>&nbsp;&nbsp;</div>
                    )}
                  </div>
                  <br />
                </div>

                <div className={styles["faq-input"]}>
                  <input
                    id="answer"
                    type="text"
                    name="answer"
                    placeholder="Answer"
                    onChange={handleChange}
                    value={formData.answer}
                  />
                  <i className="fas fa-comment-dots"></i>
                  <br />
                  <div>
                    {errorObj.answer ? (
                      <div className={`${styles["validation"]} validation`}>
                        {errorObj.answer}
                      </div>
                    ) : (
                      <div>&nbsp;&nbsp;</div>
                    )}
                  </div>
                  <br />
                </div>

                <div className={styles["faq-input"]}>
                  <div className={styles["tags-container"]}>
                    <div className={styles["tags"]}>
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
                          addTag();
                        }
                      }}
                      placeholder="Enter Tags (Hit enter to add tags)"
                    />
                  </div>
                  <i className="fas fa-tag"></i>
                  <div>
                    {errorObj.tags ? (
                      <div className={`${styles["validation"]} validation`}>
                        {errorObj.tags}
                      </div>
                    ) : (
                      <div>&nbsp;&nbsp;</div>
                    )}
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
            </div>
          </div>
        </div>
      </div>
      <SimpleToast
        open={toast.toastStatus}
        message={toast.toastMessage}
        handleCloseToast={handleCloseToast}
        severity={toast.toastType}
      />
    </div>
  );
}

const Tag = ({ label, remove }) => (
  <div className={styles["tag"]} onClick={() => remove(label)}>
    <span className={styles["tag-label"]}>{label}</span>
    <span className={styles["tag-remove"]}>x</span>
  </div>
);
