import React from "react";
import Card from "../Card/Card";
import style from "../CardsContainer/CardsContainer.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipes } from "../../redux/actions/actions.js";

export default function CardsContainer() {
  const estadoRecipes = useSelector((state) => state.recipes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  if (estadoRecipes?.length > 0) {
    return (
      <div className={style.cont}>
        {estadoRecipes.map((rec, i) => {
          return (
            <div key={`${rec.name}-${i}`}>
              <Card
                name={rec.name}
                id={rec.id}
                summary={rec.summary}
                healthScore={rec.healthScore}
                steps={rec.steps}
                image={rec.image}
                diets={rec.diets}
              />
            </div>
          );
        })}
      </div>
    );
  }
  return null;
}
