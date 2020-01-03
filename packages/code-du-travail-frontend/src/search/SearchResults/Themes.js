import React from "react";
import Link from "next/link";
import { reportSelectionToMatomo } from "../utils";
import { getRouteBySource } from "@cdt/sources";
import { Grid, Tile, Title } from "@socialgouv/react-ui";

export const Themes = ({ items, query }) => (
  <>
    <Title>Les thèmes suivants peuvent vous intéresser</Title>
    <Grid>
      {items.map(({ slug, title, source, url, algo }) => (
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
            onClick={() => reportSelectionToMatomo(source, slug, url, algo)}
            title={title}
            striped
          />
        </Link>
      ))}
    </Grid>
  </>
);
