import React, { useEffect, useState } from "react";
import style from "./qanda.module.scss";
import {
  getAllQuestions,
  deleteAnswer,
  deleteQuestion,
  updateQuestionStatus,
  updateAnswerStatus,
  getAnswers,
} from "../../../../../service/Faq";
import { SimpleToast } from "../../../../../components/util/Toast/Toast";
import Loader from "../../../../../components/util/Loader";
import { hideToast, showToast } from "../../../../../service/toastService";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

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
  const [expandedCards, setExpandedCards] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [toast, setToast] = useState({
    toastStatus: false,
    toastType: "",
    toastMessage: "",
  });
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [questionToDelete, setQuestionToDelete] = useState(null);
  const classes = useStyles();

  const getQuestions = async () => {
    setIsLoaded(true);
    const data = await getAllQuestions(setToast, toast);
    setCards(data);
    setIsLoaded(false);
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

  const handleDeleteAnswer = async (answerId) => {
    const questionId = Object.keys(expandedCards)[0];
    const prevAnswers = expandedCards[questionId]?.answers || [];
  
    setExpandedCards((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        answers: prevAnswers.filter(answer => answer._id !== answerId),
      },
    }));
  
    await deleteAnswer(answerId, setToast);
  };
  
  const updateAnswer = async (id, status) => {
    const questionId = Object.keys(expandedCards)[0];
    const prevAnswers = expandedCards[questionId]?.answers || [];

    setExpandedCards((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        answers: prevAnswers.map(answer =>
          answer._id === id ? { ...answer, isApproved: status } : answer
        ),
      },
    }));
  
    await updateAnswerStatus(id, status, setToast);
  };

  const handleToggleExpand = async (id) => {
    if (expandedCards[id]) {
      setExpandedCards((prev) => {
        const newExpanded = { ...prev };
        delete newExpanded[id];
        return newExpanded;
      });
    } else {
      setIsLoaded(true);
      const aRes = await getAnswers(id, setToast);
      setExpandedCards((prev) => ({
        ...prev,
        [id]: {
          answers: aRes,
        },
      }));
      setIsLoaded(false);
    }
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
      <h1 className={style["head"]}>Manage Q&A</h1>
      <div className={style["data-loader"]}>{isLoaded && <Loader />}</div>
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
              <button
                className={qns?.isApproved ? style["button-delete"] : style["button-approve"]}
                id={`${qns?._id}`}
                onClick={(e) => updateQuestion(e.currentTarget.id, !qns?.isApproved)}
              >
                {qns?.isApproved ? "Reject" : "Approve"}
              </button>
              <button
                name={`${qns?._id}`}
                onClick={(e) => handleOpenConfirmModal(e.currentTarget.name)}
                className={style["button-delete"]}
              >
                Delete
              </button>
            </div>
            <button
              id={`${qns._id}`}
              onClick={() => handleToggleExpand(qns._id)}
              className={style["manage"]}
            >
              {expandedCards[qns._id] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              {expandedCards[qns._id] ? "Hide Answers" : "Show Answers"}
            </button>
            {expandedCards[qns._id] && (
              <div className={style["answers"]}>
                {expandedCards[qns._id].answers?.length === 0 ? (
                  <span>No answers Found</span>
                ) : (
                  expandedCards[qns._id].answers.map((a) => (
                    <div className={style["card-item"]} key={a?._id}>
                      <div className={style["card-info"]}>
                        <div className={style["answerBox"]}>
                          <h3 className={style["card-answer"]}>{a.answer}</h3>
                          <div className={style["button-group"]}>
                            <button
                              className={a?.isApproved ? style["button-delete"] : style["button-approve"]}
                              id={`${a?._id}`}
                              onClick={(e) => updateAnswer(e.currentTarget.id, !a?.isApproved)}
                            >
                              {a?.isApproved ? "Reject" : "Approve"}
                            </button>
                            <button
                              name={`${a?._id}`}
                              onClick={(e) => handleDeleteAnswer(e.currentTarget.name)}
                              className={style["button-delete"]}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
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
