import React from 'react';

import Layout from '../components/layout';
import Footer from '../components/Footer';
import Converter from "../components/Converter"
import Header from '../components/Header';


const IndexPage = () => (
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="intro">
        <div className="inner">
          <Converter></Converter>
        </div> 
      </section>
    </div>

    <Footer />
  </Layout>
);

export default IndexPage;
