import React, { useState } from "react";
import { Modal, Backdrop, Fade } from '@material-ui/core';
import { SimpleToast } from '../../../components/util/Toast'
import {postAnswer} from '../../../service/Faq'
import style from './AnswerModel.scss'

export function AnswerModel(props) {
    const [answer, setAnswer] = useState("")
    const [toast, setToast] = useState({
        toastStatus: false,
        toastType: "",
        toastMessage: "",
    });
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
        if(answer!=""){
            let data={question_id:props.data._id,answer,created_on:new Date(),created_by:"Anonymous"}
            postAnswer(data,setToast)
            setAnswer("")
            props.handleClose(false)
        }else{
            setToast({toastStatus:true,toastMessage:"Please enter your answer",toastType:"error"})
        }
    }
    return (
        <div>
            {toast.toastStatus && (
                <SimpleToast
                    open={toast.toastStatus}
                    message={toast.toastMessage}
                    handleCloseToast={()=>{setToast({toastMessage:"",toastStatus:false,toastType:""})}}
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
                    <div className={"modal-container"}>
                        <div className="close-icon-container">
                            <span onClick={() => { 
                                setAnswer("")
                                props.handleClose(false)
                             }}>
                                <i class="fas fa-times close-icon"></i>
                            </span>
                        </div>
                        <h2 className="ques-title">{props.data?.title}</h2>
                        <p className="ques-description">{props.data?.description}</p>
                        <div className="tag-container">
                            {
                                props && props.data?.tags?.map((tag, index) => {
                                    if (tag)
                                        return (
                                            <p key={index}>#{Tags[index].value}</p>
                                        )
                                })
                            }
                        </div>
                        <form className="answer-form" onSubmit={handleSubmit}>
                            <input className="answer-field" onChange={(e) => { setAnswer(e.target.value) }} value={answer} type="text" placeholder="Post your answer" />
                            <button className="post-answer-btn">Post</button>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}
