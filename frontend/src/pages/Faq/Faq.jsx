import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import style from "./faq.module.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "65%",
    margin: "1rem auto",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  accord: {
    background:
      "linear-gradient(45deg, rgba(255, 0, 90, 1) 0%, rgba(10, 24, 61, 1) 90%)",
    margin: "8px 0",
    borderRadius: 10,
    "&:hover": {
      background: "#016795",
      transition: "all 0.3s ease-in-out",
    },
  },
}));

export function Faq() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={style["faq-container"]}>
      <div className={style["head"]}>
        <img
          src="./images/faq.png"
          className={style["faq-image"]}
          alt="faq-icon"
        />
      </div>
      <div className={style["faq"]}>
        <div className={style["faq-block"]}>
          <Accordion
            className={classes.accord}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              style={{ color: "white" }}
              expandIcon={
                <ExpandMoreIcon style={{ color: "white", fontSize: "27px" }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h3 className={style["faq-question"]}>
                <i className="fa fa-question-circle" aria-hidden="true"></i>
                &nbsp; &nbsp;How to contact with customer service?
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ color: "white" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className={classes.accord}
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              style={{ color: "white" }}
              expandIcon={
                <ExpandMoreIcon style={{ color: "white", fontSize: "27px" }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h3 className={style["faq-question"]}>
                <i className="fa fa-question-circle" aria-hidden="true"></i>
                &nbsp; &nbsp;How to delete my account?
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ color: "white" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className={classes.accord}
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              style={{ color: "white" }}
              expandIcon={
                <ExpandMoreIcon style={{ color: "white", fontSize: "27px" }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h3 className={style["faq-question"]}>
                <i className="fa fa-question-circle" aria-hidden="true"></i>
                &nbsp; &nbsp;Where is edit option on dashboard?
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ color: "white" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className={classes.accord}
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              style={{ color: "white" }}
              expandIcon={
                <ExpandMoreIcon style={{ color: "white", fontSize: "27px" }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h3 className={style["faq-question"]}>
                <i className="fa fa-question-circle" aria-hidden="true"></i>
                &nbsp; &nbsp;Is there any custom pricing system?
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ color: "white" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className={classes.accord}
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              style={{ color: "white" }}
              expandIcon={
                <ExpandMoreIcon style={{ color: "white", fontSize: "27px" }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h3 className={style["faq-question"]}>
                <i className="fa fa-question-circle" aria-hidden="true"></i>
                &nbsp; &nbsp;How to change my password?
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ color: "white" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
