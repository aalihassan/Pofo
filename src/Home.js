import React from 'react';
import './Home.css';
import Banner from './Components/Banner';
import Content from './Components/Content';
import CreativeBlogs from './Components/CreativeBlogs';
import Filter from './Components/Filter';
import Layout from './Components/Layout';
import Magicbox from './Components/Magicbox';
import Navbar from './Components/Navbar';
import PageContent from './Components/PageContent';
import SliderSection from './Components/SliderSection';
import SlidersSection from './Components/SlidersSection';
import Feature from './Components/Feature';
import Footer from './Components/Footer';
// import Header from './Components/Header';

function Home() {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      <Banner />
      <Content />
      <Filter />
      <PageContent />
      <SliderSection />
      <SlidersSection />
      <CreativeBlogs />
      <Magicbox />
      <Layout />
      <Feature />
      <Footer />
    </div>
  );
}

export default Home;
