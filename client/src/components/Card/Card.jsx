import { Link } from "react-router-dom";
import style from "../Card/Card.module.css";

export default function Card({ name, id, healthScore, image, diets }) {
  return (
    <div className={style.card} key={`${name}+${id}`}>
      <h3>Name: {name}</h3>
      <div>
        <b>id: </b>
        {id}
      </div>
      <div>
        <b>Health Score: </b> {healthScore}
      </div>
      <img src={image} alt={`${id}.img`} />

      <Link to={`/recipes/${id}`}>More Details</Link>
    </div>
  );
}
