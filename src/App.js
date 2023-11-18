import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Section from "./Components/Section/Section";
import Trade from "./Components/Trade/Trade";
import Graph from "./Components/Graph/Graph";
import Community from "./Components/Community/Community";
import Visionary from "./Components/Visionary/Visionary";
import GetStarted from "./Components/GetStarted/GetStarted";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section />
      <Trade />
      <Graph />
      <Community/>
      <Visionary />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
