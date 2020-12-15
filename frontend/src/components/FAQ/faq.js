import React from "react";
import "./styles/style.css";
import "./styles/style.scss";
import women_mobile from "./images/illustration-woman-online-mobile.svg";
import women_desktop from "./images/illustration-woman-online-desktop.svg";
import box from "./images/illustration-box-desktop.svg";
import arrow from "./images/icon-arrow-down.svg";

export const Faq = () => {
  var acc = document.getElementsByClassName("accordion");
  var panel = document.getElementsByClassName("panel");

  for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      var setClasses = !this.classList.contains("active");
      setClass(acc, "active", "remove");
      setClass(panel, "show", "remove");

      if (setClasses) {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
      }
    };
  }

  function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
      els[i].classList[fnName](className);
    }
  }
  return (
    <main>
      <div class="container-images">
        <img
          class="img_woman"
          src={women_mobile}
          alt="woman stand up front a screen answering clients questions"
        />
        <img
          class="img_woman_desktop"
          src={women_desktop}
          alt="woman stand up front a screen answering clients questions"
        />
      </div>
      <img
        class="img_box_desktop"
        src={box}
        alt="little box with an arroba symbol on it"
      />

      <div class="card">
        <div class="container-accordion">
          <h1>FAQ</h1>

          <div class="accordion">
            <p>How many team members can I invite?</p>
            <img
              class="img-icon"
              src={arrow}
              alt="icon arrow display answer down"
            />
          </div>
          <div class="panel">
            <p>There is no limit on team members for the Premium plan.</p>
          </div>

          <div class="accordion">
            <p>What is the maximum file upload size?</p>
            <img
              class="img-icon"
              src={arrow}
              alt="icon arrow display answer down"
            />
          </div>
          <div class="panel">
            <p>No more than 2GB.</p>
          </div>

          <div class="accordion">
            <p>How do I reset my password?</p>
            <img
              class="img-icon"
              src={arrow}
              alt="icon arrow display answer down"
            />
          </div>
          <div class="panel">
            <p>Click “Forgot password” from the login page.</p>
          </div>

          <div class="accordion">
            <p>Can I cancel my subscription?</p>
            <img
              class="img-icon"
              src={arrow}
              alt="icon arrow display answer down"
            />
          </div>
          <div class="panel">
            <p>Yes! Send us a message and we’ll process.</p>
          </div>

          <div class="accordion">
            <p>Do you provide additional support?</p>
            <img
              class="img-icon"
              src={arrow}
              alt="icon arrow display answer down"
            />
          </div>
          <div class="panel">
            <p>Chat and email support is available 24/7.</p>
          </div>
        </div>
      </div>
    </main>
  );
};
