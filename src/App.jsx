import './App.css';
// eslint-disable-next-line no-use-before-define
import React from 'react';
import * as reactRouterDom from 'react-router-dom';
import Home from './navigate/onScreen/home';
import Contact from './navigate/onScreen/contact';
import Photogrid from './navigate/onScreen/photogrid';
import Where from './navigate/onScreen/where';

import BusinessCard from './navigate/onScreen/businessCard';

function App() {
  return (

    <reactRouterDom.BrowserRouter>
      <reactRouterDom.Routes>
        <reactRouterDom.Route to exact path="/" element={<Home />} />
        <reactRouterDom.Route to path="/contact" element={<Contact />} />
        <reactRouterDom.Route to path="/photogrid" element={<Photogrid />} />
        <reactRouterDom.Route to path="/where" element={<Where />} />
        <reactRouterDom.Route to path="/businesscard" element={<BusinessCard />} />
      </reactRouterDom.Routes>
    </reactRouterDom.BrowserRouter>

  );
}

export default App;
