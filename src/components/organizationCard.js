import React from "react";
import { Link } from 'gatsby'

import "../styles/card.css";

const OrganizationCard = (props) => {
  const info = props.info;

  return (
    <Link to={`/orgs/${info.slug}`} className="card bg-dark-gray">
      <div className="image-container-card">
        <img src={info.logo} alt={info.name} />
      </div>
      <h3 className="text-white">{info.name}</h3>
    </Link>
  );
};

export default OrganizationCard;
