import React from "react";
import CardDetail from "../CardDetail/CardDetail";
import style from "../CardsContainer/CardsContainer.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getRecipes from "../../redux/actions/actions.js";

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
          console.log(rec.steps);
          return (
            <div key={`${rec.name}-${i}`}>
              <CardDetail
                name={rec.name}
                id={rec.id}
                summary={rec.summary && rec.summary.replace(/<[^>]+>/g, "")}
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

// name: data.title,
// id: data.id,
// summary: data.summary,
// healthScore: data.healthScore,
// steps: data.analyzedInstructions.map((e) => e.steps.map((e) => e.step)),
// diets: data.diets,
