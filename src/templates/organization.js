import React from "react";
import { Link } from "gatsby";

import { getOrg } from "../lib/organizations";
import Layout from "../components/layouts/layout";
import "../styles/organization.css";

const Organization = (data) => {
  const slug = data.pageContext.slug;
  const {
    name,
    category,
    description,
    logo,
    email,
    discord,
    representant,
  } = getOrg(slug);

  return (
    <Layout Layout title={name} className="bg-dark-gray">
      <article className="pt-10 w-full">
        <div className="flex flex-col md:flex-row mr-auto w-auto items-center md:items-start justify-center">
          <div className="m-10 flex flex-col items-center max-w-lg">
            <div className="font-bold text-xl uppercase mb-2 text-center text-white">
              {name}
            </div>
            <p className="org-description">{description}</p>
          </div>

          <div className="max-w-lg rounded-none md:rounded-sm bg-gray-100 overflow-hidden shadow-lg">
            <div className="px-8 py-6 flex flex-col items-center">
              <div className="org-logo-container">
                {logo ? (
                  <img className="org-logo" src={logo} alt={name} />
                ) : (
                  <p className="uppercase py-3 font-bold">{name}</p>
                )}
              </div>
              <div className="org-tag">{category}</div>
              <div className="pt-10 pb-3 w-full text-dark-gray">
                <p className="uppercase font-bold text-sm">Representante:</p>
                <p>{representant}</p>
              </div>
              <div className="divider" />
              <div className="w-full flex items-center justify-center">
                <a href={discord} className="org-link">
                  Canal no Discord
                </a>
              </div>
              <div className="divider" />
              <div className="w-full flex items-center justify-center">
                <a href={`mailto:${email}`} className="org-link">
                  E-mail
                </a>
              </div>
              <div className="divider" />
              <div className="w-full mb-10 mt-8 text-center block justify-center">
                <Link
                  className="w-full block text-white bg-purple-800 px-4 py-3 uppercase font-bold rounded opacity-25 cursor-not-allowed"
                  to={`/orgs/${slug}`}
                >
                  Projetos
                </Link>
                <div className="uppercase text-secondary-400 font-bold text-sm py-3">
                  Divulgação de projetos inscritos dia 24 de agosto
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Organization;
