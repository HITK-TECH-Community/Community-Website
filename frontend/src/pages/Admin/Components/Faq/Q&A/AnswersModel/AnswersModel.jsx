import React, { useEffect, useState } from "react";
import { Modal, Backdrop, Fade } from '@material-ui/core';
import { SimpleToast } from "../../../../../../components/util/Toast";
import { getAnswers, updateAnswerStatus, deleteAnswer } from "../../../../../../service/Faq";
import style from './AnswersModel.scss'

export function AnswersModel(props) {
    let dark = props.theme
    const [answers, setAnswers] = useState([])
    const [toast, setToast] = useState({
        toastStatus: false,
        toastType: "",
        toastMessage: "",
    });
    async function fetchAnswers() {
        const data = await getAnswers(props.data._id, setToast)
        setAnswers(data)
    }
    const updateAnswer = async (id, status) => {
        setToast({ toastStatus: true, toastMessage: "Loading...", toastType: "info" })
        await updateAnswerStatus(id, status, setToast);
        fetchAnswers()
    }
    const handleDeleteAnswer = async (answerId) => {
        setToast({ toastStatus: true, toastMessage: "Loading...", toastType: "info" })
        await deleteAnswer(answerId, setToast)
        fetchAnswers()
    }
    useEffect(() => {
        if (props.open)
            fetchAnswers()
    }, [props])
    function timeStampFormatter(time) {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const messageTime = new Date(time)
        return `${String(messageTime.getDate())} ${String(months[messageTime.getMonth()])} ${String(messageTime.getFullYear())}`
    }
    return (
        <div>
            {toast.toastStatus && (
                <SimpleToast
                    open={toast.toastStatus}
                    message={toast.toastMessage}
                    handleCloseToast={() => { setToast({ toastMessage: "", toastStatus: false, toastType: "" }) }}
                    severity={toast.toastType}
                />
            )}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className="modal"
                open={props.open}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <div className={"modal-container"} style={{ background: dark ? "#171717" : "white" }}>
                        <div className="close-icon-container">
                            <span onClick={() => {
                                setToast({ toastMessage: "", toastStatus: false, toastType: "" })
                                props.handleClose(false)
                            }}>
                                <i class="fas fa-times close-icon" style={{ color: dark && "white" }}></i>
                            </span>
                        </div>
                        {
                            answers.length == 0 ?
                                <p style={{ color: dark && "white" }}>No answers found...</p>
                                :
                                <div>
                                    {
                                        answers.map((ans, index) => {
                                            return (
                                                <div className="answer-container" style={{ color: dark && "white" }}>
                                                    <div className="answer-header">
                                                        <h5>{ans.created_by || "Anonymous"}</h5>
                                                        <p>{timeStampFormatter(ans.created_on)}</p>
                                                    </div>
                                                    <p>{ans.answer}</p>
                                                    <div className={"button-group"}>
                                                        {
                                                            ans.isApproved ?
                                                                <button
                                                                    name={`${ans?._id}`}
                                                                    onClick={(e) => handleDeleteAnswer(e.currentTarget.name)}
                                                                    className={"button-delete"}
                                                                >
                                                                    Delete
                                                                </button>
                                                                :
                                                                <>
                                                                    <button
                                                                        className={"button-delete"}
                                                                        id={`${ans?._id}`}
                                                                        onClick={(e) => handleDeleteAnswer(e.currentTarget.id)}
                                                                    >
                                                                        Reject
                                                                    </button>
                                                                    <button
                                                                        className={"button-approve"}
                                                                        id={`${ans?._id}`}
                                                                        onClick={(e) => updateAnswer(e.currentTarget.id, true)}
                                                                    >
                                                                        Approve
                                                                    </button>
                                                                </>

                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                        }
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}
