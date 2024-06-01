import { useEffect, useState } from "react";
import style from "./manage.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { SimpleToast } from "../../../../../../components/util/Toast/Toast";
import Loader from "../../../../../../components/util/Loader";
import { getQuestionById, deleteAnswer, deleteQuestion, updateQuestionStatus, updateAnswerStatus, getAnswers } from "../../../../../../service/Faq";
import { hideToast, showToast } from "../../../../../../service/toastService";

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

export function Manageqa({ setTab, qId }) {
  const [ans, setAns] = useState([]);
  const [qns, setQns] = useState();
  const [toggle, setToggle] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [toast, setToast] = useState({
    toastStatus: false,
    toastType: "",
    toastMessage: "",
  });
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [questionToDelete, setQuestionToDelete] = useState(null);
  const classes = useStyles();

  const getQuestion = async (id) => {
    setIsLoaded(true);
    const qRes = await getQuestionById(id, setToast);
    setQns(qRes);
    setIsLoaded(false);
  };

  const handleOpenConfirmModal = (id) => {
    setConfirmDelete(true);
    setQuestionToDelete(id);
  };

  const handleCloseConfirmModal = () => {
    setConfirmDelete(false);
  };

  const handleDeleteAnswer = async (answerId) => {
    await deleteAnswer(answerId, setToast);
    setToggle(!toggle);
  };

  const handleDeleteQuestion = async () => {
    await deleteQuestion(questionToDelete, setToast);
    setConfirmDelete(false); 
    setTab(18);
    setToggle(!toggle);
  };

  const updateQuestion = async (id, status) => {
    await updateQuestionStatus(id, status, setToast);
    setToggle(!toggle);
  };

  const getAnswer = async (questionId) => {
    setIsLoaded(true);
    const aRes = await getAnswers(questionId, setToast);
    setAns(aRes);
    setIsLoaded(false);
  };

  const updateAnswer = async (id, status) => {
    await updateAnswerStatus(id, status, setToast);
    setToggle(!toggle);
  };

  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    hideToast(setToast);
  };

  useEffect(() => {
    getQuestion(qId);
    getAnswer(qId);
  }, [toggle]);

  return (
    <div>
      <h1 className={style["head"]}>Manage Q&A</h1>
      <div className={style["back"]} style={{ cursor: "pointer" }}>
        <AiOutlineArrowLeft size={"35px"} onClick={() => setTab(18)} />
      </div>
      <div className={style["data-loader"]}>{isLoaded && <Loader />}</div>
      {!isLoaded && (
        <>
          <h1 className={style["head"]}>Question</h1>
          <div className={style["question"]}>
            <div className={style["card-item"]}>
              <div className={style["card-info"]}>
                <h1>{qns?.title}</h1>
                <div className={style["questionBox"]}>
                  <h3 className={style["card-question"]}>{qns?.description}</h3>
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
                  <div style={{ display: "flex", padding: "10px 30px 10px 30px" }}>
                    {qns?.tags?.map((tag) => (
                      <p className={style["tags"]} key={tag}>{tag}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <h1 className={style["head"]}>Answers</h1>
      {ans?.length === 0 ? (
        <span>No answers Found</span>
      ) : (
        <div className={ans?.length === 1 ? style["question"] : style["answer"]}>
          {ans?.map((a) => (
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
          ))}
        </div>
      )}
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
