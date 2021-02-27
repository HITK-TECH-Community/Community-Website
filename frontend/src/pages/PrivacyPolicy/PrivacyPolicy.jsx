import React from "react";
import style from "./privacy-policy.module.scss";

export const PrivacyPolicy = () => {
  return (
    <div className={style["pp-section"]}>
      <div className={style["pp-logo-container"]}>
        <img
          className={style["pp-logo"]}
          src="./images/privacy.png"
          alt="privacy-icon"
        />
      </div>
      <div className={style["pp-statement-container"]}>
        <div className={style["pp-statement"]}>
          <div className={style["pp-content"]}>
            This privacy policy has been compiled to better serve those who are
            concerned with how their 'Personally Identifiable Information' (PII)
            is being used online. PII, as described in US privacy law and
            information security, is information that can be used on its own or
            with other information to identify, contact, or locate a single
            person, or to identify an individual in context. Please read our
            privacy policy carefully to get a clear understanding of how we
            collect, use, protect or otherwise handle your Personally
            Identifiable Information in accordance with our website.
          </div>
          <div className={style["pp-subheading"]}>
            What personal information do we collect from the people that visit
            our website?
          </div>
          <div className={style["pp-content"]}>
            When ordering or registering on our site, as appropriate, you may be
            asked to enter your name, email address, mailing address or other
            details to help you with your experience.
          </div>
          <div className={style["pp-subheading"]}>
            When do we collect information?
          </div>
          <div className={style["pp-content"]}>
            We collect information from you when you register on our site,
            subscribe to a newsletter, fill out a form or enter information on
            our site.
          </div>
          <div className={style["pp-subheading"]}>
            How do we use your information?
          </div>
          <div className={style["pp-content"]}>
            We may use the information we collect from you when you register,
            make a purchase, sign up for our newsletter, respond to a survey or
            marketing communication, surf the website, or use certain other site
            features in the following ways:
            <ul>
              <li>
                <i className="far fa-hand-point-right"></i> To personalize your
                experience and to allow us to deliver the type of content and
                product offerings in which you are most interested.
              </li>
              <li>
                <i className="far fa-hand-point-right"></i> To improve our
                website in order to better serve you.
              </li>
              <li>
                <i className="far fa-hand-point-right"></i> To allow us to
                better service you in responding to your customer service
                requests.
              </li>
              <li>
                <i className="far fa-hand-point-right"></i> To ask for ratings
                and reviews of services or products.
              </li>
            </ul>
          </div>
          <div className={style["pp-subheading"]}>
            How do we protect your information?
          </div>
          <div className={style["pp-content"]}>
            <ul>
              <li>
                <i className="fas fa-check-circle"></i> We do not use
                vulnerability scanning and/or scanning to PCI standards.
              </li>
              <li>
                <i className="fas fa-check-circle"></i> We only provide articles
                and information. We never ask for credit card numbers.
              </li>
              <li>
                <i className="fas fa-check-circle"></i> We do not use Malware
                Scanning.
              </li>
              <li>
                <i className="fas fa-check-circle"></i> Your personal
                information is contained behind secured networks and is only
                accessible by a limited number of persons who have special
                access rights to such systems, and are required to keep the
                information confidential. In addition, all sensitive/credit
                information you supply is encrypted via Secure Socket Layer
                (SSL) technology.
              </li>
              <li>
                <i className="fas fa-check-circle"></i> We implement a variety
                of security measures when a user enters, submits, or accesses
                their information to maintain the safety of your personal
                information.
              </li>
              <li>
                <i className="fas fa-check-circle"></i> All transactions are
                processed through a gateway provider and are not stored or
                processed on our servers.
              </li>
            </ul>
          </div>
          <div className={style["pp-subheading"]}>Third-party disclosure</div>
          <div className={style["pp-content"]}>
            We do not sell, trade, or otherwise transfer to outside parties your
            Personally Identifiable Information.
          </div>
          <div className={style["pp-subheading"]}>CAN SPAM Act</div>
          <div className={style["pp-content"]}>
            The CAN-SPAM Act is a law that sets the rules for commercial email,
            establishes requirements for commercial messages, gives recipients
            the right to have emails stopped from being sent to them, and spells
            out tough penalties for violations.
          </div>
          <div className={style["pp-subheading"]}>
            We collect your email address in order to:
          </div>
          <div className={style["pp-content"]}>
            Send information, respond to inquiries, and/or other requests or
            questions.
          </div>
          <div className={style["pp-subheading"]}>
            To be in accordance with CANSPAM, we agree to the following:
          </div>
          <div className={style["pp-content"]}>
            If at any time you would like to unsubscribe from receiving future
            emails, you can email us at{" "}
            <a href="mailto:hitktechcommunity@gmail.com">
              hitktechcommunity@gmail.com
            </a>{" "}
            and we will promptly remove you from ALL correspondence.
          </div>
          <div className={style["pp-subheading"]}>Contacting Us</div>
          <div className={style["pp-content"]}>
            If there are any questions regarding this privacy policy, you may
            contact us using the information below.
            <span style={{ marginTop: "20px" }}>
              <h5>HITK Tech Community</h5>
            </span>
            <p>
              <a href="mailto:hitktechcommunity@gmail.com">
                hitktechcommunity@gmail.com
              </a>
            </p>
            <p className={style["by-line"]}>Last Edited on 2021-01-15</p>
          </div>
        </div>
      </div>
    </div>
  );
};
