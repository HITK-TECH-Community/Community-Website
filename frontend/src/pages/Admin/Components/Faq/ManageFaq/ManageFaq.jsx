import React from "react"
import { useEffect, useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { END_POINT } from "../../../../../config/api";
import Loader from "../../../../../components/util/Loader";
import style from "./manage-faq.module.scss"
export function ManageFaq() {
    const [faqs, setFaqs] = useState([]);
    const [expanded, setExpanded] = React.useState(false);
    const [isFetching, setIsFetching] = useState(false)
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    async function fetchAllFaq() {
        try {
            const response = await fetch(`${END_POINT}/getFaq`);
            const data = await response.json();
            console.log(data)
            setFaqs(data.Faq)
            setIsFetching(false)
        }
        catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        setIsFetching(true)
        fetchAllFaq()
    }, [])

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Manage FAQ</h1>
            <div className={style["faq"]}>
                <div className={`${style["faq-block"]} ${style["faq-block-dark"]}`}>
                    {isFetching ? (
                        <Loader></Loader>
                    ) : (
                        faqs.map((faq) => (
                            <Accordion
                                key={faq._id}
                                className={style["accord-dark"]}
                                expanded={expanded === `panel1-${faq._id}`}
                                onChange={handleChange(`panel1-${faq._id}`)}
                            >
                                <AccordionSummary
                                    style={{ color: "white" }}
                                    expandIcon={
                                        <ExpandMoreIcon
                                            style={{ color: "white", fontSize: "27px" }}
                                        />
                                    }
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <h3 className={style["faq-question"]}>
                                        <i
                                            className="fa fa-question-circle"
                                            aria-hidden="true"
                                        ></i>
                                        &nbsp; &nbsp;{faq.question}
                                    </h3>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{ color: "white" }}>
                                        {faq.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}