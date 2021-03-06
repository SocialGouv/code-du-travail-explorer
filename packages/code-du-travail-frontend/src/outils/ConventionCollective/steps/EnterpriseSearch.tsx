import { SOURCES } from "@socialgouv/cdtn-sources";
import {
  Button,
  ScreenReaderOnly,
  Section as SectionUi,
  Title,
  Wrapper,
} from "@socialgouv/cdtn-ui";
import Link from "next/link";
import React, { useRef } from "react";
import Spinner from "react-svg-spinner";
import styled from "styled-components";

import { Enterprise } from "../../../conventions/Search/api/enterprises.service";
import { InlineError } from "../../common/ErrorField";
import { HelpModal } from "../common/Modal";
import { useNavContext } from "../common/NavContext";
import { ListItem, ResultList } from "../common/ResultList";
import { useTrackingContext } from "../common/TrackingContext";
import { EnterpriseButton } from "../enterprise/EnterpriseButton";
import { SearchEnterprise, SearchParams } from "../enterprise/SearchEnterprise";

type EnterpriseSearchStepProps = {
  onBackClick: () => void;
};

const EnterpriseSearchStep = ({
  onBackClick,
}: EnterpriseSearchStepProps): JSX.Element => {
  const { setSearchParams, setEnterprise } = useNavContext();
  const { trackEvent, uuid, title } = useTrackingContext();
  const refInput = useRef<HTMLDivElement>();
  function handleEnterpriseSelection(
    enterprise: Enterprise,
    params: SearchParams
  ) {
    setEnterprise(enterprise);
    setSearchParams(params);
  }
  function openModalHandler(openModal: () => void) {
    trackEvent("cc_search_help", "click_cc_search_help_p2", title, uuid);
    openModal();
  }
  return (
    <>
      <SearchEnterprise
        inputRef={refInput}
        renderResults={(state, params) => {
          if (refInput.current && state.data && !state.isLoading) {
            refInput.current.scrollIntoView({ behavior: "smooth" });
          }
          const isSiret = /^\d{14}$/.test(params.query.replace(/\s/g, ""));
          if (state.isLoading) {
            return (
              <Section>
                <Spinner aria-hidden="true" />{" "}
                <span role="status">recherche en cours</span>
              </Section>
            );
          }
          if (state.isError) {
            if (typeof state.error === "string") {
              return (
                <Section role="status">
                  <InlineError>{state.error}</InlineError>
                </Section>
              );
            }
            return <Section role="status">{state.error}</Section>;
          }

          return state.data ? (
            state.data.length > 0 ? (
              <Section>
                <ScreenReaderOnly role="status">
                  {state.data.length} résultats
                </ScreenReaderOnly>
                <ResultList query={`${params.query}-${params.address}`}>
                  {state.data.map((item, index) => {
                    return (
                      <ListItem key={item.siren}>
                        <EnterpriseButton
                          showAddress={params.address.length > 0 || isSiret}
                          isFirst={index === 0}
                          enterprise={item}
                          onClick={() =>
                            handleEnterpriseSelection(item, params)
                          }
                        />
                      </ListItem>
                    );
                  })}
                </ResultList>
              </Section>
            ) : (
              <Section>
                <Wrapper variant="light">
                  <p>
                    <strong>Aucune entreprise n’a été trouvée</strong>.
                  </p>
                  Suggestions&nbsp;:
                  <ul>
                    <li>Vérifiez l’orthographe des termes de recherche</li>
                    <li>
                      Utilisez la rubrique ci-dessous “Vous ne trouvez pas votre
                      entreprise&nbsp;? Consultez notre aide”
                    </li>
                  </ul>
                </Wrapper>
                <Wrapper>
                  Vous ne trouvez pas votre entreprise&nbsp;?
                  <br />
                  <HelpModal
                    title="Vous ne trouvez pas votre convention collective"
                    renderButton={(openModal) => (
                      <Button
                        variant="link"
                        onClick={() => openModalHandler(openModal)}
                      >
                        Consulter notre aide
                      </Button>
                    )}
                  >
                    <Title stripe="none" as="h3">
                      Vous ne trouvez pas votre convention collective&nbsp;?
                    </Title>
                    <p>Il peut y avoir plusieurs explications à cela&nbsp;:</p>
                    <ul>
                      <li>
                        Votre entreprise a été enregistrée sous un autre nom ou
                        un autre code : si vous le pouvez, utilisez son numéro
                        Siret. Ce dernier doit être présent sur votre bulletin
                        de paie.
                      </li>
                      <li>
                        Votre entreprise a un statut particulier :
                        administration ou établissements publics, associations,
                        secteur agricole, La Poste, La Croix Rouge etc. ;
                      </li>
                      <li>
                        Votre entreprise n’a pas de convention collective.
                      </li>
                    </ul>
                  </HelpModal>
                </Wrapper>
              </Section>
            )
          ) : null;
        }}
      />

      <Link href={`/${SOURCES.TOOLS}/convention-collective`} passHref>
        <Button as="a" small type="button" onClick={onBackClick} variant="flat">
          Précédent
        </Button>
      </Link>
    </>
  );
};

export { EnterpriseSearchStep };

const Section = styled(SectionUi)`
  padding-top: 1rem;
`;
