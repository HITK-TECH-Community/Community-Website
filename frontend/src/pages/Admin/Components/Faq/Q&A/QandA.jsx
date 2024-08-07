import React, { useEffect, useState } from "react";
import style from "./qanda.module.scss";
import {
  getAllQuestions,
  deleteQuestion,
  updateQuestionStatus,
} from "../../../../../service/Faq";
import { SimpleToast } from "../../../../../components/util/Toast/Toast";
import { hideToast } from "../../../../../service/toastService";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { AnswersModel } from "./AnswersModel/AnswersModel";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  buttons: {
    display: "flex",
    marginTop: "10px",
    justifyContent: "center",
    gap: "10px",
  },
}));

export function QandA() {
  const [cards, setCards] = useState([]);
  const [open, setOpen] = useState(false)
  const [currentQuesId, setCurrentQuesId] = useState("")
  const [toast, setToast] = useState({
    toastStatus: false,
    toastType: "",
    toastMessage: "",
  });
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [questionToDelete, setQuestionToDelete] = useState(null);
  const classes = useStyles();

  const getQuestions = async () => {
    setToast({ toastStatus: true, toastMessage: "Loading...", toastType: "info" })
    const data = await getAllQuestions(setToast, toast);
    setCards(data);
  };

  const handleOpenConfirmModal = (id) => {
    setConfirmDelete(true);
    setQuestionToDelete(id);
  };

  const handleCloseConfirmModal = () => {
    setConfirmDelete(false);
    setQuestionToDelete(null);
  };

  const handleDeleteQuestion = async () => {
    await deleteQuestion(questionToDelete, setToast);
    setCards(cards.filter(card => card._id !== questionToDelete));
    setConfirmDelete(false);
  };

  const updateQuestion = async (id, status) => {
    setCards(cards.map(card =>
      card._id === id ? { ...card, isApproved: status } : card
    ));

    await updateQuestionStatus(id, status, setToast);
  };

  const handleToggleExpand = async (id) => {
    setCurrentQuesId(id)
    setOpen(true)
  };


  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    hideToast(setToast);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div>
      <AnswersModel open={open} data={{ _id: currentQuesId }} handleClose={setOpen} />
      <h1 className={style["head"]}>Manage Q&A</h1>
      <div className={style["manage-qas"]}>
        {cards?.map((qns, index) => (
          <div className={style["crd"]} key={index}>
            <h2 className="head1">{qns.title}</h2>
            <div className={style["content"]}>
              <h3 style={{ fontWeight: "bolder" }}>{qns.description}</h3>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", padding: "10px 30px 10px 30px" }}>
                {qns?.tags?.map((tag) => (
                  <p className={style["tags"]} key={tag}>{tag}</p>
                ))}
              </div>
            </div>
            <div className={style["button-group"]}>
              {
                qns.isApproved ?
                  <button
                    name={`${qns?._id}`}
                    onClick={(e) => handleOpenConfirmModal(e.currentTarget.name)}
                    className={style["button-delete"]}
                  >
                    Delete
                  </button>
                  :
                  <>
                    <button
                      className={style["button-delete"]}
                      id={`${qns?._id}`}
                      onClick={(e) => handleOpenConfirmModal(e.currentTarget.id)}
                    >
                      Reject
                    </button>
                    <button
                      className={style["button-approve"]}
                      id={`${qns?._id}`}
                      onClick={(e) => updateQuestion(e.currentTarget.id, true)}
                    >
                      Approve
                    </button>
                  </>
              }
            </div>
            <button
              id={`${qns._id}`}
              onClick={() => handleToggleExpand(qns._id)}
              className={style["manage"]}
            >
              View Answers
            </button>
          </div>
        ))}
      </div>
      <Modal open={confirmDelete} onClose={handleCloseConfirmModal} className={classes.modal}>
        <div className={classes.paper}>
          <Typography variant="h6" component="h2">Confirm Delete</Typography>
          <Typography sx={{ mt: 2 }}>Are you sure you want to delete this question and all its answers?</Typography>
          <div className={classes.buttons}>
            <Button onClick={handleDeleteQuestion} variant="contained" color="secondary">Confirm</Button>
            <Button onClick={handleCloseConfirmModal} variant="contained" color="primary">Cancel</Button>
          </div>
        </div>
      </Modal>
      {toast.toastStatus && (
        <SimpleToast
          open={toast.toastStatus}
          message={toast.toastMessage}
          handleCloseToast={handleCloseToast}
          severity={toast.toastType}
        />
      )}
    </div>
  );
}
