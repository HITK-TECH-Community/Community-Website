import React from "react";
import styles from "./add-faq.module.scss";
import { Button2 } from "../../../../../components/util/Button/index";

export class AddFaq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
    };
  }
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["question"]) {
      formIsValid = false;
      errors["question"] = "* Question cannot be empty";
    }

    if (!fields["answer"]) {
      formIsValid = false;
      errors["answer"] = "* Answer cannot be empty";
    }

    if (typeof fields["question"] !== "undefined") {

      if (
        !(
          fields["question"].length > 0 && fields["question"].length < 9
        )
      ) {
        formIsValid = false;
        errors["question"] = "* Question should consists 8 characters";
      }
    }

    if (typeof fields["answer"] !== "undefined") {

      if (
        !(
          fields["answer"].length > 0 && fields["answer"].length < 9
        )
      ) {
        formIsValid = false;
        errors["answer"] = "* Answer should consists 8 characters";
      }
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      console.log("Form submitted");
    } else {
      console.log("Form has errors.");
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }


  render () {
   
  return (
    <div className={styles["faq-section"]} >
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
                  required="required"
                  name="question"
                  placeholder="Question"
                  onChange={this.handleChange.bind(this, "question")}
                  value={this.state.fields["question"]}
                />
                <i className="fas fa-question-circle"></i>
              </div>
              
              <div className={styles["faq-input"]}>
                <input
                  id="answer"
                  type="text"
                  required="required"
                  name="answer"
                  placeholder="Answer"
                  onChange={this.handleChange.bind(this, "answer")}
                  value={this.state.fields["answer"]}
                />
                <i className="fas fa-comment-dots"></i>
                <br />
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
            <div
                className={`${styles["validation"]} validation d-sm-none d-md-block`}
              >
                <div>{this.state.errors["question"]}</div>
                <br />
                <div>{this.state.errors["answer"]}</div>
              </div> 
          </div>
        </div>
      </div>
    </div>
  );
  }
}
