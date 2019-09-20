/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "./../components/layout";
import Navbar from "./../components/navbar/navbar";
import Info from "./../components/info";
import Content from "./../components/content";
import styled from "@emotion/styled";
import SEO from "gatsby-theme-seo/src/components/seo";
import SimpleCard from "./../@horacioh/gatsby-theme-instagram/src/components/SimpleCard";
import Grid from "./../@horacioh/gatsby-theme-instagram/src/components/Grid";

const InstaContainer = styled.div`
  margin: 2em;

  @media (min-width: 48em) {
    padding: 2em;
    margin: 1em 5em;
  }
`;

const keywords = [
  "architect",
  "chartered architect",
  "consultation",
  "instagram"
];

const Instagram = () => (
  <Layout>
    <SEO
      title="Tim Deacon Architect Instagram"
      description="Professional architectural services, tailored to suit your aspirations."
      keywords={keywords}
    />
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
