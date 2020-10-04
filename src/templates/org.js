import React from "react";
import { graphql, Link } from "gatsby";
import { withPreview } from "gatsby-source-prismic";

import { getCategoryLabel } from "../utils";
import Layout from "../components/layouts/layout";
import ProjectsList from "../components/projectList";
import "../styles/organization.css";

const Organization = ({ data: { prismicOrganization, allPrismicProject } }) => {
  const { data: org } = prismicOrganization;
  const { edges: projects } = allPrismicProject;

  return (
    <Layout Layout title={org.name.text} className="bg-dark-gray">
      <article className="pt-10 w-full">
        <div className="flex flex-col md:flex-row mr-auto w-auto items-center md:items-start justify-center">
          <div className="m-10 flex flex-col items-center max-w-lg">
            <div className="font-bold text-xl uppercase mb-2 text-center text-white">
              {org.name.text}
            </div>
            <p
              className="org-description"
              dangerouslySetInnerHTML={{ __html: org.description.html }}
            />
          </div>

          <div className="org-card">
            <div className="px-8 py-6 flex flex-col items-center">
              <div className="org-logo-container">
                {org.image.url ? (
                  <img
                    className="org-logo"
                    src={org.image.url}
                    alt={org.name.text}
                  />
                ) : (
                  <p className="uppercase py-3 font-bold">{org.name.text}</p>
                )}
              </div>
              <div className="org-tag">{getCategoryLabel(org.category)}</div>
              <div className="pt-10 pb-3 w-full text-dark-gray">
                <p className="uppercase font-bold text-sm text-center">
                  Representante:
                </p>
                <p className="text-center">{org.representant.text}</p>
              </div>
              <div className="divider" />
              <div className="w-full flex items-center justify-center">
                <a href={org.discord.url} className="org-link">
                  Canal no Discord
                </a>
              </div>
              <div className="divider" />
              <div className="w-full flex items-center justify-center">
                <a href={`mailto:${org.email.text}`} className="org-link">
                  E-mail
                </a>
              </div>
              <div className="divider" />
              <div className="w-full mb-10 mt-8 text-center block justify-center">
                <Link
                  className="w-full block text-white bg-purple-800 hover:bg-purple-600 px-4 py-3 uppercase font-bold rounded"
                  to={`/orgs/${prismicOrganization.uid}#projetos`}
                >
                  Projetos
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mr-auto w-auto items-center justify-center">
          <p id="projetos" className="text-white uppercase font-bold my-8">
            Projetos
          </p>
          <ProjectsList projects={projects} />
        </div>
      </article>
    </Layout>
  );
};

export default withPreview(Organization);

export const organizationQuery = graphql`
  query OrganizationBySlug($uid: String!) {
    prismicOrganization(uid: { eq: $uid }) {
      data {
        description {
          html
        }
        email {
          text
        }
        image {
          url
        }
        name {
          text
        }
        site {
          url
        }
        discord {
          url
        }
        representant {
          text
        }
        category
      }
      uid
    }
    allPrismicProject(
      filter: { data: { organization: { uid: { eq: $uid } } } }
    ) {
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
            aprendiz {
              text
            }
            auxiliary_mentor_email {
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
