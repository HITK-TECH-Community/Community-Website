import React, { useEffect, useState } from "react";
import { Modal, Backdrop, Fade } from '@material-ui/core';
import { SimpleToast } from '../../../components/util/Toast'
import { postAnswer, getAnswers,upvoteAnswer,downvoteAnswer } from '../../../service/Faq'
import style from './AnswerModel.scss'

export function AnswerModel(props) {
    let dark=props.theme
    const [answer, setAnswer] = useState("")
    const [author, setAuthor] = useState("")
    const [answers, setAnswers] = useState([])
    const[maxUpvote,setMaxUpvote]=useState(0)
    const [toast, setToast] = useState({
        toastStatus: false,
        toastType: "",
        toastMessage: "",
    });
    const filterAnswers = (fetchedAnswers) => {
        return fetchedAnswers.filter((ans) => { return ans.isApproved == true })
    }
    async function fetchAnswers() {
        const data = await getAnswers(props.data._id, setToast)
        setMaxUpvote(data.map(function(o) { return o.upvotes; }).sort().reverse()[0])
        setAnswers(filterAnswers(data))
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
    const Tags = [
        { value: "ml" },
        { value: "open-source" },
        { value: "deap-learning" },
        { value: "cp" },
        { value: "block-chain" },
        { value: "mern" },
        { value: "android" },
        { value: "mean" },
        { value: "javascript" },
        { value: "java" },
        { value: "c++" },
        { value: "python" },
    ];
    function handleSubmit(e) {
        e.preventDefault()
        if (answer != "" && author != "") {
            let data = { question_id: props.data._id, answer, created_on: new Date(), created_by: author }
            postAnswer(data, setToast)
            setAnswer("")
            setAuthor("")
            props.handleClose(false)
        } else {
            setToast({ toastStatus: true, toastMessage: "Please fill both the fields", toastType: "error" })
        }
    }
    const handleUpvote=async(answerId)=>{
        await upvoteAnswer(answerId,setToast)
        fetchAnswers()
    }
    const handleDownvote=async(answerId)=>{
        await downvoteAnswer(answerId,setToast)
        fetchAnswers()
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
                                setAnswer("")
                                props.handleClose(false)
                            }}>
                                <i class="fas fa-times close-icon" style={{ color: dark && "white"}}></i>
                            </span>
                        </div>
                        <h2 className="ques-title" style={{ color: dark && "#69a9dd"}}>{props.data?.title}</h2>
                        <p className="ques-description" style={{ color: dark && "white"}}>{props.data?.description}</p>
                        <div className="tag-container" style={{ color: dark && "white"}}>
                            {
                                props && props.data?.tags?.map((tag, index) => {
                                    if (tag)
                                        return (
                                            <p key={index}>#{tag}</p>
                                        )
                                })
                            }
                        </div>
                        <form className="answer-form" onSubmit={handleSubmit}>
                            <input className="answer-field" onChange={(e) => { setAuthor(e.target.value) }} value={author} type="text" placeholder="Your Name" />
                            <input className="answer-field" onChange={(e) => { setAnswer(e.target.value) }} value={answer} type="text" placeholder="Post your answer" />
                            <button className="post-answer-btn" style={{ backgroundColor: dark && "#69a9dd",color:dark&&"#000"}}>Post</button>
                        </form>
                        <h3 className="answer-title" style={{ color: dark && "#69a9dd"}}>Answers ({answers.length})</h3>
                        {
                            answers.length == 0 ?
                                <p style={{ color: dark && "white"}}>No answers found...</p>
                                :
                                <div>
                                    {
                                        answers.map((ans, index) => {
                                            return (
                                                <div className="answer-container" style={{ color: dark && "white"}}>
                                                    <div className="answer-header">
                                                        <h5>{ans.created_by || "Anonymous"}</h5>
                                                        <p>{timeStampFormatter(ans.created_on)}</p>
                                                        {(maxUpvote!=0&&maxUpvote==ans.upvotes)&&<p className="most-relevant-label" style={{ backgroundColor: dark && "#69a9dd",color:dark&&"#fff"}}>Most relevant</p>}
                                                    </div>
                                                    <p>{ans.answer}</p>
                                                    <div>
                                                        <button
                                                            className="vote-btn"
                                                            onClick={() => handleUpvote(ans._id)}
                                                        >
                                                            👍{ans.upvotes||0}
                                                        </button>
                                                        <button
                                                            className="vote-btn"
                                                            onClick={() => handleDownvote(ans._id)}
                                                        >
                                                            👎 {ans?.downvotes||0}
                                                        </button>
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
