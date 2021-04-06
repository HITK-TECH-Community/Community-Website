import React, { useState, useEffect } from "react";
import style from "./Manage.module.scss";
import DeleteIcon from "@material-ui/icons/Delete";
import { useSelector } from "react-redux";
import { END_POINT } from "../../../../../config/api";
import { Spinner } from "reactstrap";
import Loader from "../../../../../components/util/Loader";
export function Manage() {
  const token = useSelector((state) => state.token);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${END_POINT}/admin`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) =>
        res.json().then((res) => {
          setData(res);
          setLoading(false);
        })
      )
      .catch((error) => {
        setLoading(false);
      });
  }, [token]);

  const handler = (i) => {
    let a = [...data];
    a.splice(i, 1);
    setData(a);
  };
  return (
    <div>
      <h1 className={style["h1"]}>Manage Admins</h1>
      {loading && <Loader color="primary" size="lg" />}
      <div className={`${style["container"]} container`}>
        {data.length > 0 && !loading
          ? data.map((item, i) => (
              <div className={`${style["card"]} card`} key={item + i}>
                <img
                  src="https://cdn.mos.cms.futurecdn.net/3kZ3hc2YMB6LXiPohtyfKa.jpg"
                  alt="pic"
                  className={style["img"]}
                />
                <h3 className={style["h3"]}>
                  {item.firstName} {item.lastName}
                </h3>
                <div className={style["socio"]}>
                  <i className="fab fa-linkedin fa-2x card_footer in"></i>
                  <i className="fab fa-twitter-square fa-2x card_footer"></i>
                  <i className="fab fa-github-square fa-2x card_footer"></i>
                </div>
                <div className={style["icon"]} onClick={() => handler(i)}>
                  <DeleteIcon />
                </div>
              </div>
            ))
          : null}
      </div>
      {data.length === 0 && !loading ? (
        <div className={style["no-admin"]}>
          <img src="./images/admin.png" width="20%" alt="" />
          No Admin Found!
        </div>
      ) : null}
    </div>
  );
}
