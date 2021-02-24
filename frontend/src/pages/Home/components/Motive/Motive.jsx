import style from "./motive.module.scss";

export const Motive = () => {
  return (
    <div className={style["motive-div"]}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center pb-20">
              <div className={style["motive"]}>
                <h1>
                  <i className="fas fa-crosshairs"></i>ur Motive
                </h1>
                <div className={style["dash"]}></div>
              </div>
              <p className="text text-white my-3">
                At HITK Tech Community, we believe there is no limit to
                learning. The more you learn, the more places you will go. Our
                community aims at:
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-8 my-3">
            <div
              className={`${style["single-features"]} d-flex mt-30 wow fadeIn`}
              data-wow-duration="1s"
              data-wow-delay="0s"
            >
              <div className={style["features-icon"]}>
                <i className="fas fa-bullhorn"></i>
              </div>
              <div className={`${style["features-content"]} text-left`}>
                <h4 className={style["features-title"]}>
                  <a href="/#">Increase Awareness</a>
                </h4>
                <p className={style["motive-content"]}>
                  Towards plethora of opportunities such as internships,
                  competitions, openings for collaboration in projects, job
                  openings and contribution in open source projects.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8 my-3">
            <div
              className={`${style["single-features"]} d-flex mt-30 wow fadeIn`}
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div className={style["features-icon"]}>
                <i className="fa fa-users"></i>
              </div>
              <div className={`${style["features-content"]} text-left`}>
                <h4 className={style["features-title"]}>
                  <a href="/#">Tech Community</a>
                </h4>
                <p className={style["motive-content"]}>
                  Forming a global tech community where developers can converse
                  together, share information and learn from each other.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8 my-3">
            <div
              className={`${style["single-features"]} d-flex mt-30 wow fadeIn`}
              data-wow-duration="1s"
              data-wow-delay="1s"
            >
              <div className={style["features-icon"]}>
                <i className="fas fa-user-graduate"></i>
              </div>
              <div className={`${style["features-content"]} text-left`}>
                <h4 className={style["features-title"]}>
                  <a href="/#">Lots of Learning</a>
                </h4>
                <p className={style["motive-content"]}>
                  Helping you accelerate your learning and bring you closer to
                  like – minded individuals. Ultimately, there will always be a
                  helping hand at your side.
                </p>
              </div>
            </div>
          </div>
          <p className="text text-white my-3 text-center">
            All of the factor counts while making you better, and ultimately win
            is an asset. So go ahead and share the vision for a better future
            with technology!
          </p>
        </div>
      </div>
    </div>
  );
};
