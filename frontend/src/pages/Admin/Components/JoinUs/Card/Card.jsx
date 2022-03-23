import { IconButton } from "@material-ui/core";
import { Edit,Delete } from "@material-ui/icons";
import style from "./card.module.scss";

export function Card(props) {
    return (

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
                <a className={style['card-link']} href={props.content.linkedin}>Linkdin</a>
                <div className={style['button-container']}>
                <IconButton className={style['icon-button']} >
                    <Edit className={style['icon']}/>
                </IconButton>
                <IconButton className={style['icon-button']} >
                    <Delete className={style['icon']}/>
                </IconButton>
                </div>
            </div>

        </div>
    );
}