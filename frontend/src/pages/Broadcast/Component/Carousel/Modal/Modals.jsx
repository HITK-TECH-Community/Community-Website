import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import style from "./modals.module.scss";

export function Modals(props) {
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
          <div className={style["modals"]}>
            <h1 className={style["mod_head"]}>{props.data.head}</h1>
            <div className={style["main-cont"]}>
              <img
                src={props.data.img}
                className={style["image"]}
                alt="dummy_img"
              />
              <div className={style["cont"]}>{props.data.desc}</div>
            </div>
            <h1 className={style["mod_head"]}>Link</h1>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
