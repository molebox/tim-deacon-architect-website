/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 0.5fr;
  grid-template-areas:
    "about"
    "contact";

  grid-area: info;

  @media (min-width: 48em) {
    width: 85%;
  }
`;

const About = styled.div`
  gird-area: about;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 5em 2em;
`;

const Contact = styled.div`
  grid-area: contact;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin: 2em;
`;

const ArchitectLogos = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 2em;
`;

const Info = () => {
  const homeInfo = useStaticQuery(query);
  const info = homeInfo.allSanityInfo.edges;
  return (
    <Container>
      {info.map(({ node }) => (
        <>
          <About>
            <p
              sx={{
                fontFamily: "main",
                fontSize: [2]
              }}
            >
              {node._rawAbout[1].children[0].text}
            </p>
            <br />
            <p
              sx={{
                fontFamily: "main",
                fontSize: [2]
              }}
            >
              {node._rawAbout[2].children[0].text}
            </p>
            <br />
            <p
              sx={{
                fontFamily: "main",
                fontSize: [2]
              }}
            >
              {node._rawAbout[3].children[0].text}
            </p>
          </About>
          <Contact>
            <a
              sx={{
                textDecoration: "none",
                fontFamily: "main",
                fontSize: [2],
                fontWeight: "heading",
                color: "text"
              }}
              href={`mailto:${node.email}`}
            >
              e: {node.email}
            </a>
            <ArchitectLogos>
            <Img fluid={node.arbWhite.asset.fluid} alt="" />
            <Img fluid={node.ribaWhite.asset.fluid} alt="" />
            </ArchitectLogos>
          </Contact>
        </>
      ))}
    </Container>
  );
};

export default Info;

export const query = graphql`
query InfoQuery {
  allSanityInfo {
    edges {
      node {
        _id
        _rawAbout(resolveReferences: {maxDepth: 10})
        email
        title
        slug {
          current
        }
        arbBlack {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        arbWhite {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        ribaBlack {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        ribaWhite {
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
