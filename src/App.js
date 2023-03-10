import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./components/FeedbackForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/"
          element={
            <>
          <FeedbackForm />
          <FeedbackList feedback={feedback} />
          </>
          }
          ></Route>
       
        <Route path="/about" element={<AboutPage/>}>

        </Route>
       
        </Routes>
        <AboutIconLink/>
      </div>
    </Router>
  );
}

export default App;
