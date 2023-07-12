import "./App.css";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Services from "./Components/Services";
import Work from "./Components/Work";

function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      <div className="h-[4000px]"></div>
    </div>
  );
}

export default App;
