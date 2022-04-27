import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Content } from '../common/components/content';
import { Footer } from '../common/components/footer';
import { AppTheme } from '../common/layout';
import About from './about';
import Home from './home';
import NotFound from './notfound';
import Room from './room';

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content content={<Home />} />} />
          <Route path="/room/:roomId" element={<Content content={<Room />} />} />
          <Route path="/about" element={<Content content={<About />} />} />
          <Route path="*" element={<Content content={<NotFound />} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
