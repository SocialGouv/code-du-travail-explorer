import React from "react";
import Link from "next/link";
import { getRouteBySource } from "@cdt/sources";
import {
  Container,
  LargeLink,
  List,
  ListItem,
  Section,
  Wrapper
} from "@cdt/ui-old";

import { LinkContent } from "./LinkContent";
import { getSourceIcon } from "../utils";

export const Law = ({ items, query }) => (
  <Section>
    <Container narrow>
      <Wrapper variant="light">
        <h2>{"Que dit la loi ?"}</h2>
        <List>
          {items.map(item => (
            <ListItem key={item.slug}>
              <Link
                href={{
                  pathname: `/${getRouteBySource(item.source)}/[slug]`,
                  query: { q: query, slug: item.slug }
                }}
                as={`/${getRouteBySource(item.source)}/${item.slug}?q=${query}`}
                passHref
              >
                <LargeLink icon={getSourceIcon(item.source)}>
                  <LinkContent {...item} />
                </LargeLink>
              </Link>
            </ListItem>
          ))}
        </List>
      </Wrapper>
    </Container>
  </Section>
);
