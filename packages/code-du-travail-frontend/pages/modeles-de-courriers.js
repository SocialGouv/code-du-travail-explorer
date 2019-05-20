import React from "react";
import getConfig from "next/config";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import styled from "styled-components";
import { Container, Section, theme } from "@cdt/ui";

import Link from "../src/lib/Link";
import SeeAlso from "../src/common/SeeAlso";
import Search from "../src/search/Search";
import { PageLayout } from "../src/layout/PageLayout";
import ModeleCourrierIcon from "../src/icons/ModeleCourrierIcon";

const {
  publicRuntimeConfig: { API_URL }
} = getConfig();

const fetchAllModeles = () => fetch(`${API_URL}/modeles`).then(r => r.json());

class Modeles extends React.Component {
  static async getInitialProps() {
    const data = await fetchAllModeles();
    return { data };
  }

  render() {
    const { data } = this.props;
    return (
      <PageLayout>
        <Head>
          <title>Modèles de courriers - Code du travail numérique</title>
          <meta
            name="description"
            content="Retrouvez l'ensemble des modèles de courriers à votre disposition."
          />
        </Head>
        <Search />
        <Section>
          <Container narrow>
            <Title>Les modèles de documents à télécharger</Title>
            <ModeleCourrierList items={data.hits.hits} />
          </Container>
        </Section>
        <SeeAlso />
      </PageLayout>
    );
  }
}

const List = ({ className, items }) => (
  <ul className={className}>
    {items.map(({ id, _source }) => (
      <Item key={id}>
        <Link
          pathname="modele-de-courrier"
          query={{ slug: _source.slug }}
          passHref
        >
          <ModeleLink>
            <ModeleCourrier modele={_source} />
          </ModeleLink>
        </Link>
      </Item>
    ))}
  </ul>
);

const ModeleCourrier = ({ modele }) => {
  const { filename, title, editor } = modele;
  const [, extension] = filename.split(/\.([a-z]{2,4})$/);
  return (
    <React.Fragment>
      <Icon />
      <TextWrapper>
        <strong>{title}</strong>
        <P>
          <Label>Source</Label>: <Label>{editor}</Label>
          {extension && editor ? " - " : null}
          <Value>{extension}</Value>
        </P>
      </TextWrapper>
    </React.Fragment>
  );
};

const { box, colors, spacing } = theme;

const ModeleCourrierList = styled(List)`
  list-style-type: none;
  padding-left: 0;
`;
const Title = styled.h3`
  text-align: center;
`;
const Item = styled.li``;

const ModeleLink = styled.a`
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  border-radius: ${box.borderRadius};
  padding: ${spacing.base};
  :link {
    text-decoration: none;
  }
  :hover {
    border-color: ${colors.elementBorder};
    background: ${colors.darkBackground};
  }
  :hover strong {
    text-decoration: underline;
  }
`;
const TextWrapper = styled.div`
  padding-left: 1rem;
`;
const P = styled.p`
  margin-bottom: 0;
  font-size: 0.9em;
`;
const Icon = styled(ModeleCourrierIcon)`
  width: 25px;
  flex-shrink: 0;
  color: ${colors.darkGrey};
`;

const Label = styled.span`
  font-weight: 700;
  color: ${colors.darkerGrey};
`;

const Value = styled.span`
  font-weight: 700;
  text-transform: uppercase;
  color: ${colors.grey};
`;

export default Modeles;
