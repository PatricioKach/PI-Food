import React, { useEffect } from "react";
import style from "../Filters/Filters.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getDiets } from "../../redux/actions/actions.js";

export default function Filters() {
  const estadoDiets = useSelector((state) => state.diets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);
  // console.log(
  //   estadoDiets?.map((e) => {
  //     return e.name;
  //   })
  // );
  return (
    <div className={style.container}>
      <h2>Filtrá tu busqueda</h2>
      <section>
        <header>Dietas</header>
        <select>
          <option placeholder="Elegí"></option>
          {
            // estadoDiets?.map((e) => {
            //   return <option>{e.name}</option>;
            // })
          }
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

      <button>FILTRAR</button>
    </div>
  );
}
