/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";

const ImageContainer = styled.div`
  margin: 0 auto;
  width: 9em;

  @media (min-width: 48em) {
    // margin: 2em 5em;
    width: 8em;
  }
`;

const Image = styled(Img)`
  position: relative;
  -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
`;

const Logo = () => {
  const content = useStaticQuery(query);
  const image = content.allSanityInfo.edges;
  return image.map(({ node }) => (
    <ImageContainer>
      <Image fluid={node.logo.asset.fluid} alt="" />
    </ImageContainer>
  ));

  // <Link
  //   sx={{
  //     color: "text",
  //     textDecoration: "none",
  //     fontSize: [4],
  //     letterSpacing: "text"
  //   }}
  //   to="/"
  // >
  //   tim deacon
  //   <h6
  //     sx={{
  //       fontFamily: "main",
  //       letterSpacing: "logo",
  //       fontSize: [3]
  //     }}
  //   >
  //     architect
  //   </h6>
  // </Link>
};

export default Logo;

export const query = graphql`
  query LogoQuery {
    allSanityInfo {
      edges {
        node {
          logo {
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
