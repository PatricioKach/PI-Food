import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Home.module.css";

import Filters from "../../components/Filters/Filters.jsx";
import CardDetail from "../../components/CardDetail/CardDetail.jsx";
import getRecipes from "../../redux/actions/actions.js";
import CardsContainer from "../../components/CardsContainer/CardsContainer.jsx";
import Nav from "../../components/Nav/Nav.jsx";

export default function Home() {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  // function handleClick(e) {
  //   e.preventDefault();
  //   dispatch(getRecipes());
  // }
  return (
    <div className={style.components}>
      <Nav />
      <Filters />
      <CardsContainer />
      {allRecipes &
        allRecipes.map((el) => {
          return (
            <CardDetail
              name={el.name}
              id={el.id}
              summary={el.summary}
              healthScore={el.healthScore}
              steps={el.steps}
              diets={el.diets}
            />
          );
        })}
    </div>
  );
}
