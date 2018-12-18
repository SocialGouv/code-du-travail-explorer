import React from "react";
import { withRouter } from "next/router";
import getConfig from "next/config";
import fetch from "isomorphic-unfetch";
import { AsideTitle } from "@cdt/ui";

import Html from "../src/common/Html";
import { DownloadFile } from "../src/common/DownloadFile";
import ModeleCourrierIcon from "../src/icons/ModeleCourrierIcon";
import Answer from "../src/common/Answer";

const {
  publicRuntimeConfig: { API_URL }
} = getConfig();

const fetchCourrier = ({ slug }) =>
  fetch(`${API_URL}/items/modeles_de_courriers/${slug}`).then(r => r.json());

class ModeleCourrier extends React.Component {
  static async getInitialProps({ query }) {
    const data = await fetchCourrier(query);
    return { data };
  }

  render() {
    const { data } = this.props;
    if (data.status === 404) {
      return <Answer emptyMessage="Modèle de courrier introuvable" />;
    }
    return (
      <Answer
        title={`Modèle de courrier :  ${data._source.title}`}
        emptyMessage="Modèle de courrier introuvable"
        intro={data._source.description && <p>{data._source.description}</p>}
        footer="Modèles de courrier fournis par vos services de renseignements des DIRECCTE en région"
        icon={ModeleCourrierIcon}
        date={data._source.date}
        sourceType="Modèle de document"
      >
        <section>
          <Html className="wrapper-outline courrier-type">
            {data._source.html}
          </Html>
        </section>
        <AsideTitle>Télécharger le modèle</AsideTitle>
        <DownloadFile
          title={data._source.title}
          file={`${API_URL}/docs/${data._source.filename}`}
          type="Modèle de document"
          icon={ModeleCourrierIcon}
        />
      </Answer>
    );
  }
}

export default withRouter(ModeleCourrier);
