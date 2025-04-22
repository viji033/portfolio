// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Header from './components/pages/Header';
// import About from './components/pages/About';
// import Resume from './components/pages/Resume';
// import Services from './components/pages/Services';
// import Portfolio from './components/pages/Portfolio';
// import Blog from './components/pages/Blog';
// import Contact from './components/pages/Contact';
// import Footer from './components/pages/Footer';
// import Hire from './components/pages/Hire';

// function AppContent() {
//   const location = useLocation();

//   return (
//     <div id="wrapper">
//       <Routes>
//         <Route path="/" element={<Header />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/resume" element={<Resume />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/hire" element={<Hire />} />
//       </Routes>

//       {location.pathname !== '/' && <Footer />}
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router basename="/portfolio">
//       <AppContent />
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/pages/Header';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import Hire from './components/pages/Hire';

function AppContent() {
  const location = useLocation();

  return (
    <div id="wrapper">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hire" element={<Hire />} />
      </Routes>

      {/* Show footer on all pages except home */}
      {location.pathname !== '/' && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

