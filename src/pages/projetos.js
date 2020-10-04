import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import { withPreview } from "gatsby-source-prismic";

import Layout from "../components/layouts/layout";
import ProjectsList from "../components/projectList";

const ProjectsPage = ({ data: { allPrismicProject } }) => {
  const allProjects = allPrismicProject.edges;
  const [searchTerm, setSearchTerm] = useState("");
  const [projectsRendered, setProjectsRendered] = useState(allProjects);

  const handleChangeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setProjectsRendered(allProjects);
  };

  const search = (e) => {
    e.preventDefault();

    let projects;

    if (searchTerm === "") {
      projects = allProjects;
    } else {
      projects = allProjects.filter((project) => {
        const search = searchTerm.toLowerCase();
        const name = project.node.data.name.text;
        const projectCategory = project.node.data.category.text;
        const categories = projectCategory.split(",");

        if (name.toLowerCase().includes(search)) return true;

        for (const category of categories) {
          if (category.toLowerCase().includes(search)) {
            return true;
          }
        }

        return false;
      });
    }

    setProjectsRendered(projects);
  };

  return (
    <Layout Layout title={"Projetos"} className="bg-gray-100">
      <article className="pt-10 w-full">
        <div className="flex w-full flex-col items-center space-x-4 justify-center mb-6 md:mb-0 p-2">
          <form
            className="flex items-center justify-center border-b border-solid border-purple-600 py-2 w-full md:max-w-lg"
            onSubmit={search}
          >
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Filtrar por categoria ou  nome do projeto"
              aria-label="Search term"
              value={searchTerm}
              onChange={handleChangeSearchTerm}
            />
            <button
              className="flex-shrink-0 bg-purple-600 hover:bg-purple-700 border-purple-600 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
              onClick={search}
            >
              Pesquisar
            </button>
            <button
              className="flex-shrink-0 border-transparent border-4 text-purple-600 hover:text-purple-800 text-sm py-1 px-2 rounded"
              type="button"
              onClick={clearSearch}
            >
              Limpar
            </button>
          </form>
          <Link
            to="/orgs"
            className="items-center text-purple-700 hover:text-blue-600 text-sm md:text-lg my-5"
          >
            Visualizar projetos por organização
          </Link>
        </div>
        <div className="flex flex-col mr-auto w-auto items-center justify-center">
          {projectsRendered.length ? (
            <ProjectsList projects={projectsRendered} />
          ) : (
              <div className="px-4">
                <p className="text-xl text-gray-700 mt-12 text-center">
                  Nenhum projeto cadastrado com essa categoria
              </p>
              </div>
            )}
        </div>
      </article>
    </Layout>
  );
};

export default withPreview(ProjectsPage);

export const projectsQuery = graphql`
  query AllProjects {
    allPrismicProject {
      edges {
        node {
          data {
            approved
            auxiliary_mentor {
              text
            }
            description {
              text
            }
            mentor {
              text
            }
            name {
              text
            }
            registered
            proposal {
              url
            }
            mentor_email {
              text
            }
            auxiliary_mentor_email {
              text
            }
            aprendiz {
              text
            }
            category {
              text
            }
            organization {
              uid
            }
          }
        }
      }
    }
  }
`;
