import PropTypes from "prop-types";

import s from "./section.module.css";

function Section({ children }) {
  return <div className={s.section}>{children}</div>;
}

export default Section;
