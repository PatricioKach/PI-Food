import React from "react";
import style from "../Filters/Filters.module.css";

export default function Filters() {
  return (
    <div className={style.container}>
      <h2>Filtrá tu busqueda</h2>
      <section>
        <header>Dietas</header>
        <select>
          <option placeholder="Elegí"></option>
          <option>Gluten free</option>
          <option>Ketogenic</option>
          <option>Lacto-Vegetarian</option>
          <option>Ovo-Vegetarian</option>
          <option>Vegan</option>
          <option>Pescetarian</option>
          <option>Paleo</option>
          <option>Primal</option>
          <option>Low FODMAP</option>
          <option>Whole30</option>
        </select>
      </section>
      <section>
        <header>Orden</header>
        <select>
          <option placeholder="Elegí"></option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
        </select>
      </section>
      <section>
        <header>Sección </header>
        <select>
          <option placeholder="Elegí"></option>
          <option>Existente</option>
          <option>Creado</option>
        </select>
      </section>
    </div>
  );
}
