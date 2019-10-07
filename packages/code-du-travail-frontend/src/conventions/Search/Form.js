import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Spinner from "react-svg-spinner";

import slugify from "@cdt/data/slugify";
import { theme, Container, Table } from "@cdt/ui-old";

import SearchCC from "./SearchCC";

// following data/populate.js slug rules
const getConventionSlug = convention =>
  slugify(`${convention.num}-${convention.title}`.substring(0, 80));

// link to a Convention
const Convention = ({ num, title, onClick }) => {
  return (
    <Box>
      <Flex>
        {onClick ? (
          <ConventionLink onClick={onClick}>{title}</ConventionLink>
        ) : (
          <Link
            href="/convention-collective/[slug]"
            as={`/convention-collective/${getConventionSlug({
              num,
              title
            })}`}
            passHref
          >
            <ConventionLink>{title}</ConventionLink>
          </Link>
        )}
      </Flex>
    </Box>
  );
};

const TagSiret = ({ siret }) => (
  <a
    title="Ouvrir la fiche entreprise"
    target="_blank"
    rel="noopener noreferrer"
    style={{ fontSize: "0.8em" }}
    href={`https://entreprise.data.gouv.fr/etablissement/${siret}`}
  >
    Fiche entreprise
  </a>
);

// demo app
// userland UI
const Search = ({
  title = "Recherche de convention collective",
  resetOnClick = true,
  style,
  className,
  onSelectConvention
}) => {
  const [query, setQuery] = useState("");
  const onInputChange = e => {
    const value = e.target.value;
    setQuery(value);
  };
  const selectConvention = convention => {
    if (onSelectConvention) {
      onSelectConvention(convention);
      if (resetOnClick) {
        setQuery("");
      }
    }
  };

  return (
    <Container style={style} className={className}>
      {title && <h3>{title}</h3>}
      <p>
        Afin de sélectionner votre convention collective, saisissez le nom de
        votre entreprise, son numéro SIRET, ou directement le nom de votre
        convention collective.
      </p>
      <Input
        placeholder="Nom d'entreprise, SIRET, nom de convention collective"
        value={query}
        type="text"
        onChange={onInputChange}
      />
      <SearchCC
        query={query}
        render={({ status, results }) =>
          query && (
            <ResultsContainer>
              {status === "loading" && (
                <div>
                  <Spinner /> Recherche des convention collectives...
                </div>
              )}
              {status === "error" && (
                <div>Aucun résultat pour votre recherche.</div>
              )}
              {status === "success" && results && results.length ? (
                <Table>
                  <tbody>
                    {results.map(result => (
                      <tr key={result.id}>
                        <td>
                          <Flex>
                            <ResultLabel>{result.label}</ResultLabel>
                            {result.siret && <TagSiret siret={result.siret} />}
                          </Flex>
                          <ConventionsContainer>
                            {result.conventions && result.conventions.length ? (
                              result.conventions.map(convention => (
                                <Convention
                                  onClick={
                                    onSelectConvention &&
                                    (() => selectConvention(convention))
                                  }
                                  key={convention.id}
                                  {...convention}
                                />
                              ))
                            ) : (
                              <div className="text-danger">
                                Aucune convention collective connue pour cette
                                entreprise
                              </div>
                            )}
                          </ConventionsContainer>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                ""
              )}
            </ResultsContainer>
          )
        }
      />
    </Container>
  );
};

const ResultsContainer = styled.div`
  margin-top: ${theme.spacing.medium};
`;

const ConventionLink = styled.a`
  color: ${theme.colors.lightText};
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
`;

const Box = styled.div`
  margin: ${theme.spacing.small} 0;
`;

const ConventionsContainer = styled.div`
  margin-top: ${theme.spacing.small};
`;

const Flex = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const ResultLabel = styled.div`
  flex: 1 0 auto;
  fontsize: ${theme.fonts.sizeH4};
  margin-right: ${theme.spacing.tiny};
  overflow: hidden;
  text-overflow: ellipsis;
  whitespace: nowrap;
  max-width: calc(100% - 200px);
  font-weight: bold;
  color: ${theme.colors.blueDark};
`;

export default Search;
