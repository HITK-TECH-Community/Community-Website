import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

import style from "./toast.module.scss";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

/**
 * 
 * @template stateChange : for open/close state of the Toast message. Put this template in parent component.
 
  const [open, setOpenToast] = React.useState(false);

  const openToast = () => {
    setOpenToast(true);
  };

  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenToast(false);
  };

  ...
  return(
    <SimpleToast
      open={open}
      severity={['info' | 'success' | 'warning' | 'error']}
      message={'some string'}
      handleCloseToast={handleCloseToast}
    />
  )

 * @param {open} props (boolean) : open/close state of the Toast message
 * @param {severity} props (string): 4 possible values: info, success, warning, error
 * @param {message} props (string): Toast message
 * @param {handleCloseToast} props (function): closes the toast
 */

  const useStyles = makeStyles(theme => ({
    root: {
      "& button": {
        outline : 'none',
      },
    },
  }));

export function SimpleToast(props) {
  const classes = useStyles();

  return (
    <div className={`${style["root"]} ${classes.root}`}>
      <Snackbar open={props.open} autoHideDuration={3000} onClose={props.handleCloseToast}>
        <Alert severity={props.severity || "info"} onClose={props.handleCloseToast}>
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
