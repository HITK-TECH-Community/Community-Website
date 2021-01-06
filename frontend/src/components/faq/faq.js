import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./faq.css";

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
}));

export default function Faqs() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div class="faq-container">
      <div className="head"> Frequently Asked Questions </div>
      <div className="faq">
        <img src="./images/faq.png" className="faq-image" />
        <div className="faq-block">
          <Accordion className="accord">
            <AccordionSummary
              style={{ color: "white" }}
              expandIcon={
                <ExpandMoreIcon style={{ color: "white", fontSize: "27px" }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h3 className="faq-question">
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
          <Accordion className="accord">
            <AccordionSummary
              style={{ color: "white" }}
              expandIcon={
                <ExpandMoreIcon style={{ color: "white", fontSize: "27px" }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h3 className="faq-question">
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
          <Accordion className="accord">
            <AccordionSummary
              style={{ color: "white" }}
              expandIcon={
                <ExpandMoreIcon style={{ color: "white", fontSize: "27px" }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h3 className="faq-question">
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
          <Accordion className="accord">
            <AccordionSummary
              style={{ color: "white" }}
              expandIcon={
                <ExpandMoreIcon style={{ color: "white", fontSize: "27px" }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h3 className="faq-question">
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
          <Accordion className="accord">
            <AccordionSummary
              style={{ color: "white" }}
              expandIcon={
                <ExpandMoreIcon style={{ color: "white", fontSize: "27px" }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h3 className="faq-question">
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
