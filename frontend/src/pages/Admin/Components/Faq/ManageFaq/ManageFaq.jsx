import React from "react";
import React from "react";
import { useEffect, useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Edit, Delete } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import { Edit, Delete } from "@material-ui/icons";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { END_POINT } from "../../../../../config/api";
import Loader from "../../../../../components/util/Loader";
import style from "./manage-faq.module.scss";
import { SimpleToast } from "../../../../../components/util/Toast";

export function ManageFaq() {
  const [faqs, setFaqs] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [open, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [severity, setSeverity] = useState("success");
  const [reload, setReload] = useState(true);
  const handleCloseToast = () => {
    setTimeout(() => {
      setOpenToast(false);
    }, 500);
  };
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  async function fetchAllFaq() {
    try {
      const response = await fetch(`${END_POINT}/faq/getFaq`);
      const data = await response.json();
      console.log(data);
      setFaqs(data.Faq);
      setIsFetching(false);
    } catch (err) {
      console.log(err.message);
      setIsFetching(false);
    }
  }

  const deleteFaq = async (faqId) => {
    setIsFetching(true);
    const url = `${END_POINT}/faq/deleteFaq`;
    const body = {
      faqId: faqId,
    };
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setToastMessage(data.message);
      setOpenToast(true);
      setSeverity("success");
      setReload(!reload);
    } catch (error) {
      setToastMessage("Failed to delete Faq");
      setOpenToast(true);
      setSeverity("error");
    } finally {
      setIsFetching(false);
    }
  };
  useEffect(() => {
    fetchAllFaq();
  }, [reload]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Manage FAQ</h1>
      <div className={style["faq"]}>
        <div className={`${style["faq-block"]}`}>
          {isFetching ? (
            <Loader />
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
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <h3 className={style["faq-question"]}>
                      <i
                        className="fa fa-question-circle"
                        aria-hidden="true"
                      ></i>
                      &nbsp; &nbsp;{faq.question}
                    </h3>
                  </div>
                </AccordionSummary>
                <AccordionDetails className={style["accord-details"]}>
                  <Typography style={{ color: "white" }}>
                    {faq.answer}
                  </Typography>
                  <div className={style["btns-container"]}>
                    <Button
                      id={style["update-btn"]}
                      className={style["btns"]}
                      variant="contained"
                      endIcon={<Edit />}
                    >
                      UPDATE
                    </Button>
                    <Button
                      id={style["delete-btn"]}
                      className={style["btns"]}
                      variant="contained"
                      endIcon={<Delete />}
                      onClick={() => deleteFaq(faq._id)}
                    >
                      DELETE
                    </Button>
                  </div>
                </AccordionDetails>
              </Accordion>
            ))
          )}
        </div>
      </div>
      <SimpleToast
        open={open}
        message={toastMessage}
        severity={severity}
        handleCloseToast={handleCloseToast}
      />
    </div>
  );
}
