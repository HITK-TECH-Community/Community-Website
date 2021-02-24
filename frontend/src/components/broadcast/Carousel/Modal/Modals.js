import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import style from "./modal.module.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={style.modals}>
            <h1 className={style.modHead}>{props.data.head}</h1>
            <div className={style.mainCont}>
              <img
                src={props.data.img}
                className={style.image}
                alt="dummy_img"
              />
              <div className={style.cont}>{props.data.desc}</div>
            </div>
            <h1 className={style.modHead}>Link</h1>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
