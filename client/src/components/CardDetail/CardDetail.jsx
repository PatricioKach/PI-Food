import React from "react";

export default function CardDetail({
  name,
  id,
  summary,
  healthScore,
  steps,
  diets,
}) {
  return (
    <div>
      <h5>Name:{name}</h5>
      <div>id:{id}</div>
      <div>summary:{summary}</div>
      <div>Health Score: {healthScore}</div>
      <div>Steps: {steps}</div>
      <div>diets:{diets}</div>
    </div>
  );
}
