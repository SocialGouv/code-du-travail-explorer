import React from "react";
import PropTypes from "prop-types";
import { Alert, Button, Card, Cards, NoAnswer, Section } from "@cdt/ui";
import { FeedbackModal } from "../common/FeedbackModal";
import styled from "styled-components";

const mapUrl = "https://www.openstreetmap.org/";

class AddressResults extends React.Component {
  static propTypes = {
    query: PropTypes.string.isRequired,
    results: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        address: PropTypes.shape({
          lignes: PropTypes.arrayOf(PropTypes.string).isRequired,
          code: PropTypes.string.isRequired,
          city: PropTypes.string.isRequired
        }),
        coord: PropTypes.shape({
          lat: PropTypes.number,
          lon: PropTypes.number
        }),
        tel: PropTypes.string.isRequired,
        email: PropTypes.string
      })
    )
  };

  state = {
    feedbackVisible: false
  };

  showFeedBackPopup = () => {
    this.setState({ feedbackVisible: true });
  };

  closeModal = () => {
    this.setState({ feedbackVisible: false });
  };

  render() {
    const { results, query } = this.props;

    return (
      <Section>
        {renderResults(results)}
        <NoAnswer>
          <Button onClick={this.showFeedBackPopup}>Posez votre question</Button>
        </NoAnswer>
        <FeedbackModal
          results={results.slice(3)}
          isOpen={this.state.feedbackVisible}
          closeModal={this.closeModal}
          query={query}
        />
      </Section>
    );
  }
}

export { AddressResults };

function renderResults(results) {
  if (results.length === 0) {
    return <NoResults />;
  } else {
    return <AddressCards data={results} />;
  }
}
function NoResults() {
  return (
    <Alert category="primary">
      Nous n’avons pas trouvé de résultat pour votre recherche.
    </Alert>
  );
}

function AddressCards({ data }) {
  return (
    <Cards>
      {data.map(item => (
        <AddressCard key={item.id} data={item} />
      ))}
    </Cards>
  );
}

function AddressCard({ data }) {
  return (
    <Card>
      <CardTitle>{data.title}</CardTitle>
      {data.subtitle && <CardSubtitle>{data.subtitle}</CardSubtitle>}
      <CardAddress
        href={`${mapUrl}?mlat=${data.coord.lat}&mlon=${data.coord.lon}&zoom=16`}
      >
        {data.address.lignes.map((ligne, i) => [ligne, <br key={i} />])}
        {data.address.code}
        &nbsp;
        {data.address.city}
      </CardAddress>
      <CardText>
        {data.tel && (
          <React.Fragment>
            Tél:&nbsp;
            <a href={`tel:${data.tel}`}>{data.tel}</a>
          </React.Fragment>
        )}
      </CardText>
      {data.email && (
        <CardMail href={`mailto:${data.email}`}>{data.email}</CardMail>
      )}
    </Card>
  );
}

const CardTitle = styled.strong`
  font-size: 1rem;
`;
const CardSubtitle = styled.span`
  font-size: 0.9rem;
  display: block;
`;
const CardAddress = styled.a`
  display: block;
  font-size: 0.9em;
  line-height: 1.5;
  margin: 1rem 0;
  :link {
    text-decoration: none;
    color: rgba(100, 100, 100, 0.9);
  }
  :hover {
    text-decoration: underline;
  }
  :visited {
    color: rgba(100, 100, 100, 0.8);
  }
`;
const CardText = styled.p`
  font-size: 0.9em;
  margin-top: 0.25em;
  margin-bottom: 0.5em;
  line-height: 1.5;
`;
const CardMail = styled.a`
  font-size: 0.9em;
  margin-top: 0.25em;
  margin-bottom: 0.5em;
  line-height: 1.5;
`;
