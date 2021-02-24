import React from "react";
import { Button2 } from "../../components/util/Button/index";
import style from "./terms.module.css";

export const Terms = () => {
  return (
    <div>
      <div className={style["terms-section"]}>
        <img src="./images/terms.png" alt="" className={style["terms-img"]} />
      </div>
      <div className={style["terms"]}>
        <div className="row text-center">
          <h1>Terms Of Use</h1>
        </div>
      </div>
      <div className={style["agreement"]}>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <h3>Your Agreement</h3>
            <p>
              By using this Site, you agree to be bound by, and to comply with,
              these Terms and Conditions. If you do not agree to these Terms and
              Conditions, please do not use this site.
            </p>
            <p>
              PLEASE NOTE: We reserve the right, at our sole discretion, to
              change, modify or otherwise alter these Terms and Conditions at
              any time. Unless otherwise indicated, amendments will become
              effective immediately. Please review these Terms and Conditions
              periodically. Your continued use of the Site following the posting
              of changes and/or modifications will constitute your acceptance of
              the revised Terms and Conditions and the resonableness of these
              standards for notice of changes. For your information, this page
              was last updated as of the date at the top of these terms and
              conditions.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              dicta minus molestiae vel beatae natus eveniet ratione temporibus
              aperiam harum alias officiis assumenda officia quibusdam deleniti
              eos cupiditate dolore doloribus!
            </p>
            <p>
              Ad dolore dignissimos asperiores dicta facere optio quod commodi
              nam tempore recusandae. Rerum sed nulla eum vero expedita ex
              delectus voluptates rem at neque quos facere sequi unde optio
              aliquam!
            </p>
            <p>
              Tenetur quod quidem in voluptatem corporis dolorum dicta sit
              pariatur porro quaerat autem ipsam odit quam beatae tempora
              quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur
              at!
            </p>
            <div className={style["agree"]}>
              <Button2 label="Agree and Continue" type="submit" />
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </div>
  );
};
