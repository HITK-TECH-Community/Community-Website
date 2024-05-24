import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import style from "./modals.module.scss";

export function Modals(props) {
  let dark = props.theme;
  console.log(props)
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={style["modal"]}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div
            className={
              dark
                ? `${style["modals-dark"]} ${style["modals"]}`
                : `${style["modals-light"]} ${style["modals"]}`
            }
          >
            <h1
              className={
                dark
                  ? `${style["mod_head-dark"]} ${style["mod_head"]}`
                  : `${style["mod_head-light"]} ${style["mod_head"]}`
              }
            >
              <span className={style["heading"]}>{props.data.head}</span>
              <span
                onClick={props.handleClose}
                className={
                  dark
                    ? `${style["close-btn-dark"]} ${style["close-btn"]}`
                    : `${style["close-btn-light"]} ${style["close-btn"]}`
                }
              >
                <i class="fas fa-times"></i>
              </span>
            </h1>
            <div className={style["main-cont"]}>
              <img
                src={props.data.img}
                className={style["image"]}
                alt="dummy_img"
              />
              <div className={style["cont"]} dangerouslySetInnerHTML={{__html:props.data.desc}} />
            </div>
            <h1
              className={
                dark
                  ? `${style["link-dark"]} ${style["link"]}`
                  : `${style["link-light"]} ${style["link"]}`
              }
              onClick={()=>window.open(props.data.link,"_blank")}
            >
              Link
            </h1>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
