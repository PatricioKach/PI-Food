import React from "react";
import { Link } from "react-router-dom";
import style from "../Nav/Nav.module.css";

export default function Nav() {
  return (
    <nav>
      <Link to="/home">
        <h4 className={style.henryfood}>Henry Food</h4>
      </Link>
      <img
        alt="cubiertos"
        src="logo-cubiertos.png"
        width={50}
        className={style.cubiertos}
      />
      <form>
        <input
          type="text"
          placeholder="Busqueda"
          className="form-control"
        ></input>
        <input type="submit" value="OK"></input>
      </form>
    </nav>
  );
}
