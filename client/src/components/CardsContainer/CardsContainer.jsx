import React from "react";
import CardDetail from "../CardDetail/CardDetail";
import style from "../CardsContainer/CardsContainer.module.css";

export default function CardsContainer() {
  return (
    <div className={style.cont}>
      Mapeo de CardDetail
      <CardDetail />
    </div>
  );
}
