/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../components/layout";
import Content from "../components/content";
import Info from "../components/info";
import Navbar from "../components/navbar/navbar";
// import Nav from './../components/navbar/nav';

const Index = () => {
  return (
    <Layout>
      <Navbar />
      <Info />
      <Content />
    </Layout>
  );
};

export default Index;
