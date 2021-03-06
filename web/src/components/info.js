/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import SEO from "gatsby-theme-seo/src/components/seo";
import PortableText from "@sanity/block-content-to-react";
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 0.2fr 0.2fr;
  grid-template-areas:
    "about"
    "contact"
    "logos";

  grid-area: info;
  width: 100vw;
  background-color: black;

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
  margin: 1em 2em;

  @media (min-width: 48em) {
    margin: 2em 2em;

    & p {
      padding: 1em 0 0 0;
    }
  }
`;

const Contact = styled.div`
  grid-area: contact;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: black;

  margin: 2em;

  & > a::after {
    content: "";
    display: block;
    width: 15%;
    padding-top: 1em;
    border-bottom: 2px solid white;
    transition: 0.5s;
    position: absolute;
    z-index: 10;
  }

  & > a:hover::after {
    width: 20%;
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
  width: 7em;
  margin-right: 2em;

  @media (min-width: 48em) {
    width: 9em;
    margin-right: 2em;
  }
`;

const RIBALogo = styled(Img)`
  width: 7em;

  @media (min-width: 48em) {
    width: 9em;
    margin-right: 2em;
  }
`;

const Info = () => {
  const homeInfo = useStaticQuery(query);
  const info = homeInfo.allSanityInfo.edges;
  const metadata = homeInfo.allSanityMetadata.edges;
  return (
    <Container>
      {metadata.map(({node}) => (
        <SEO
        title="Tim Deacon Architect | Shoreham-by-Sea | Brighton | Worthing | Sussex"
        description={node.description}
        keywords={node.keywords}
      />
      ))}
      {info.map(({ node }) => (
        <>
          <About>
            <PortableText
              sx={{
                fontFamily: "main",
                fontWeight: "body",
                color: "text"
              }}
              blocks={node._rawAbout}
            />
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
            <ARBLogo fluid={node.arbBlack.asset.fluid} alt="" />
            <RIBALogo fluid={node.ribaBlack.asset.fluid} alt="" />
            {/* {colorMode === "light" ? (
              <>
                <ARBLogo fluid={node.arbWhite.asset.fluid} alt="" />
                <RIBALogo fluid={node.ribaWhite.asset.fluid} alt="" />
              </>
            ) : (
              <>
                <ARBLogo fluid={node.arbBlack.asset.fluid} alt="" />
                <RIBALogo fluid={node.ribaBlack.asset.fluid} alt="" />
              </>
            )} */}
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
    allSanityMetadata {
      edges {
        node {
          keywords
          description
        }
      }
    }
  }
`;
