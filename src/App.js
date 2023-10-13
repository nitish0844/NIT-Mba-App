import React from "react";
import QuizOne from "./Screens/QuizOne/QuizOne";
import QuizQuestion from "./Screens/QuizOne/QuizQuestion";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuizOne />} />
        <Route path="/game" element={<QuizQuestion />} />
      </Routes>
    </Router>
  );
};

export default App;
