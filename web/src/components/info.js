/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 0.2fr 0.2fr;
  grid-template-areas:
    "about"
    "contact"
    "logos";

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

  & a::after {
    content: "";
    display: block;
    width: 10%;
    padding-top: 1em;
    border-bottom: 2px solid black;
    transition: 0.5s;
    position: absolute;
    z-index: 10;
  }

  & a:hover::after {
    width: 15%;
    position: absolute;
  }

  @media (min-width: 48em) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    margin: 2em;
  }
`;

const ArchitectLogos = styled.div`
  grid-area: logos;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  margin: 2em;
`;

const ARBLogo = styled(Img)`
  width: 15em;
  margin-right: 2em;
`;

const RIBALogo = styled(Img)`
  width: 15em;
`;

const Info = () => {
  const [colorMode] = useColorMode();
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
          </Contact>
          <ArchitectLogos>
            {colorMode === "light" ? (
              <>
                <ARBLogo fluid={node.arbWhite.asset.fluid} alt="" />
                <RIBALogo fluid={node.ribaWhite.asset.fluid} alt="" />
              </>
            ) : (
              <>
                <ARBLogo fluid={node.arbBlack.asset.fluid} alt="" />
                <RIBALogo fluid={node.ribaBlack.asset.fluid} alt="" />
              </>
            )}
          </ArchitectLogos>
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
          _rawAbout(resolveReferences: { maxDepth: 10 })
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
