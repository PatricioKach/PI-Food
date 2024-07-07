import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={style.link}>
      <Link to="/home">
        <h3 className={style.title}>
          "El Loco Ale"
          <br />
          Recetario
        </h3>
      </Link>
      <img src="ale.jpg" />
    </div>
  );
}
