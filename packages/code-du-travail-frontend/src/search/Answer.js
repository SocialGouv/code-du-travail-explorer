import React from "react";
import Head from "next/head";
import { Container, Alert, Article } from "@cdt/ui";
import { withRouter } from "next/router";

import Disclaimer from "../common/Disclaimer";
import SeeAlso from "../common/SeeAlso";
import FeedbackForm from "../common/FeedbackForm";
import Html from "../common/Html";
import Search from "./Search";
import { DateContenu } from "../common/DateContenu";
import { FeedbackModal } from "../common/FeedbackModal";

const BigError = ({ children }) => (
  <Container style={{ fontSize: "2em", textAlign: "center", margin: "20%" }}>
    <Alert warning>{children}</Alert>
  </Container>
);

class Answer extends React.Component {
  state = {
    modalVisible: false
  };

  onValidate = () => {
    console.log("👍");
  };
  onInvalidate = () => {
    this.setState({ modalVisible: true });
  };
  closeModal = () => {
    this.setState({ modalVisible: false });
  };
  setResults = searchResults => {
    this.setState({ searchResults });
  };
  render() {
    const {
      router,
      title,
      intro,
      html,
      children,
      footer,
      date,
      emptyMessage = "Aucun résultat"
    } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
        </Head>
        <Search onResults={this.setResults} />
        {!html && !children && <BigError>{emptyMessage}</BigError>}
        {(html || children) && (
          <React.Fragment>
            <FeedbackModal
              results={this.state.searchResults}
              isOpen={this.state.modalVisible}
              closeModal={this.closeModal}
              query={router.query.q}
            />
            <Article
              title={title}
              onValidate={this.onValidate}
              onInvalidate={this.onInvalidate}
            >
              <Disclaimer />
              {intro}
              <Html>{html}</Html>
              {children}
              {date && <DateContenu value={date} />}
              <div
                style={{
                  background: "var(--color-light-background)",
                  padding: 10,
                  marginTop: 50
                }}
              >
                {footer}
              </div>
            </Article>
          </React.Fragment>
        )}
        <SeeAlso />
        <FeedbackForm query={router.query.q} />
      </React.Fragment>
    );
  }
}

export default withRouter(Answer);
