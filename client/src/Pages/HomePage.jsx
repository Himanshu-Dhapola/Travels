import NavBar from "../components/NavBar";
import Form from "../components/Form";
import HomeSection from "../components/HeroSection";
import Tags from "../components/Tags";
import Info from "../components/Info";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <Form />
      <HomeSection />
      <Tags />
      <Info />
      <Testimonials />
      <Footer/>
    </div>
  );
}
