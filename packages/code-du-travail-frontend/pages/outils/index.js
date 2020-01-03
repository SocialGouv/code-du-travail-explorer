import React from "react";
import getConfig from "next/config";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import * as Sentry from "@sentry/browser";
import {
  Container,
  Grid,
  icons,
  PageTitle,
  Title,
  Section
} from "@socialgouv/react-ui";
import { getRouteBySource, SOURCES } from "@cdt/sources";
import tools from "@cdt/data...tools";
import externalTools from "@cdt/data...tools/externals.json";

import { Layout } from "../../src/layout/Layout";
import Metas from "../../src/common/Metas";
import { CustomTile } from "../../src/common/tiles/Custom";

const monCompteFormation = externalTools.find(
  tools => tools.title === "Mon compte formation"
);
const {
  publicRuntimeConfig: { API_URL }
} = getConfig();
const Outils = ({ pageUrl, ogImage, modeles = [] }) => (
  <Layout currentPage="tools">
    <Metas
      url={pageUrl}
      title={`Boîte a outils - Code du travail numérique`}
      description="Trouvez des réponses personnalisées selon votre situation"
      image={ogImage}
    />
    <Section>
      <Container>
        <PageTitle>Retrouvez tous nos outils</PageTitle>
        <Title>Nos outils de calcul</Title>
        <Grid>
          {tools.map(({ action, description, icon, slug, title }) => (
            <Link
              href={`/${getRouteBySource(SOURCES.TOOLS)}/[slug]`}
              as={`/${getRouteBySource(SOURCES.TOOLS)}/${slug}`}
              passHref
              key={slug}
            >
              <CustomTile action={action} title={title} icon={icons[icon]}>
                {description}
              </CustomTile>
            </Link>
          ))}
          <Link href={`/${getRouteBySource(SOURCES.CCN)}/recherche`} passHref>
            <CustomTile
              action="Consulter"
              title="Convention collective"
              icon={icons.Nego}
            >
              Recherchez une convention collective par Entreprise, SIRET, Nom ou
              numéro IDCC.
            </CustomTile>
          </Link>
          <CustomTile
            key={monCompteFormation.slug}
            action={monCompteFormation.action}
            title={monCompteFormation.title}
            icon={icons[monCompteFormation.icon]}
            href={monCompteFormation.url}
            rel="noopener nofollow"
            target="_blank"
            className="no-after"
          >
            {monCompteFormation.description}
          </CustomTile>
        </Grid>
        {modeles.length > 0 && (
          <>
            <Title>Nos modèles de documents</Title>
            <Grid>
              {modeles.map(({ title, slug }) => (
                <Link
                  href="/modeles-de-courriers/[slug]"
                  as={`/modeles-de-courriers/${slug}`}
                  passHref
                  key={slug}
                >
                  <CustomTile
                    title={title}
                    action="Consulter"
                    icon={icons.Document}
                  />
                </Link>
              ))}
            </Grid>
          </>
        )}
      </Container>
    </Section>
  </Layout>
);

Outils.getInitialProps = async () => {
  try {
    const response = await fetch(`${API_URL}/modeles`);
    if (response.ok) {
      const {
        hits: { hits }
      } = await response.json();
      const modeles = hits.map(({ _source }) => _source);
      return { modeles };
    }
  } catch (e) {
    console.error(e);
    Sentry.captureException(e);
  }

  return { modeles: [] };
};

export default Outils;
