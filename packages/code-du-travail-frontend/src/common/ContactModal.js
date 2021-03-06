import { Button, Heading, Modal, Wrapper } from "@socialgouv/cdtn-ui";
import PropTypes from "prop-types";
import React, { useCallback, useState } from "react";
import styled from "styled-components";

import { ServiceRenseignement } from "./ServiceRenseignement";

export const ContactModal = ({ children: renderProp }) => {
  const [isModalVisible, setModalVisibility] = useState(false);
  const [isServiceRenseignement, setServiceRenseignement] = useState(false);

  const openModal = useCallback(() => {
    setModalVisibility(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalVisibility(false);
    setServiceRenseignement(false);
  }, []);

  const showServiceRenseignement = useCallback(() => {
    setServiceRenseignement(true);
  }, []);

  return (
    <>
      {renderProp(openModal)}
      <Modal isOpen={isModalVisible} onDismiss={closeModal} title="Contact">
        {(isServiceRenseignement && <ServiceRenseignement />) || (
          <>
            <StyledHeading as="h4">Contact</StyledHeading>
            <Wrapper variant="dark">
              <p>
                Si vous souhaitez nous interroger sur vos droits ou sur des
                dispositions en droit du travail, nous vous invitons à contacter{" "}
                <Button variant="link" onClick={showServiceRenseignement}>
                  les services du ministère du Travail
                </Button>
              </p>
              <p>
                <strong>Attention</strong> : Aucune réponse en droit du travail
                ne pourra vous être apportée via l’adresse ci-dessous.
              </p>
            </Wrapper>
            <p>
              Si vous avez une <strong>suggestion</strong> sur l’utilisation de
              ce site ou si vous avez rencontré un{" "}
              <strong>problème technique</strong>, vous pouvez nous contacter à
              cette adresse&nbsp;:{" "}
              <StyledLink href="mailto:codedutravailnumerique@travail.gouv.fr">
                codedutravailnumerique@travail.gouv.fr
              </StyledLink>
            </p>
          </>
        )}
      </Modal>
    </>
  );
};

export default ContactModal;

ContactModal.propTypes = {
  children: PropTypes.func.isRequired,
};

const StyledHeading = styled(Heading)`
  margin-top: 0;
`;

const StyledLink = styled.a`
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`;
