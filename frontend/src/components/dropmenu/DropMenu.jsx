import React, { useState, useRef } from "react";
import {
  makeStyles,
  Button,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    borderRadius: 8,
    margin: "0 10px",
    outline: "none !important",
    "& span": {
      fontSize: "16px !important",
      top: 0,
    },
    "&:focus": {
      outline: "none !important",
    },
  },
  button: {
    color: "#4A80DB",
    padding: "6px 8px",
    "&:focus": {
      outline: "none !important",
    },
  },
  menuList: {
    minWidth: 115,
  },
  menuListItem: {
    color: "#24385B",
    margin: "2px 7px",
    borderRadius: 8,
    "&:hover": {
      backgroundColor: "#D8E6FF",
      color: "#4A80DB",
    },
  },
}));

export default function MenuListComposition(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <Button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        className={classes.button}
      >
        {props.ListName}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  className={classes.menuList}
                  onKeyDown={handleListKeyDown}
                >
                  {props.ListItems.map((listItem, index) => (
                    <MenuItem
                      key={index}
                      onClick={handleClose}
                      className={classes.menuListItem}
                    >
                      {listItem}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}