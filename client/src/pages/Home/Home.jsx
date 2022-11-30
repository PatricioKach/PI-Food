import React from "react";
import style from "./Home.module.css";
import Filters from "../../components/Filters/Filters.jsx";
import CardsContainer from "../../components/CardsContainer/CardsContainer.jsx";
import Nav from "../../components/Nav/Nav.jsx";

export default function Home() {
  return (
    <div className={style.components}>
      <Nav />
      <div className={style.notNav}>
        <Filters />
        <CardsContainer />
      </div>
    </div>
  );
}
