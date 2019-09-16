/** @jsx jsx */
import { jsx } from "theme-ui";
import { Grid, SimpleCard } from "@horacioh/gatsby-theme-instagram";
import Layout from "./../components/layout";
import Navbar from "./../components/navbar/navbar";
import Info from "./../components/info";
import Content from "./../components/content";
import styled from "@emotion/styled";

const InstaContainer = styled.div`
  @media (min-width: 48em) {
    padding: 2em;
    margin: 1em 5em;
  }
`;

const Instagram = () => (
  <Layout>
    <Navbar />
    <Info />
    <Content>
      <InstaContainer>
        <Grid card={SimpleCard} />
      </InstaContainer>
    </Content>
  </Layout>
);

export default Instagram;
