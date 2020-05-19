import React from "react";
import styled from "styled-components";

import {
  Accordion,
  Container,
  PageTitle,
  Section,
  Wrapper,
} from "@socialgouv/react-ui";

import { Layout } from "../src/layout/Layout";
import Metas from "../src/common/Metas";
import { FocusRoot } from "../src/a11y";

export default function IntegrationPage({ pageUrl, ogImage }) {
  return (
    <Layout>
      <Metas
        url={pageUrl}
        title="widget - Code du travail numérique"
        description="Intégrer le Code du travail numérique à votre site"
        image={ogImage}
      />

      <Section>
        <Container narrow>
          <FocusRoot>
            <PageTitle>Intégrer le Code du travail numérique</PageTitle>
          </FocusRoot>
          <Wrapper variant="main">
            <p>
              L’équipe du Code du travail numérique vous propose d’intégrer son
              moteur de recherche sur votre site grâce à un module (widget).
            </p>
            <iframe
              src="/widget.html"
              width="100%"
              height="250px"
              title="widget - Code du travail numérique "
              style={{ border: "none" }}
            ></iframe>
            <p>
              Ce module permettra à l’utilisateur de faire une recherche depuis
              votre site dans la barre de recherche du module. Une fois la
              recherche lancée, cela ouvrira la page de recherche sur le site du
              Code du travail numérique.
            </p>
            <p>
              Comment faire ? Nous vous proposons 2 méthodes pour intégrer ce
              module à votre site :
            </p>
            <Accordion
              preExpanded={["id-js"]}
              items={[
                {
                  id: "id-js",
                  title: "javascript",
                  body: (
                    <>
                      <p>
                        L’installation ce passe en 2 temps. Il faut ajouter le
                        code suivant dans la balise <code>&lt;body&gt;</code> de
                        vos pages :
                      </p>
                      <Code>
                        <pre style={{ margin: 0, lineHeight: "125%" }}>
                          {`<script src="https://code.travail.gouv.fr/widget.js" async></script>`}
                        </pre>
                      </Code>
                      <p>
                        Il faut ensuite determiner là où vous souhaitez afficher
                        le widget dans vos pages.
                        <br />
                        Pour cela, il faut rajouter le code suivant à
                        l’emplacement ou vous souhaitez voir le widget
                        s’afficher.
                      </p>
                      <Code>
                        <pre style={{ margin: 0, lineHeight: "125%" }}>
                          {`<div id="cdtn-widget"></div>`}
                        </pre>
                      </Code>
                    </>
                  ),
                },
                {
                  title: "iframe",
                  body: (
                    <>
                      <Code>
                        <pre>
                          {`<iframe
  src="/widget.html"
  width="100%"
  height="250px"
  title="widget - Code du travail numérique "
  style="border: none"
></iframe>
`}
                        </pre>
                      </Code>
                    </>
                  ),
                },
              ]}
            />

            <p>
              En cas de difficultés rencontrées lors de l’intégration, nous vous
              invitons à ouvrir un{" "}
              <a href="https://github.com/SocialGouv/code-du-travail-numerique/issues/new">
                ticket d’erreur
              </a>
            </p>
          </Wrapper>
        </Container>
      </Section>
    </Layout>
  );
}

const Code = styled.div`
  width: auto;
  padding: 0.2em 0.6em;
  overflow: auto;
  background: #ffffff;
  border: solid gray;
  border-width: 0.1em 0.1em 0.1em 0.8em;
`;
