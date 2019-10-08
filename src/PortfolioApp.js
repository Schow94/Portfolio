import React from 'react';

import Projects from './Projects';
import Navbar from './Navbar';

import CssBaseline from '@material-ui/core/CssBaseline';

export default function PortfolioApp() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Projects />
    </div>
  );
}
