import React from "react";
import PropTypes from "prop-types";
import { X } from "react-feather";
import styled from "styled-components";
import { Button } from "@cdt/ui";
import Link from "../lib/Link";
import { IdccSuggester } from "./IdccSuggester";

class ConventionForm extends React.Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired
  };

  state = {
    convention: null
  };

  onSelectConvention = convention => {
    this.setState({ convention: convention });
  };

  onClearConvention = () => {
    this.setState({ convention: null });
  };

  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <h2>Trouvez votre convention collective</h2>
        <div>
          <Title>Recherche par nom ou par identifiant</Title>
          Saisissez l’identifiant de convention collective (IDCC) ou le nom de
          la branche&nbsp;:
          <SuggestWrapper>
            {!this.state.convention ? (
              <IdccSuggester
                onSearch={this.props.onSearch}
                onSelect={this.onSelectConvention}
              />
            ) : (
              <React.Fragment>
                <ConventionPreview {...this.state.convention} />
                <Button variant="link" onClick={this.onClearConvention}>
                  <X size="16" />
                </Button>
              </React.Fragment>
            )}
          </SuggestWrapper>
          <Subtitle>Comment trouver ma convention collective ?</Subtitle>
          <ul>
            <li>
              Elle doit figurer au <b>bulletin de paie</b>, et sur une notice
              remise à l’embauche ou <b>sur le contrat de travail</b>
            </li>
            <li>
              Sur l’affichage obligatoire dans l’entreprise (avec les modalités
              de consultation en entreprise)
            </li>
          </ul>
          <Subtitle>Quelle est la convention collective applicable ?</Subtitle>
          <ul>
            <li>
              En principe celle relevant de l’activité principale dans
              l’entreprise pour les cas les plus simples.
            </li>
          </ul>
        </div>
      </form>
    );
  }
}

const SuggestWrapper = styled.div`
  margin-top: 10px;
`;

const Title = styled.h3`
  color: #000;
  font-size: 1.2em;
  margin-top: 20px;
`;

const Subtitle = styled.div`
  color: #666;
  font-size: 1em;
  font-weight: bold;
  margin: 20px 0 10px 0;
`;

const ConventionPreview = ({ slug, idcc, title }) => {
  const query = { ...(slug ? { slug } : { idccNum: idcc }) };
  console.log("Idcc is:", idcc);
  return (
    <Link
      pathname="kali"
      query={query}
      alias={`kali${!slug && idcc ? "-idcc" : ""}`}
      slugKey={slug ? "slug" : "idccNum"}
    >
      <a>
        IDCC {idcc} {title ? `- ${title}` : ""}
      </a>
    </Link>
  );
};
ConventionPreview.propTypes = {
  slug: PropTypes.string,
  idcc: PropTypes.string,
  title: PropTypes.string
};

export { ConventionForm, ConventionPreview, Title, SuggestWrapper };
