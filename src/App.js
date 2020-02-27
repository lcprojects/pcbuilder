import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from 'react-router-dom';

import './App.css';

import PCBuilder from './containers/PCBuilder/PCBuilder.js';
import CPUPicker from './containers/CPUPicker/CPUPicker.js';
import GPUPicker from './containers/GPUPicker/GPUPicker.js';
import RAMPicker from './containers/RAMPicker/RAMPicker.js';

import Layout from './hoc/Layout.js';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={PCBuilder}></Route>
          <Route path="/cpu" exact component={CPUPicker}></Route>
          <Route path="/gpu" exact component={GPUPicker}></Route>
          <Route path="/ram" exact component={RAMPicker}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;