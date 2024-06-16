import React, { useEffect, useState } from "react";
import style from "./manage-testimonial.module.scss";
import { SimpleToast } from "../../../../../components/util/Toast/Toast";
import Loader from "../../../../../components/util/Loader";
import {
  deleteTestimonial,
  getTestimonials,
} from "../../../../../service/Testimonial";

export function ManageTestimonial() {
  const [testimonials, setTestimonials] = useState([]);
  const [images, setImages] = useState([]);
  const [toast, setToast] = useState({
    toastStatus: false,
    toastType: "",
    toastMessage: "",
  });
  const [isLoaded, setIsLoaded] = useState(false);

  const getdata = async () => {
    setIsLoaded(true);
    await getTestimonials(setTestimonials, setToast);
    setIsLoaded(false);
  };

  const handleDelete = async (id) => {
    setIsLoaded(true);
    await deleteTestimonial(id, setToast, toast);
    await getdata();
    setIsLoaded(false);
  };
  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToast({ ...toast, toastStatus: false });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <h1 className={style["head"]}>Manage Testimonials</h1>
      {isLoaded ? (
        <div className={style["data-loader"]}>
          <Loader />
        </div>
      ) : (
        <div className={style["manage-testimonials"]}>
          {testimonials?.map((testimonial, index) => (
            <div className={style["crd"]} key={index}>
              <div>
                <img
                  src={testimonial.image}
                  className={style["image"]}
                  alt=""
                />
              </div>
              <h2 className="head1"> {testimonial.name} </h2>
              <div className={style["content"]}>
                <h3>Position</h3> {testimonial.position}
              </div>
              <div className={style["content"]}>
                <h3>Company</h3> {testimonial.company}
              </div>
              <div className={style["content"]}>
                <h3>Testimonial</h3> {testimonial.text}
              </div>
              <div className={style["content"]}>
                <h3>Rating</h3> {testimonial.rating}
              </div>
              <button
                name={`${testimonial._id}`}
                onClick={(e) => handleDelete(e.currentTarget.name)}
                className={style["delete"]}
              >
                Delete
              </button>
            </div>
          ))}
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
