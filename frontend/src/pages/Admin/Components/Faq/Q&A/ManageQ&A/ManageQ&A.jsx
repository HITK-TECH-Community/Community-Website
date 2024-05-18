import { useEffect, useState } from "react";
import { END_POINT } from "../../../../../../config/api";
import style from "./manage.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { SimpleToast } from "../../../../../../components/util/Toast/Toast";
import Loader from "../../../../../../components/util/Loader";

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
  const [toogle, setToogle] = useState(false);
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
    try {
      const qUrl = `${END_POINT}/question/getQuestionById/${id}`;
      const qResponse = await fetch(qUrl);
      const qRes = await qResponse.json();
      setQns(qRes);
      setToast({
        ...toast,
        toastMessage: "Successfully get Question",
        toastStatus: true,
        toastType: "success",
      });
    } catch (error) {
      console.log(error);
      setIsLoaded(false);
      setToast({
        ...toast,
        toastMessage: "Check network failed to fetch",
        toastStatus: true,
        toastType: "error",
      });
    }
  };

  const handleOpenConfirmModal = (id) => {
    setConfirmDelete(true);
    setQuestionToDelete(id);
  };

  const handleCloseConfirmModal = () => {
    setConfirmDelete(false);
  };

  const handleDeleteAnswer = async (answerId) => {
    try {
      const url = `${END_POINT}/answers/deleteanswer`;
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ answerId }),
      });

      const data = await response.json();
      setToast({
        ...toast,
        toastMessage: "Successfully deleted answer",
        toastStatus: true,
        toastType: "success",
      });
      setToogle(!toogle);
    } catch (error) {
      console.log(error);
      setToast({
        ...toast,
        toastMessage: "Unable to delete answer",
        toastStatus: true,
        toastType: "error",
      });
    }
  };

  const handleDeleteQuestion = async () => {
    try {
      const url = `${END_POINT}/question/deletequestion`;
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ questionId: questionToDelete }),
      });

      const data = await response.json();
      setToast({
        ...toast,
        toastMessage: "Successfully deleted question",
        toastStatus: true,
        toastType: "success",
      });
      setTab(18);
      setToogle(!toogle);
    } catch (error) {
      console.log(error);
      setToast({
        ...toast,
        toastMessage: "Unable to delete question",
        toastStatus: true,
        toastType: "error",
      });
    }
  };

  const updateQuestion = async (id, status) => {
    try {
      const qUrl = `${END_POINT}/question/updateStatus`;
      const qResponse = await fetch(qUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ id: id, status: status }),
      });
      const qRes = await qResponse.json();
      setToogle(!toogle);
      setToast({
        ...toast,
        toastMessage: "Updated Successfully!",
        toastStatus: true,
        toastType: "success",
      });
    } catch (error) {
      console.log(error);
      setToast({
        ...toast,
        toastMessage: "Check network failed to update",
        toastStatus: true,
        toastType: "error",
      });
    }
  };

  const getAnswer = async (questionId) => {
    try {
      const aUrl = `${END_POINT}/answers/${questionId}`;
      const aResponse = await fetch(aUrl);
      const aRes = await aResponse.json();
      setAns(aRes.data);
      setIsLoaded(false);
      setToast({
        ...toast,
        toastMessage: "Successfully get answers",
        toastStatus: true,
        toastType: "success",
      });
    } catch (error) {
      console.log(error);
      setIsLoaded(false);
      setToast({
        ...toast,
        toastMessage: "Check network failed to fetch",
        toastStatus: true,
        toastType: "error",
      });
    }
  };

  const updateAnswer = async (id, status) => {
    try {
      const aUrl = `${END_POINT}/answers/updateStatus`;
      const aResponse = await fetch(aUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ id: id, status: status }),
      });
      const aRes = await aResponse.json();
      setToogle(!toogle);
      setToast({
        ...toast,
        toastMessage: "Updated successfully",
        toastStatus: true,
        toastType: "success",
      });
    } catch (error) {
      console.log(error);
      setToast({
        ...toast,
        toastMessage: "Check network failed to Update",
        toastStatus: true,
        toastType: "error",
      });
    }
  };

  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToast({ ...toast, toastStatus: false });
  };

  useEffect(() => {
    getQuestion(qId);
    getAnswer(qId);
  }, [toogle]);

  return (
    <div>
      <h1 className={style["head"]}>Manage Q&A</h1>
      <div className={style["back"]}>
        <AiOutlineArrowLeft size={"35px"} onClick={() => setTab(18)} />
      </div>
      <div className={style["data-loader"]}>{isLoaded ? <Loader /> : null}</div>
      {isLoaded || (
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
                    className={
                      qns?.isApproved
                        ? style["button-delete"]
                        : style["button-approve"]
                    }
                    id={`${qns?._id}`}
                    onClick={(e) => {
                      updateQuestion(e.currentTarget.id, !qns?.isApproved);
                    }}
                  >
                    {qns?.isApproved ? "Reject" : "Approve"}
                  </button>
                  <button
                    name={`${qns?._id}`}
                    onClick={(e) =>
                      handleOpenConfirmModal(e.currentTarget.name)
                    }
                    className={style["button-delete"]}
                  >
                    Delete
                  </button>
                </div>
                <div style={{ display: "flex", padding: "10px 30px 10px 30px" }}>
                {qns?.tags?.map((tag) => (
                  <p className={style["tags"]}>{tag}</p>
                ))}
              </div>
              </div>
              
            </div>
          </div>
          </div>
          <h1 className={style["head"]}>Answers</h1>

          {ans?.length === 0 ? (
            <span>No answers Found</span>
          ) : (
            <div className={ans?.length==1?style["question"]:style["answer"]}>
              {ans?.map((a) => (
              <div className={style["card-item"]}>
                <div className={style["card-info"]}>
                  <div className={style["answerBox"]}>
                    <h3 className={style["card-answer"]}>{a.answer}</h3>
                    <div className={style["button-group"]}>
                      <button
                        className={
                          a?.isApproved
                            ? style["button-delete"]
                            : style["button-approve"]
                        }
                        id={`${a?._id}`}
                        onClick={(e) => {
                          updateAnswer(e.currentTarget.id, !a?.isApproved);
                        }}
                      >
                        {a?.isApproved ? "Reject" : "Approve"}
                      </button>
                      <button
                        name={`${a?._id}`}
                        onClick={(e) =>
                          handleDeleteAnswer(e.currentTarget.name)
                        }
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
        </>
      )}
      {
        <Modal
          open={confirmDelete}
          onClose={handleCloseConfirmModal}
          className={classes.modal}
        >
          <div className={classes.paper}>
            <Typography variant="h6" component="h2">
              Confirm Delete
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Are you sure you want to delete this question and all its answers?
            </Typography>
            <div className={classes.buttons}>
              <Button
                onClick={handleDeleteQuestion}
                variant="contained"
                color="secondary"
              >
                Confirm
              </Button>
              <Button
                onClick={handleCloseConfirmModal}
                variant="contained"
                color="primary"
              >
                Cancel
              </Button>
            </div>
          </div>
        </Modal>
      }
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
