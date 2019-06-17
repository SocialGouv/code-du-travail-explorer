import React from "react";
import { withRouter } from "next/router";
import Head from "next/head";
import getConfig from "next/config";
import fetch from "isomorphic-unfetch";
import Answer from "../src/common/Answer";
import { PageLayout } from "../src/layout/PageLayout";
import Convention from "../src/conventions/Convention";

const {
  publicRuntimeConfig: { API_URL, API_DILA2SQL_URL }
} = getConfig();

const fetchKali = ({ slug, idccNum }) => {
  const url = slug
    ? `${API_URL}/items/kali/${slug}`
    : `${API_URL}/idcc/${idccNum}`;
  return fetch(url)
    .then(r => r.json())
    .then(r => r.status != 404 && r._source);
};

const fetchConteneur = ({ id }) =>
  fetch(`${API_DILA2SQL_URL}/base/KALI/conteneur/${id}`)
    .then(r => r.json())
    .then(r => r.data);

class Kali extends React.Component {
  static async getInitialProps({ query }) {
    const convention = await fetchKali(query);
    const conteneur = await fetchConteneur({ id: convention.id });
    return { convention, conteneur };
  }

  render() {
    if (!this.props.convention) {
      return (
        <Answer emptyMessage="Cette convention collective n'a pas été trouvée" />
      );
    }
    const { convention, conteneur } = this.props;
    const { title } = convention;
    return (
      <PageLayout>
        <Head>
          <meta name="description" content={title} />
        </Head>
        <Answer
          title={title}
          emptyMessage="Cette convention collective n'a pas été trouvée"
          footer="Informations fournies par la DILA"
          narrow={false}
        >
          <Convention convention={convention} conteneur={conteneur} />
        </Answer>
      </PageLayout>
    );
  }
}

export default withRouter(Kali);
