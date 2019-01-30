import React from "react";
import styled from "styled-components";

import { Container } from "@cdt/ui";
import { Link } from "../../routes";

const Header = () => (
  <header className="bg-color color__white">
    <Container>
      <Wrapper>
        <Link route="index" params={{ q: "" }}>
          <LogoWrapper href="/?q=">
            <Logo src={"/static/assets/img/marianne.svg"} alt="" />
            <Title>
              Code du travail
              <br />
              numérique
            </Title>
          </LogoWrapper>
        </Link>
      </Wrapper>
    </Container>
  </header>
);
const Wrapper = styled.div`
  display: flex;
  padding: 1.25rem 0;
`;
const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  :link {
    text-decoration: none;
  }
  :hover {
    text-decoration: underline;
  }
`;

const Logo = styled.img`
  width: 5rem;
  height: 100%;
  margin-right: 1rem;
`;

const Title = styled.span`
  font-size: 1.3rem;
  line-height: 1.1;
  text-decoration: none;
`;
export default Header;
