import React from "react";
import PropTypes from "prop-types";
import { Suggester } from "./Suggester";
import {
  renderSuggestionsContainer,
  Suggestion,
  suggesterTheme
} from "./IdccSuggesterTheme";

export const reformatSiret = value =>
  value
    .toString()
    .replace(/ /g, "")
    .substring(0, 14)
    .replace(/(\d{1,3})?(\d{1,3})?(\d{1,3})?(\d{1,5})?/, "$1 $2 $3 $4")
    .trim();

export class CompanySuggester extends React.Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired
  };
  onSelect = value => {
    this.props.onSelect(value);
  };

  renderMessage = (query, suggestions, loading) => {
    if (loading) {
      return <p>chargement ...</p>;
    }
    const helpMessage =
      suggestions != null &&
      suggestions.length == 0 &&
      query.replace(/ /g, "").length == 14 &&
      `Aucune entreprise trouvée pour le SIRET ${query}`;
    // we display the <p> tag even when there is no message to prevent flickering
    return <p>{helpMessage ? helpMessage : <span>&nbsp;</span>}</p>;
  };

  render() {
    return (
      <Suggester
        onSearch={this.props.onSearch}
        onSelect={this.onSelect}
        renderSuggestion={renderSuggestion}
        renderSuggestionsContainer={renderSuggestionsContainer}
        placeholder="Numéro de SIRET à 14 chiffres"
        theme={suggesterTheme}
        // inserts spaces to have a "000 000 000 00000" format and limits to 14 chars
        reformatEnteredValue={reformatSiret}
        // only display an error message when the query is 14 chars long
        renderMessage={this.renderMessage}
      />
    );
  }
}

const renderSuggestion = suggestion => (
  <Suggestion>{suggestion.name}</Suggestion>
);
