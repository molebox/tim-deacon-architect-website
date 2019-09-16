/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../components/layout";
import Content from "../components/content";
import Info from "../components/info";
import Navbar from "../components/navbar/navbar";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const ImageContainer = styled.div`
  margin: 2em 1em;

  @media (min-width: 48em) {
    margin: 2em 5em;
  }
`;

const Image = styled(Img)`
  border-radius: 0.4em;
  -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;

  -webkit-box-shadow: 4px 7px 16px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 7px 16px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 7px 16px -5px rgba(0, 0, 0, 0.75);
`;

const Index = () => {
  const content = useStaticQuery(query);
  const image = content.allSanityContent.edges;
  return (
    <Layout>
      <Navbar />
      <Info />
      <Content>
        <ImageContainer>
          {image.map(({ node }) => (
            <Image fluid={node.mainImage.asset.fluid} alt="" />
          ))}
        </ImageContainer>
      </Content>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query MainImageQuery {
    allSanityContent {
      edges {
        node {
          mainImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;
