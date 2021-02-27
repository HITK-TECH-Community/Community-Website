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
import style from "./drop-menu.module.scss";

const useStyles = makeStyles((theme) => ({
  button: {
    fontFamily: '"Futura LT Book", sans-serif',
    textAlign: "center",
    transition: "0.5s",
    backgroundSize: "200% auto",
    color: "white",
    boxShadow: "0 0 20px #eee",
    borderRadius: "10px",
    padding: "8px 20px",
    outline: "none",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    backgroundImage: "linear-gradient(to right, #FF7052, #FDAB48, #FCC006)",
    "&:hover": {
      backgroundPosition: "right center",
      color: "#fff",
      transform: "scale(1.1)",
      textDecoration: "none",
    },
    "&:focus": {
      outline: "none !important",
    },
  },
  menuList: {
    minWidth: 115,
    zIndex: 3,
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

export function DropMenu(props) {
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
    <div className={style["root"]}>
      <Button
        text={props.ListName}
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
