import React, { useEffect, useState } from "react";
import { SimpleToast } from "../../../../components/util/Toast";
import "./resource.module.scss";
import style from "./resource.module.scss";
import { deleteResource, getResources } from "../../../../service/Resources";
import Loader from "../../../../components/util/Loader";

export function Resource() {
  const [resourses, setResources] = useState([]);
  const [loading, setLoading] = useState(false);

  const [toast, setToast] = useState({
    toastStatus: false,
    toastType: "",
    toastMessage: "",
  });

  useEffect(() => {
    fetchResource();
  }, []);

  const fetchResource = async () => {
    setLoading(false);
    const resource = await getResources(setToast, toast);
    setResources(resource);
    setLoading(true);
  };

  const onClickDelete = async (id) => {
    setLoading(false);
    await deleteResource(id, setToast, toast);
    await fetchResource();
    setLoading(true);
  };

  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToast({ ...toast, toastStatus: false });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Resource List </h1>
      {loading ? (
        <div className={style["resource-card-wrapper"]}>
          {resourses &&
            resourses.map((resource, index) => {
              return (
                <div key={index} className={style["resource-card"]}>
                  <h2>{resource.name}</h2>
                  <h4>{resource.email}</h4>
                  <h4>Trust - {resource.trustLevel}</h4>
                  <div className={style["description-card"]}>
                    <p>{resource.description}</p>
                    <p className={style["additional-info"]}>
                      {resource.additionalInfo}
                    </p>
                    <div className={style["expire-update-cards"]}>
                      <div className={style["expire-update-card"]}>
                        <p className={style["date-expire"]}>Expire Date</p>
                        <p className={style["additional-info"]}>
                          {resource.expiryDate.slice(0, 10)}
                        </p>
                      </div>
                      <div className={style["expire-update-card"]}>
                        <p className={style["date-update"]}>Last Updated</p>
                        <p className={style["additional-info"]}>
                          {resource.updatedAt.slice(0, 10)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={style["button-group"]}>
                    <a href={resource.url} target="_blank">
                      <button
                        href={resource.url}
                        className={style["button-url"]}
                      >
                        URL
                      </button>
                    </a>
                    <button
                      className={style["button-delete"]}
                      onClick={() => onClickDelete(resource._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <div className={style["dot-loader"]}>
          <Loader />
        </div>
      )}
      {toast.toastStatus && (
        <SimpleToast
          open={toast.toastStatus}
          message={toast.toastMessage}
          handleCloseToast={handleCloseToast}
          severity={toast.toastType}
        />
      )}
    </div>
  );
}
