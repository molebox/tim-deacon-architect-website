/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../components/layout";
import Content from "../components/content";
import Info from "../components/info";

const Index = () => {
  return (
    <Layout>
      <Info />
      <Content />
    </Layout>
  );
};

export default Index;
