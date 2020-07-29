import React from "react";
import { Link } from 'gatsby'

const OrganizationCard = (props) => {
  const org = props.info;

  return (
    <Link
      to={`/orgs/${org.slug}`}
      className="p-2 lg:w-1/3 w-full mx-0 md:mx-2 shadow-sm md:shadow-md my-1 md:my-3">
      <div className="h-full flex items-center p-4">
        <img alt={org.name} className="w-20 md:w-24 lg:w-32 xl:w-40 object-cover object-center flex-shrink-0 mr-4" src={org.logo} />
        <div className="flex-grow">
          <h2 className="text-gray-900 font-medium text-sm lg:text-base xl:text-xl">{org.name}</h2>
          <p className="text-gray-500 text-xs lg:text-sm xl:text-base">{org.category}</p>
        </div>
      </div>
    </Link>

  );
};

export default OrganizationCard;
