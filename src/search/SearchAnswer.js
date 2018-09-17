import React from "react";

import Alert from "../common/Alert";
import api from "../../conf/api.js";
import Answer from "./Answer";
// import FeedbackForm from "../common/FeedbackForm.js";
// import SeeAlso from "../common/SeeAlso";

// Display the details of a single result.

class SearchAnswer extends React.Component {
  state = {
    data: null,
    error: null,
    pendingXHR: false
  };

  componentDidMount() {
    // `props.data` holds the data for all the results fetched by the parent component.
    // If it exists, it means that the route was accessed via client side navigation.
    // In this case, we can avoid an XHR call by finding the right item in `props.data`.
    if (this.props.data) {
      const data = this.props.data.hits.hits.find(
        item => item._id === this.props.id
      );
      return this.setState({ data });
    }
    // Otherwise, the route was accessed via direct URL (server side navigation).
    // We need to fetch the data from the API.
    return this.fetchData(this.props.id);
  }

  fetchData = () => {
    this.setState({ pendingXHR: true, error: null }, () => {
      fetch(`${api.BASE_URL}/items/${this.props.id}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(api.ERROR_MSG);
        })
        .then(data => this.setState({ data, pendingXHR: false }))
        .catch(error => this.setState({ error, pendingXHR: false }));
    });
  };

  render() {
    const { data, error, pendingXHR } = this.state;

    if (pendingXHR) {
      return <p>Chargement…</p>;
    }

    if (error) {
      return (
        <div className="section-light">
          <div className="container">
            <Alert category="danger">{error.message}</Alert>
          </div>
        </div>
      );
    }

    if (!data) {
      return null;
    }

    let source;
    if (data._source.source === "faq") {
      source = "Source : FAQ";
    } else if (data._source.source === "code_bfc") {
      source = "Source : DIRECCTE Bourgogne-Franche-Comté (Juin 2017)";
    }

    return (
      <React.Fragment>
        <Answer
          title={data._source.title}
          html={data._source.text}
          footer={source}
        />
      </React.Fragment>
    );
  }
}

export default SearchAnswer;
