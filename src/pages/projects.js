import React from "react";
import Project from "../components/project";
import Layout from "../components/layouts/layout";
import { projects } from "../lib/projects";

const ProjectsPage = () => {
  return (
    <Layout title="Projetos">
      <section className="pt-20 pb-10 flex flex-col w-full items-center justify-center">
        <div className="w-full flex flex-col pb-5 items-center justify-center">
          <h1>Projetos</h1>
        </div>
        <div className="w-full px-32 flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <Project info={project} key={index} />
          ))}
        </div>
      </section>
    </Layout>
  );
};
export default ProjectsPage;
