/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { DarkModeToggle } from "gatsby-theme-overreacted-toggle";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Container = styled.div`
  grid-area: content;
`;

const MainImage = styled.div`
  margin: 2em 5em;
`;

const Image = styled(Img)`
  // margin: 3em;
  // padding: 1em;
  border-radius: 0.4em;
  -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
`;

const Content = () => {
  const content = useStaticQuery(query);
  const image = content.allSanityContent.edges;
  return (
    <Container>
      <MainImage>
        {image.map(({ node }) => (
          <Image fluid={node.mainImage.asset.fluid} alt="" />
        ))}
      </MainImage>
    </Container>
  );
};

export default Content;

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
