import React from "react";

import Header from "../header";
import Layout from "../layout";
import Footer from "../footer";

import bg from "../../assets/bg3.jpg";

const App = () => {
  return (
    <>
      <Header
        title={"This is Pokemon Card Game"}
        descr={"Simple Triple Triad Card Game"}
      />
      <Layout id={1} title={null} desc={null} urlBg={bg} colorBg={null} />
      <Layout id={2} title={null} desc={null} urlBg={null} colorBg={"grey"} />
      <Layout id={3} title={null} desc={null} urlBg={bg} colorBg={null} />
      <Footer />
    </>
  );
};

export default App;
