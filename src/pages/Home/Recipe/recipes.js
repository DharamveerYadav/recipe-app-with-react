import React from "react";
import PropTypes from "prop-types";

function recipes({ title, calories, imgUrl }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{calories}</h3>
      <img src={imgUrl}></img>
    </div>
  );
}

recipes.propTypes = {
  title: PropTypes.string.isRequired
};

export default recipes;
