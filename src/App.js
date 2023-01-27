import React from 'react';
import Services from "./components/Services/Services";
import Contact from './components/Contact/Contact';
import WhoWeAre from './components/WhoWeAre/WhoWeAre';
import Intro from './components/Intro/Intro';
import Clients from './components/clients/Clients';
import Glimpses from './components/Glimpses/Glimpses';
const App = () => {
  return (
    <div>
    <Intro/>
     <WhoWeAre/>
     <Services/>
     <Clients/>
     <Glimpses/>
     <Contact/>
    </div>
  )
}

export default App 