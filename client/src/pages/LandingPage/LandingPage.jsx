import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={style.link}>
      <Link to="/home">
        <h3>
          Proyecto Individual
          <br /> "Comidas"
        </h3>
      </Link>
    </div>
  );
}
