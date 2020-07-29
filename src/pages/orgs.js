import React from "react";
import OrganizationCard from "../components/organizationCard";
import Layout from "../components/layouts/layout";
import { orgs } from "../lib/organizations";

const OrgsPage = () => {
  return (
    <Layout title="Organizações">
      <section className="pt-20 pb-10 flex flex-col w-full items-center justify-center">
        <div className="w-full flex flex-col pb-5 items-center justify-center">
          <h1>Organizações</h1>
        </div>
        <div className="w-full px-10 flex flex-wrap justify-center">
          {orgs.map((org, index) => (
            <OrganizationCard info={org} key={index} />
          ))}
        </div>
      </section>
    </Layout>
  );
};
export default OrgsPage;
