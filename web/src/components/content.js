/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 2fr;
  grid-template-areas:
    "links"
    "mainImage";

  grid-area: content;

  background: hotpink;
`;

const Links = styled.div`
  grid-area: links;
`;

const MainImage = styled.div`
  grid-area: mainImage;
`;

const Content = () => (
  <Container>
    <Links>
      <h2>LINKS HERE</h2>
    </Links>
    <MainImage>
      <h2>MAIN IMAGE HERE</h2>
    </MainImage>
  </Container>
);

export default Content;
