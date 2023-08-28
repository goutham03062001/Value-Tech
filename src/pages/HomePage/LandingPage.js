import React from 'react'

import Services from "../../components/Services/Services";
import Contact from '../../components/Contact/Contact';
import WhoWeAre from '../../components/WhoWeAre/WhoWeAre';
import Intro from '../../components/Intro/Intro';
import Clients from '../../components/clients/Clients';
import Glimpses from '../../components/Glimpses/Glimpses';
import Navbar from '../../components/Navigation/Navbar';
import Footer from "../../components/Footer/Footer";
import Dashboard from '../../components/Dashboard/Dashboard';
const LandingPage = () => {
  return (
    <div>
    <Intro/>
     <WhoWeAre/>
     <Services/>
     <Clients/>
     {/* <Glimpses/> */}
     <Contact/>
     
    </div>
  )
}

export default LandingPage