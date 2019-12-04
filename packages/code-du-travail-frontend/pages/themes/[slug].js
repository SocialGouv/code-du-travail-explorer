import React from "react";
import Link from "next/link";
import getConfig from "next/config";
import {
  Container,
  Grid,
  GridCell,
  PageTitle,
  Section,
  Tile
} from "@socialgouv/react-ui";
import fetch from "isomorphic-unfetch";

import { SearchResults } from "../../src/search/SearchResults";
import { Layout } from "../../src/layout/Layout";
import Metas from "../../src/common/Metas";
import { ThemeBreadcrumbs } from "../../src/common/ThemeBreadcrumbs";

const {
  publicRuntimeConfig: { API_URL }
} = getConfig();

// Theme page
class Theme extends React.Component {
  static async getInitialProps({ query: { slug } }) {
    const searchThemeResponse = await fetch(`${API_URL}/themes/${slug}`);

    if (!searchThemeResponse.ok) {
      return { statusCode: searchThemeResponse.status };
    }

    const theme = await searchThemeResponse.json();

    return {
      theme
    };
  }

  render() {
    const { theme = {}, pageUrl, ogImage } = this.props;

    return (
      <Layout currentPage="themes">
        <Metas
          url={pageUrl}
          title={`${theme.title} - Code du travail numérique`}
          description={`Explorez les contenus autour du thème ${theme.title}`}
          image={ogImage}
        />
        <ThemeBreadcrumbs theme={theme} />
        <Section>
          <Container>
            <PageTitle>{theme.title}</PageTitle>
            {theme.children && theme.children.length > 0 && (
              <Grid>
                {theme.children.map(({ slug, title }) => (
                  <GridCell key={slug}>
                    <Link
                      key={slug}
                      href="/themes/[slug]"
                      as={`/themes/${slug}`}
                      passHref
                    >
                      <Tile title={title} />
                    </Link>
                  </GridCell>
                ))}
              </Grid>
            )}
          </Container>
        </Section>
        {theme.refs && theme.refs.length > 0 && (
          <Section>
            <SearchResults
              items={{ documents: theme.refs, articles: [], themes: [] }}
            />
          </Section>
        )}
      </Layout>
    );
  }
}

export default Theme;
