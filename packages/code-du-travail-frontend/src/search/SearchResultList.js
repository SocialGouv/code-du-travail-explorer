import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "@cdt/ui";

import { Link } from "../../routes";
import { getRouteBySource, getLabelBySource } from "../sources";
import { SourceIcon } from "./SourceIcon";

const SearchResult = ({ result }) => {
  const { title, source, author } = result;
  return (
    <React.Fragment>
      <SourceIcon source={source} />
      <Content>
        <strong>{title.replace(/ \?/, " ?")}</strong>
        <P>
          <Label>Source</Label>: <Label>{getLabelBySource(source)}</Label>
          {source && author ? " - " : null}
          <Value>{author}</Value>
        </P>
      </Content>
    </React.Fragment>
  );
};

class ListLink extends React.Component {
  ref = React.createRef();
  static propTypes = {
    focused: PropTypes.bool
  };
  static defaultProps = {
    focused: false
  };
  componentDidMount() {
    if (this.ref.current && this.props.focused) {
      this.ref.current.focus();
    }
  }

  render() {
    return <ResultLink ref={this.ref} {...this.props} />;
  }
}

const SearchResultList = ({ items, query }) => {
  return (
    <List>
      {items.map(({ _id, _source }, i) => (
        <li key={_id}>
          <Link
            route={getRouteBySource(_source.source)}
            params={{ q: query, slug: _source.slug }}
            passHref
          >
            <ListLink focused={i === 0}>
              <SearchResult result={_source} />
            </ListLink>
          </Link>
        </li>
      ))}
    </List>
  );
};

SearchResultList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      _source: PropTypes.shape({
        title: PropTypes.string,
        source: PropTypes.string,
        slug: PropTypes.string
      })
    })
  )
};

export { SearchResultList };

const { colors, spacing, fonts, box } = theme;

const List = styled.ul`
  list-style-type: none;
  margin-left: 0;
`;

const ResultLink = styled.a`
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  border-radius: ${box.borderRadius};
  padding: ${spacing.base};
  :link {
    text-decoration: none;
  }
  :hover {
    border-color: ${colors.elementBorder};
    background: ${colors.darkBackground};
  }
  :hover strong {
    text-decoration: underline;
  }
`;

const Content = styled.div`
  padding-left: ${spacing.base};
`;
const P = styled.p`
  margin-bottom: 0;
  font-size: ${fonts.sizeSmall};
`;

const Label = styled.span`
  font-weight: 700;
  color: ${colors.darkerGrey};
`;

const Value = styled.span`
  font-weight: 700;
  text-transform: uppercase;
  color: ${colors.grey};
`;
