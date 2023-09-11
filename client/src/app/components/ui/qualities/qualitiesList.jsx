import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getQualitiesIsLoading,
  loadQualitiesList
} from "../../../store/qualities";
import Qualitie from "./qualitie";

const QualitiesList = ({ qualities }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getQualitiesIsLoading());
  if (isLoading) return <p>Загрузка...</p>;

  useEffect(() => {
    dispatch(loadQualitiesList());
  }, []);

  return (
    <>
      {qualities.map((id) => (
        <Qualitie key={id} id={id} />
      ))}
    </>
  );
};
QualitiesList.propTypes = {
  qualities: PropTypes.array
};

export default QualitiesList;
