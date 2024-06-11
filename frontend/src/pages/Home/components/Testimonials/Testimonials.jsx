import React, { useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStarHalf,
  FaStar,
} from "react-icons/fa";
import style from "./testimonial.module.scss";
import { SimpleToast } from "../../../../components/util/Toast";
import Loader from "../../../../components/util/Loader"; 
import { getTestimonials } from "../../../../service/Testimonial";
import { hideToast } from "../../../../service/toastService";

export function Testimonials({ theme }) {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [toast, setToast] = useState({
    toastStatus: false,
    toastType: "",
    toastMessage: "",
  });
  const [isLoading, setIsLoading] = useState(true); 
  const itemsPerPage = isSmallScreen ? 1 : 3;

  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    hideToast(setToast);
  };

  useEffect(() => {
    getTestimonials(setTestimonials, setToast).then(() => {
      setIsLoading(false);
    });

    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const end = currentIndex + itemsPerPage;
    if (end > testimonials.length) {
      return [
        ...testimonials.slice(currentIndex),
        ...testimonials.slice(0, end - testimonials.length),
      ];
    }
    return testimonials.slice(currentIndex, end);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} color="#ffd700" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalf key={i} color="#ffd700" />);
      } else {
        stars.push(<FaStar key={i} color="#d1d5db" />);
      }
    }

    return stars;
  };

  return (
    <div className={style.main}> 
      <div className={theme ? style["heading-dark"] : style.heading}>
          What Our Users Say
      </div>
        <div className={style.center}>
          <div className={theme ? `${style.dash} ${style["dash-dark"]}` : `${style.dash} ${style["dash-light"]}`}></div>
        </div>
          {isLoading ? ( 
            <Loader />
          ) : (
            <>
          <div className={style["testimonials-container"]}>
            <div className={style["testimonials-slide-left"]}>
              <button
                onClick={handlePrev}
                className={theme ? style["button-dark"] : style.button}
              >
                <FaChevronLeft size={35} />
              </button>
            </div>
            <div className={style.testimonials}>
              <div className={style.testimonialss}>
                {getVisibleTestimonials().map((testimonial, index) => (
                  <div key={index} className={style.testimonial}>
                    <div className={theme ? style["testimoniall-dark"] : style["testimoniall"]}>
                      <div className={style["testimonial-top"]}>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className={style["testimonial-img"]}
                        />
                        <div>
                          <p className={theme ? style["testimonial-name-dark"] : style["testimonial-name"]}>
                            {testimonial.name}
                          </p>
                          <p className={theme ? style["testimonial-position-dark"] : style["testimonial-position"]}>
                            {testimonial.position}, {testimonial.company}
                          </p>
                          <div className={style.stars}>
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                      <p className={theme ? style["content-dark"] : style.content}>
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={style["testimonials-slide-right"]}>
              <button
                onClick={handleNext}
                className={theme ? style["button-dark"] : style.button}
              >
                <FaChevronRight size={35} />
              </button>
            </div>
          </div>
          {toast.toastStatus && (
            <SimpleToast
              open={toast.toastStatus}
              message={toast.toastMessage}
              handleCloseToast={handleCloseToast}
              severity={toast.toastType}
            />
          )}
        </>
      )}
    </div>
  );
}
