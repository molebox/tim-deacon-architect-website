/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const Container = styled.div`
  grid-area: content;
  background-color: black;
`;

const Content = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Content;
