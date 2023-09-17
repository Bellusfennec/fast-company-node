import React from "react";
import PropTypes from "prop-types";
import { getQualityById } from "../../../store/qualities";
import { useSelector } from "react-redux";

const Qualitie = ({ id }) => {
  const quality = useSelector(getQualityById(id));
  if (typeof quality !== "object") return <p>Загрузка...</p>;
  const { color, name } = quality;

  return <span className={`badge bg-${color} me-2`}>{name}</span>;
};
Qualitie.propTypes = {
  id: PropTypes.string.isRequired
};
export default Qualitie;
