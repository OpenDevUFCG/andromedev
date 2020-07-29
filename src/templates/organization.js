import React from 'react'
import { Link } from "gatsby";

import { getOrg } from '../lib/organizations'
import Layout from "../components/layouts/layout";
import '../styles/organization.css'

const Organization = (data) => {
  const slug = data.pageContext.slug;
  const { name, category, description, github, logo } = getOrg(slug);

  return (
    <Layout Layout title={name} className="bg-dark-gray" >
      <article className="pt-20 w-full">
        <div className="flex flex-col md:flex-row mr-auto w-auto items-center md:items-start justify-center">
          <div className="m-10 flex flex-col items-center max-w-lg">
            <div className="font-bold text-xl mb-2 text-center text-white">{name}</div>
            <p className="org-description">
              {description}
            </p>
          </div>

          <div className="max-w-lg rounded-none md:rounded-sm bg-gray-100 overflow-hidden shadow-lg">
            <div className="px-8 py-6 flex flex-col items-center">
              <div className="org-logo-container">
                <img className="org-logo" src={logo} alt={name} />
              </div>
              <div className="org-tag">{category}</div>
              <div className="divider" />
              <div className="w-64 flex items-center justify-center">
                <a href={github} className="org-link">Acessar o GitHub</a>
              </div>
              <div className="divider" />
              <div className="w-64 flex items-center justify-center">
                <a href={github} className="org-link">Canal no Discord</a>
              </div>
              <div className="divider" />
              <div className="w-64 flex items-center justify-center">
                <a href={github} className="org-link">Enviar e-mail</a>
              </div>
              <div className="divider" />
              <div className="w-full mb-10 mt-8 text-center block justify-center">
                <Link
                  className="w-full block text-white bg-purple-800 hover:bg-purple-600 px-4 py-3 rounded"
                  to="/cronograma"
                >
                  Ver projetos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default Organization
