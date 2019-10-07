import { createGlobalStyle } from "styled-components";
import { theme } from "@cdt/ui-old";

const { box } = theme;

export default createGlobalStyle`
  hr {
    width: 100%;
    border: ${box.border};
    border-width: 1px 0 0 0;
  }
`;
