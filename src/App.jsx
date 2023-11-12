import BoxingFormLink from "./components/BoxingFormLink";
import Map from "./components/Map";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/about/About";
import ContactUs from "./pages/contactUs/ContactUs";
import FAQ from "./pages/faq/FAQ";
import Footer from "./pages/footer/Footer";
import GroupClasses from "./pages/groupClasses/GroupClasses";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <div className="section">
        <About />
        <BoxingFormLink />
        <GroupClasses />
        <FAQ />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
