import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "../CardDetail/CardDetail.module.css";
export default function CardDetail({ name, id, healthScore, image, diets }) {
  return (
    <div className={style.card}>
      <h3>Name: {name}</h3>
      <div>
        <b>id: </b>
        {id}
      </div>
      <div>
        <b>Health Score: </b> {healthScore}
      </div>
      <img src={image} />
      <div>
        <b>diets: </b>
        {diets.map((e) => (
          <div>-{e}, </div>
        ))}
      </div>
      <Link to={`/recipes/${id}`}>More Details</Link>
    </div>
  );
}

{
  /*  <div>
   <b>summary: </b>
   {summary}
 </div>
   <div>
        <b>Steps: </b> {steps}
      </div> */
}
