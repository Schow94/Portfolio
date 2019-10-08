import React from 'react';

import Projects from './Projects';
import Navbar from './Navbar';

import CssBaseline from '@material-ui/core/CssBaseline';

export default function PortfolioApp() {
  const { container } = styles;
  return (
    <div style={container}>
      <CssBaseline />
      <Navbar />
      <Projects />
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f5f5f5'
  }
};
