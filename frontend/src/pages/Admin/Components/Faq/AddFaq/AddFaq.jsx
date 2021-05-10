import React from "react";
import { WithContext as ReactTags } from "react-tag-input";
import styles from "./add-faq.module.scss";
import { Button2 } from "../../../../../components/util/Button/index";
import { END_POINT } from "./../../../../../config/api";
import { SimpleToast } from "./../../../../../components/util/Toast/Toast";

const KeyCodes = {
  comma: 188,
  enter: 13,
};
const delimiters = [KeyCodes.comma, KeyCodes.enter];

export class AddFaq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      tags: [],
      token: localStorage.getItem("token"),
      successToast: false,
      errorToast: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleCloseToast = this.handleCloseToast.bind(this);
  }

  handleCloseToast(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ errorToast: false });
    this.setState({ successToast: false });
  }

  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
  }

  handleAddition(tag) {
    this.setState((state) => ({ tags: [...state.tags, tag] }));
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    this.setState({ tags: newTags });
  }

  handleValidation() {
    let fields = this.state.fields;
    let tags = this.state.tags;
    let errors = {};
    let formIsValid = true;

    if (tags.length === 0) {
      formIsValid = false;
      errors["tags"] = "* Please provide the necessary tags";
    }
    if (!fields["question"]) {
      formIsValid = false;
      errors["question"] = "* Question cannot be empty";
    }

    if (!fields["answer"]) {
      formIsValid = false;
      errors["answer"] = "* Answer cannot be empty";
    }

    if (typeof fields["question"] !== "undefined") {
      if (fields["question"].length < 9) {
        formIsValid = false;
        errors["question"] = "* Question should consists mimimum 8 characters";
      }
    }

    if (typeof fields["answer"] !== "undefined") {
      if (fields["answer"].length < 9) {
        formIsValid = false;
        errors["answer"] = "* Answer should consists mimimum 8 characters";
      }
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      let tags = this.state.tags;
      return fetch(`${END_POINT}/faq`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.state.token,
        },
        body: JSON.stringify({ ...this.state.fields, tags }),
      })
        .then((response) => {
          if (response.status === 200) {
            this.setState({
              successToast: true,
              tags: [],
              fields: { question: "", answer: "" },
              errors: {},
            });
          }
          response
            .json()
            .then((res) => {
              if (res.statusCode === 500) {
                this.setState({ errorToast: true });
              }
            })
            .catch((err) => {
              console.log("Error: ", err);
            });
        })
        .catch((err) => {
          console.error("must be a backend problem🤔:", err);
        });
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <div className={styles["faq-section"]}>
        <div className={styles["faq-parent"]}>
          <div className={styles["faq-child"] + " " + styles["child1"]}>
            <div className={styles["faq-card"]}>
              <h1 className={styles["faq-header-text"]}>Add &nbsp; Faq</h1>
              <div className={styles["inside-faq"]}>
                <form onSubmit={this.contactSubmit.bind(this)}>
                  <div className={styles["faq-input"]}>
                    <input
                      id="question"
                      type="text"
                      name="question"
                      placeholder="Question"
                      onChange={this.handleChange.bind(this, "question")}
                      value={this.state.fields["question"]}
                    />
                    <i className="fas fa-question-circle"></i>
                    <br />
                    <div>
                      {this.state.errors["question"] ? (
                        <div className={`${styles["validation"]} validation`}>
                          {this.state.errors["question"]}
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
                      onChange={this.handleChange.bind(this, "answer")}
                      value={this.state.fields["answer"]}
                    />
                    <i className="fas fa-comment-dots"></i>
                    <br />
                    <div>
                      {this.state.errors["answer"] ? (
                        <div className={`${styles["validation"]} validation`}>
                          {this.state.errors["answer"]}
                        </div>
                      ) : (
                        <div>&nbsp;&nbsp;</div>
                      )}
                    </div>
                    <br />
                  </div>

                  <div className={styles["faq-input"]}>
                    <ReactTags
                      inputFieldPosition="top"
                      tags={this.state.tags}
                      handleDelete={this.handleDelete}
                      handleAddition={this.handleAddition}
                      handleDrag={this.handleDrag}
                      delimiters={delimiters}
                      classNames={{
                        selected: styles["selectedClass"],
                        tag: styles["tagClass"],
                        remove: styles["removeClass"],
                      }}
                    />
                    <i className="fas fa-tag"></i>
                  </div>
                  <div>
                    {this.state.errors["tags"] ? (
                      <div className={`${styles["validation"]} validation`}>
                        {this.state.errors["tags"]}
                      </div>
                    ) : (
                      <div>&nbsp;&nbsp;</div>
                    )}
                  </div>
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
        </div>
        <SimpleToast
          open={this.state.successToast}
          message="FAQ has been added"
          handleCloseToast={this.handleCloseToast}
          severity="success"
        />
        <SimpleToast
          open={this.state.errorToast}
          message="Database Error"
          handleCloseToast={this.handleCloseToast}
          severity="error"
        />
      </div>
    );
  }
}
