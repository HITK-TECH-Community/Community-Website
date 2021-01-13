import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 180,
    boxShadow: '7px 0px 5px -3px rgba(47,47,47,0.5), 0px 8px 7px -3px rgba(47,47,47,0.5), -7px 0px 5px -3px rgba(47,47,47,0.5)'
    
    
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  Button_Font_size: {
    width: "1px",
  },
  Bottom_Boxes_paper2: {
    height: '17.5em',
    borderRadius: '10px',
    width: '200px',
    backgroundColor: '#016795',
    borderradius: '4px',
    position: 'relative',
    [theme.breakpoints.down("md")]: {
      width: "168px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "138px",
      
    },
    [theme.breakpoints.down("497")]: {
      width: "158px",
      height: "16.5em",
    },
    [theme.breakpoints.down("457")]: {
      width: "138px",
      height: "16.5em",
    },
    [theme.breakpoints.down("427")]: {
      width: "138px",
      height: "16.5em",
    },
    [theme.breakpoints.down("411")]: {
      width: "148px",
      height: "16.5em",
    },
    [theme.breakpoints.down("385")]: {
      width: "168px",
      height: "16.5em",
    },
    [theme.breakpoints.down("366")]: {
      marginTop:'15px',
      width: "158px",
      height: "15.5em",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
  paper: {
    backgroundColor: "black",
    color: "white",
    
  },
  backDrop: {
    background: "rgba(255,255,255,0.2)",
    opacity: "0.42",
  },
  text: {
    marginLeft: "500px",
    marginRight: "100px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "480px",
      marginRight: "100px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "230px",
      marginRight: "100px",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "180px",
      marginRight: "0px",
    },
  },
  heading: {
    fontSize: "19px",
    color: "white",
    marginLeft: "4px",
    fontWeight: "bold",
    [theme.breakpoints.down("457")]: {
      fontSize: "10px",
    },
    [theme.breakpoints.down("427")]: {
      fontSize: "8px",
    },
    [theme.breakpoints.down("411")]: {
      fontSize: "10px",
    },
  }
}));

const styles = (theme) => ({
  root: {
    margin: 0,

    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),

    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function OutlinedCard() {
  const [open, setOpen] = React.useState(false);
  const [maxWidth, setMaxWidth] = React.useState("md");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();

  const smMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const classes = useStyles();
  return (
    <div className={classes.Bottom_Boxes_paper2}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
          onClick={handleClickOpen}
        >
          <span className={classes.heading}>
            Word of the Day
          </span>
          <p style={{color: 'white'}}>
            Word of the Day Word of the Day Word of the Day Word of the Day Word
            of the Day Word of the Day Word of the Day Word of the Day Word of
            the of the Day Word of the Day Word of the Day Word of the Day Word
            of the of the Day Word of the Day Word of the Day Word
          </p>
        </Typography>
        <div>
          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            maxWidth={maxWidth}
            classes={{ paper: styles.paper }}
            BackdropProps={{
              classes: {
                root: classes.backDrop,
              },
            }}
          >
            <DialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
              style={{
                backgroundColor: "#8A2BE2",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              <h2> IBMZ-4-GOOD IDEATHON </h2>
            </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                <div className={classes.text}>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros. Cras
                  mattis consectetur purus sit amet fermentum. Cras justo odio,
                  dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                  porta ac consectetur ac, vestibulum at eros. Cras mattis
                  consectetur purus sit amet fermentum. Cras justo odio, dapibus
                  ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                  consectetur ac, vestibulum at eros. Cras mattis consectetur
                  purus sit amet fermentum. Cras justo odio, dapibus ac
                  facilisis in, egestas eget quam. Morbi leo risus, porta ac
                  consectetur ac, vestibulum at eros. in, egestas eget quam.
                  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                  in, egestas eget quam. Morbi leo risus, porta ac consectetur
                  ac, vestibulum at eros.
                </div>
                <img
                  style={{
                    width: !smMatch ? "250px" : "150px",
                    height: !smMatch ? "250px" : "150px",
                    position: "absolute",
                    top: "100px",
                    left: "30px",
                  }}
                  alt=""
                  src="./images/ken.jpg"
                />
              </Typography>
            </DialogContent>
            <DialogContent dividers style={{ backgroundColor: "#8A2BE2" }}>
              <h1 style={{ color: "white", textAlign: "center" }}> Link </h1>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </div>
  );
}
