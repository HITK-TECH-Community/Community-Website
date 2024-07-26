import React, { useEffect, useState, useRef } from "react";
import SunEditor from "suneditor-react";
import style from "./edit.module.scss";
import styles from "../../../../Admin/Components/Broadcast/AddBroadcasts/add-broadcasts.module.scss";
import { formatTag } from "../../../../../components/util/Tags";
import { SimpleToast } from "../../../../../components/util/Toast";
import { UpdateBoardCast } from "../../../../../service/Broadcast";
import CloseIcon from "@material-ui/icons/Close";
import moment from "moment";

export function Edit(props) {
  const [a, seta] = useState();
  const [broadcast, setBroadcast] = useState({});
  const [broadcastContent, setBroadcastContent] = useState("");
  const [tags, setTags] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [isUploadingData, setIsUploadingData] = useState(false);
  const [toast, setToast] = useState({
    toastStatus: false,
    toastType: "",
    toastMessage: "",
  });
  const tagRef = useRef();
  const imageRef = useRef();
  function scrolls() {
    let b = window.scrollY;
    seta(b);
  }
  const onContentChange = (content) => {
    let value = "";
    if (content !== "<p></p>" && content !== "<p><br></p>") {
      value = content;
    }
    setBroadcastContent(value);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrolls);
  }, []);

  useEffect(() => {
    setBroadcast(props?.data);
    setBroadcastContent(props?.data?.content);
    setImageUrls(props?.data?.imageUrl);
    setTags(props?.data?.tags);
  }, [props]);

  const handleChange = (e) => {
    if (e.target.name === "expiresOn")
      setBroadcast({
        ...broadcast,
        [e.target.name]: new Date(e.target.value).toISOString(),
      });
    else setBroadcast({ ...broadcast, [e.target.name]: e.target.value });
  };
  const addTag = () => {
    const tag = formatTag(tagRef.current.value.trim(), "Hyphens");
    if (tag) {
      setTags((prevTags) => [...prevTags, tag]);
      setBroadcast({ ...broadcast, tags: [...broadcast.tags, tag] });
      tagRef.current.value = "";
    }
  };
  const addImageUrl = () => {
    const url = imageRef.current.value;
    if (url.trim()) {
      setImageUrls((prevUrl) => [...prevUrl, url.trim()]);
      setBroadcast({
        ...broadcast,
        imageUrl: [...broadcast.imageUrl, url.trim()],
      });
      imageRef.current.value = "";
    }
  };

  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
    setBroadcast({
      ...broadcast,
      tags: broadcast.tags.filter((t) => t !== tag),
    });
  };
  const removeImageUrl = (url) => {
    setImageUrls(imageUrls.filter((u) => u !== url));
    setBroadcast({
      ...broadcast,
      imageUrl: broadcast.imageUrl.filter((u) => u !== url),
    });
  };
  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToast({ ...toast, toastStatus: false });
  };
  const handleUpdate = async () => {
    setIsUploadingData(true);
    const { _id, imageUrl, tags, title, link, expiresOn, isApproved } =
      broadcast;
    const response = await UpdateBoardCast(
      {
        id: _id,
        imageUrl,
        tags,
        title,
        link,
        expiresOn,
        content: broadcastContent,
        isApproved,
      },
      setToast,
      toast
    );
    if (response) {
      setBroadcast({});
      setTags([]);
      setImageUrls([]);
      props.setVisible(false);
    }
    setIsUploadingData(false);
  };
  let dark = props.theme;
  return props.visible ? (
    <div className={style["popup"]} style={{ top: a }}>
      {toast.toastStatus && (
        <SimpleToast
          open={toast.toastStatus}
          message={toast.toastMessage}
          handleCloseToast={handleCloseToast}
          severity={toast.toastType}
        />
      )}
      <div className={dark ? style["div-dark"] : style["div"]}>
        <h1 className={style["heading"]}>
          Edit modal
          <CloseIcon
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => {
              setBroadcast({});
              props.setVisible(false);
            }}
          />
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdate();
          }}
        >
          <div className={styles["form"]}>
            <div className={styles["form-control"]}>
              <input
                type="text"
                name="title"
                className={styles["form-control-input"]}
                placeholder="Heading"
                onChange={handleChange}
                value={broadcast?.title}
              />
              <i className="fas fa-pencil-alt" />
            </div>
            <div>
              <div className={styles["form-control"]}>
                <SunEditor
                  lang="en"
                  name="content"
                  placeholder="Please type here..."
                  height="200px"
                  onChange={onContentChange}
                  setContents={broadcastContent}
                  defaultValue={""}
                  className={styles["edit"]}
                />
              </div>
            </div>
            <div>
              <div className={styles["form-control"]}>
                <input
                  type="date"
                  name="expiresOn"
                  className={styles["form-control-input"]}
                  value={formartDate(broadcast?.expiresOn)}
                  placeholder="Broadcast Date(DD/MM/YY)"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles["form-control"]}>
              <div className={styles["tags-container"]}>
                {imageUrls?.map((tag, index) => (
                  <ImageUrl key={index} label={tag} remove={removeImageUrl} />
                ))}
                <input
                  type="text"
                  ref={imageRef}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      addImageUrl();
                    }
                  }}
                  placeholder="Enter Image url (Hit enter to add image url)"
                />
                <i className="fas fa-link" />
              </div>
              <div style={{ marginTop: "15px" }}>
                <div className={styles["form-control"]}>
                  <input
                    type="text"
                    name="link"
                    className={styles["form-control-input"]}
                    placeholder="Resource Link"
                    value={broadcast?.link}
                    onChange={handleChange}
                  />
                  <i className="fas fa-link" />
                </div>
              </div>
            </div>
            <div>
              <div className={styles["tags-container"]}>
                <div className={styles["tags"]}>
                  {tags?.map((tag, index) => (
                    <Tag key={index} label={tag} remove={removeTag} />
                  ))}
                </div>
                <input
                  type="text"
                  ref={tagRef}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      addTag();
                    }
                  }}
                  placeholder="Enter Tags (Hit enter to add tags)"
                />
              </div>
            </div>
          </div>
          {isUploadingData && (
            <p style={{ textAlign: "center" }}>Updating...</p>
          )}
          <button style={{ marginTop: "10px" }} className={style["btns1"]}>
            Edit
          </button>
        </form>
      </div>
    </div>
  ) : null;
}

const Tag = ({ label, remove }) => {
  return (
    <div className={styles["tag"]} onClick={() => remove(label)}>
      <span className={styles["tag-label"]}>{label}</span>
      <span className={styles["tag-remove"]}>x</span>
    </div>
  );
};

const ImageUrl = ({ label, remove }) => {
  return (
    <div className={styles["tag"]} onClick={() => remove(label)}>
      <span className={styles["tag-label"]}>{label}</span>
      <span className={styles["tag-remove"]}>x</span>
    </div>
  );
};

const formartDate = (date) => {
  return moment.utc(date).format("YYYY-MM-DD");
};
