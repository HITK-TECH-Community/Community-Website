import { useState } from "react";
import style from "./card.module.scss";
export function Card(props) {

        const [isLoading, setIsLoading] = useState(false);
        const handleDeleteClick = async () => {
          setIsLoading(true);
          try {
            // Perform the delete API call
            await props.OnClickDelete(props.content._id);
          } catch (error) {
            console.error("Error deleting:", error);
          } finally {
            setIsLoading(false);
          }
        };
        return(
        <div className={style["card-item"]}>
            <div className={style["card-info"]}>
                <h1>{props.content.name}</h1>
                <h2 className={style['card-detail']}>{props.content.college}</h2>
                <h3 className={style['card-detail']}>Department : {props.content.department}</h3>
                <h3 className={style['card-detail']}>Domain : {props.content.interestedDomain}</h3>
                <h3 className={style["card-detail"]}>Year : {props.content.year}</h3>
                <h3 className={style['card-detail']}>{props.content.contact}</h3>
                <p>{props.content.description}</p>
                <p>{props.content.email}</p>
                <a className={style['card-link']} href={props.content.linkdin} target="_blank" rel="noreferrer">LinkedIn</a>
                <div className={style["button-group"]}>  
                {isLoading ? (<div className={style["dot-loader"]}></div>) : (
                <button className={style["button-delete"]} onClick={handleDeleteClick}>Delete
                </button>
                 )}
                </div>
            </div>
        </div>
    );
}