import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { ErrorBoundary } from "../common/ErrorBoundary";

import "@cdt/css";
import "@reach/dialog/styles.css";

const HomeLayout = ({ children }) => {
  return (
    <React.Fragment>
      <ErrorBoundary>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </ErrorBoundary>
    </React.Fragment>
  );
};

export { HomeLayout };
