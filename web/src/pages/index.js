import React from "react";
import Layout from "../components/layout";
import Content from "../components/content";
import Info from "../components/info";
import Navbar from "../components/navbar/navbar";

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
