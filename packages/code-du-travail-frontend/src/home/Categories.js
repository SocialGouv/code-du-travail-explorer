import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "../../routes";

import {
  Container,
  Categories as CategoriesWrapper,
  Category as CategoryItem,
  Section,
  theme,
  Wrapper
} from "@cdt/ui";

export default class Categories extends React.Component {
  static propTypes = {
    themes: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        icon: PropTypes.string,
        text: PropTypes.string
      }).isRequired
    ),
    isRoot: PropTypes.bool,
    title: PropTypes.string
  };

  static defaultProps = {
    isRoot: true,
    title: "Retrouvez nos réponses thématiques",
    icon: null,
    text: ""
  };

  render() {
    const { title, themes, isRoot } = this.props;
    return (
      (themes.length && (
        <Section>
          <Container>
            <Wrapper>
              <Title>{title}</Title>
              <CategoriesWrapper>
                {themes.map(({ slug, label, text, icon }) => (
                  <CategoryItem key={slug + label} small={!isRoot}>
                    <Link route="themes" params={{ slug: slug || "/" }}>
                      <a title={label}>
                        <Category title={label} text={text} icon={icon} />
                      </a>
                    </Link>
                  </CategoryItem>
                ))}
              </CategoriesWrapper>
            </Wrapper>
          </Container>
        </Section>
      )) ||
      null
    );
  }
}

const Category = ({ title, text, icon }) => (
  <React.Fragment>
    <figure>
      <img src={`/static/assets/icons/${icon}`} alt={title} />
    </figure>
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  </React.Fragment>
);

Category.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string
};
Category.defaultProps = {
  icon: "chat.svg"
};

const { spacing } = theme;

const Title = styled.h2`
  text-align: center;
  margin-bottom: ${spacing.large};
`;
