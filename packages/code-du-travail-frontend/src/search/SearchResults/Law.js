import React from "react";
import Link from "next/link";
import {
  CardList,
  Container,
  Section,
  Tile,
  Wrapper
} from "@socialgouv/react-ui";
import { summarize, reportSelectionToMatomo } from "../utils";
import { getRouteBySource } from "@cdt/sources";

export const Law = ({ items, query }) => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <CardList
            leftStripped
            title="Que dit le code du travail&nbsp;?"
            columns={2}
          >
            {items.map(({ slug, title, source, description, url, algo }) => (
              <Link
                key={slug}
                href={{
                  pathname: `${getRouteBySource(source)}/[slug]`,
                  query: query ? { q: query } : null
                }}
                as={`/${getRouteBySource(source)}/${slug}${
                  query ? `?q=${query}` : ""
                }`}
                passHref
              >
                <Tile
                  wide
                  title={title}
                  onClick={() =>
                    reportSelectionToMatomo(source, slug, url, algo)
                  }
                >
                  {summarize(description)}
                </Tile>
              </Link>
            ))}
          </CardList>
        </Wrapper>
      </Container>
    </Section>
  );
};
