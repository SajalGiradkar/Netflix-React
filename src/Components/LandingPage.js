import React from 'react'
import First_page from './Landing_Page_Components/First_page';
import Second_page from './Landing_Page_Components/Second_page';
import Third_page from './Landing_Page_Components/Third_page';
import Fourth_page from './Landing_Page_Components/Fourth_page';
import Fifth_page from './Landing_Page_Components/Fifth_page';
import Faq from './Landing_Page_Components/Faq';
import Footer from './Footer';

import './css/Landing_page.css';

const Landing_page = () => {
  return (
    <section id='container'>
      <First_page />
      <Second_page />
      <Third_page />
      <Fourth_page />
      <Fifth_page />
      <Faq />
      <Footer />
    </section>
  )
}

export default Landing_page