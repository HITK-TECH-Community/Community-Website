import style from "./card.module.scss";

export function Card({ content: { email, message, name, subject }, id , handleDelete }) {
  return (
    <div className={style["card-item"]}>
      <div className={style["card-info"]}>
        <h1>{name}</h1>
        <h3 className={style["card-detail"]}>Email : {email}</h3>
        <h3 className={style["card-detail"]}>Subject : {subject}</h3>
        <h2 className={style["card-detail"]}>{message}</h2>
        <div className={style["button-group"]}>
          <a href={`mailto:${email}`}>
            <button className={style["button-edit"]}>Reply</button>
          </a>
          <button name={`${id}`} onClick={(e)=>handleDelete(e.currentTarget.name)} className={style["button-delete"]}>Delete</button>
        </div>
      </div>
    </div>
  );
}
