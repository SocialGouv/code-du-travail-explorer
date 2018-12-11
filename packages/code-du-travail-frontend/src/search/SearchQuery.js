import React from "react";
import PropTypes from "prop-types";
import AsyncFetch from "../lib/AsyncFetch";
import SearchResults from "./SearchResults";

export class SearchQuery extends React.Component {
  static propTypes = {
    query: PropTypes.string,
    excludeSources: PropTypes.string,
    fetch: PropTypes.func.isRequired,
    render: PropTypes.func
  };

  static defaultProps = {
    query: "",
    excludeSources: "",
    render: ({ status, result, query }) => (
      <div>
        <div style={{ textAlign: "center" }}>
          {status === "loading" ? "..." : " "}
        </div>
        <div>
          {status === "success" &&
            result && <SearchResults query={query} data={result} />}
        </div>
      </div>
    )
  };

  shouldComponentUpdate(nextProps) {
    // prevent useless re-renders
    if (
      nextProps.query === this.props.query &&
      nextProps.excludeSources === this.props.excludeSources
    ) {
      return false;
    }
    return true;
  }

  render() {
    const { query, excludeSources, render, fetch } = this.props;
    return (
      <AsyncFetch
        autoFetch={true}
        fetch={() => fetch(query, excludeSources)}
        render={args => render({ ...args, query })}
      />
    );
  }
}
