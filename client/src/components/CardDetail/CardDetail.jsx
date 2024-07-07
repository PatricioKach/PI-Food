import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeById } from "../../redux/actions/actions.js";
import style from "../CardDetail/CardDetail.module.css";

export default function CardDetail(props) {
  const estadoRecipes = useSelector((state) => state.recipeDetail);
  const { id } = props.match.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipeById(id));
  }, [dispatch]);

  return (
    <div>
      <h3>{estadoRecipes.name}</h3>
      <img src={estadoRecipes.image} alt={estadoRecipes.name} />
      <div>
        <b>summary: </b>
        {estadoRecipes.summary}
      </div>
      <div>
        <b>Steps: </b> {estadoRecipes.steps}
      </div>
      <div>
        <b>diets: </b>
        {estadoRecipes.diets}
      </div>
    </div>
  );
}
