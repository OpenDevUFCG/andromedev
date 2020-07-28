import React from "react";

import "../styles/card.css";

const Project = (props) => {
  const info = props.info;

  return (
    <div className="card">
      <h3>Nome: {info.name}</h3>
      <p>Organização: {info.org} </p>
      <p>Descrição: {info.description} </p>
    </div>
  );
};

export default Project;
