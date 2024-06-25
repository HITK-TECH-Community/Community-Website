import React, { useState } from "react";
import style from "./edit.module.scss";
import { Button2 } from "../../../../../components/util/Button/index";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { SimpleToast } from "../../../../../components/util/Toast";
import { UpdateBoardCast } from "../../../../../service/Broadcast.jsx";

export function Edit(props) {
  const [toast, setToast] = useState({
    toastStatus: false,
    toastType: "",
    toastMessage: "",
  });

  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToast({ ...toast, toastStatus: false });
    props.setVisible(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    props.handleChange({ target: { name, value } });
  };

  const handleContentChange = (content) => {
    props.handleChange({ target: { name: 'content', value: content } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = props;
    const newData = {
      id: data._id,
      content:data.content,
      link: data.link,
      expiresOn: data.expiresOn,
      imageUrl: data.imageUrl,
      tags: data.tags,
      isApproved: data.isApproved,
      title: data.title,
    };

   try {
      await UpdateBoardCast(newData,setToast, toast);
      setToast({
        toastStatus: true,
        toastType: "success",
        toastMessage: "Broadcast updated successfully!",
      });
    } catch (error) {
      console.error("Error updating broadcast:", error);
      setToast({
        toastStatus: true,
        toastType: "error",
        toastMessage: "Failed to update broadcast. Please try again.",
      });
    }
  };

  const { visible, data} = props;
  let dark = props.theme;

  return visible ? (
    <div className={style["popup"]}>
      <div  className={
            dark
              ? `${style["card"]} ${style["card-dark"]} `
              : `${style["card"]} ${style["card-light"]}`
          }>
        <form className={style["editor"]} onSubmit={handleSubmit}>
          <div className={style["motive"]}>
            <h1 className={
              dark
                ? `${style["header-text"]} ${style["header-text-dark"]} `
                : `${style["header-text"]} ${style["header-text-light"]}`
            }>Edit Broadcast</h1>
            <div className={
                  dark 
                    ? `${style.dash} ${style["dash-dark"]}` 
                    : `${style.dash} ${style["dash-light"]}`
            } />
          </div>
          <div>
            <div className={
                  dark
                    ? `${style["input"]} ${style["input-dark"]} `
                    : `${style["input"]} ${style["input-light"]}`
                }>
              <input
                type="text"
                name="title"
                // className={style["form-control-input"]}
                placeholder="Title"
                value={data.title}
                onChange={handleInputChange}
              />
              <i className="fas fa-pencil-alt" />
            </div>
          </div>
          <div>
            <div className={
                  dark
                    ? `${style["input"]} ${style["input-dark"]} `
                    : `${style["input"]} ${style["input-light"]}`
                }>
              <SunEditor
                name="content"
                placeholder="Description"
                setContents={data.content}
                onChange={handleContentChange} 
                height="100px"
                className={style["edit"]}
                onSetContents={(content) =>
                  handleInputChange({ target: { name: "content", value: content } })
                }
              />
            </div>
          </div>
          <div>
            <div className={
                  dark
                    ? `${style["input"]} ${style["input-dark"]} `
                    : `${style["input"]} ${style["input-light"]}`
                }>
              <input
                type="text"
                name="link"
                placeholder="Resource Link"
                value={data.link}
                onChange={handleInputChange}
              />
              <i className="fas fa-link" />
            </div>
          </div>
          <div className={style["submit-btn"]}>
            <Button2
              className={style["submit-btn-text"]}
              label="Update"
              type="submit"
            />
            <Button2
              className={style["submit-btn-text"]}
              label="Cancel"
              type="button"
              onClick={() => props.setVisible(false)}
            />
          </div>
        </form>
      </div>
      {toast.toastStatus && (
        <div className={style["toast-overlay"]}>
          <SimpleToast
            open={toast.toastStatus}
            message={toast.toastMessage}
            handleCloseToast={handleCloseToast}
            severity={toast.toastType}
          />
        </div>
      )}
    </div>
  ) : null;
}