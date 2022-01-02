import React, { useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import style from "./faq.module.scss";
import { END_POINT } from "../../config/api";
import { SimpleToast } from "../../components/util/Toast";

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
    margin: "12px 0",
    borderRadius: 10,
    "&:hover": {
      background: "#016795",
      transition: "all 0.3s ease-in-out",
    },
  },
}));

export function Faq(props) {
  let dark = props.theme;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [faqs, setFaqs] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(true);
  const [error, setError] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError(false);
  };

  const fetchFaqs = () => {
    fetch(`${END_POINT}/getFaq`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) =>
        response.json().then((res) => {
          if (response.status === 200) {
            setFaqs(res.Faq);
            setIsFetching(false);
          } else {
            setFaqs([]);
            setIsFetching(false);
            setError(true);
          }
        })
      )
      .catch((err) => {
        setFaqs([]);
        setIsFetching(false);
        setError(true);
        console.error("Unexpected Error occured: ", err);
      });
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  return (
    <>
      <div
        className={
          dark
            ? `${style["faq-container"]} ${style["dark"]}`
            : `${style["faq-container"]}`
        }
      >
        <div
          className={
            dark
              ? `${style["head"]} ${style["head-dark"]}`
              : `${style["head"]} ${style["head-dark"]}`
          }
        >
          <img
            src="./images/FAQ2.png"
            className={style["faq-image"]}
            alt="faq-icon"
          />
        </div>
        <div className={style["faq"]}>
          <div
            className={
              dark
                ? `${style["faq-block"]} ${style["faq-block-dark"]}`
                : `${style["faq-block"]} ${style["faq-block-light"]}`
            }
          >
            {isFetching ? (
              <Typography variant="h6" align="center" style={{color:"white"}}>
                Please wait while we fetching FAQs
              </Typography>
            ) : (
              faqs.map((faq) => (
                <Accordion
                  key={faq._id}
                  className={
                    dark ? `${style["accord-dark"]}` : `${classes.accord}`
                  }
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
      <SimpleToast
        open={error}
        severtiy="error"
        message="Please try again later"
        handleCloseToast={handleCloseToast}
      ></SimpleToast>
    </>
  );
}
