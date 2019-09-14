import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 0.5fr 1fr 1fr;
  grid-template-areas:
    "info content"
    "info content"
    "info content";

  height: 100vh;
`;

const Layout = ({ children }) => (
  <Container>
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          scroll-behavior: smooth;
          overflow-y: scroll;
          -webkit-overflow-scrolling: touch;
          overflow: hidden;
        }
      `}
    />
    {children}
  </Container>
);

export default Layout;
