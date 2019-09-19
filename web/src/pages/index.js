/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../components/layout";
import Content from "../components/content";
import Info from "../components/info";
import Navbar from "../components/navbar/navbar";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import SEO from "gatsby-theme-seo/src/components/seo";

const ImageContainer = styled.div`
  margin: 2em 1em;
  border: blue solid 1px;

  @media (min-width: 48em) {
    margin: 2em 5em;
    width: 80%;
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
const keywords = ["architect", "chartered architect", "consultation"];

const Index = () => {
  const content = useStaticQuery(query);
  const image = content.allSanityContent.edges;
  return (
    <Layout>
      <SEO
        title="Tim Deacon Architect"
        description="Professional architectural services, tailored to suit your aspirations."
        keywords={keywords}
      />
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
