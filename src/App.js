import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonial/Testimonial";
import Slider from "./components/Slider/Slider";
import News from "./components/News/News";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Progress from "./components/Progress/Progress";
import Certificate from "./components/Certificate/Certificate";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Progress></Progress>
      <Certificate></Certificate>
      <Service></Service>
      <Portfolio></Portfolio>
      {/* <Testimonial></Testimonial> */}
      <Slider></Slider>
      <News></News>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
