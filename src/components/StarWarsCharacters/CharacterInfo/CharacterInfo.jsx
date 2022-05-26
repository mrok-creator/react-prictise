import PropTypes from "prop-types";

import s from "./characterInfo.module.css";

function CharacterInfo({ name, gender, birth_year, hair_color, skin_color }) {
  console.log(name);
  return (
    <div className={s.info}>
      <p>{name}</p>
      <p>{gender}</p>
      <p>{birth_year}</p>
      <p>{hair_color}</p>
      <p>{skin_color}</p>
    </div>
  );
}

export default CharacterInfo;
