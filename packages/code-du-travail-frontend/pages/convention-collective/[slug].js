import React from "react";
import getConfig from "next/config";
import fetch from "isomorphic-unfetch";
import { format, parseISO } from "date-fns";
import frLocale from "date-fns/locale/fr";
import { formatIdcc } from "@cdt/data";
import { getRouteBySource, SOURCES } from "@cdt/sources";
import { Text } from "@socialgouv/react-ui";

import Answer from "../../src/common/Answer";
import { Layout } from "../../src/layout/Layout";
import Convention from "../../src/conventions/Convention";
import Metas from "../../src/common/Metas";

const {
  publicRuntimeConfig: { API_URL },
} = getConfig();

export async function getServerSideProps({ query: { slug } }) {
  const responseContainer = await fetch(`${API_URL}/conventions/${slug}`);
  if (!responseContainer.ok) {
    return { props: { errorCode: responseContainer.status } };
  }
  const convention = await responseContainer.json();
  return { props: { convention, slug } };
}

const ConventionCollective = ({ convention, errorCode, slug }) => {
  const { date_publi, num, shortTitle, title, url } = convention;
  return (
    <Layout errorCode={errorCode}>
      <Metas
        description={title}
        pathname={`/convention-collective/${slug}`}
        title={`Convention collective ${shortTitle}`}
      />
      <Answer
        breadcrumbs={[
          {
            label: "Conventions collectives",
            slug: `/${getRouteBySource(SOURCES.CCN)}`,
          },
        ]}
        date={
          date_publi &&
          format(parseISO(date_publi), "dd/MM/yyyy", {
            locale: frLocale,
          })
        }
        dateLabel="Entrée en vigueur le"
        relatedItems={[
          {
            slug: "convention-collective",
            source: SOURCES.SHEET_SP,
            title: "Convention collective",
          },
          {
            slug: "comment-consulter-un-accord-dentreprise",
            source: SOURCES.SHEET_SP,
            title: "Comment consulter un accord d'entreprise ?",
          },
          {
            slug: "#hierarchie",
            source: SOURCES.LABOUR_LAW,
            title:
              "Droit du travail: Existe-t-il une hiérarchie entre les textes ?",
          },
        ]}
        source={{
          name: "Légifrance",
          url: url,
        }}
        subtitle={
          <Text fontSize="small">
            {title} (IDCC {formatIdcc(num)})
          </Text>
        }
        suptitle="CONVENTION COLLECTIVE"
        title={shortTitle}
      >
        <Convention convention={convention} />
      </Answer>
    </Layout>
  );
};

export default ConventionCollective;
