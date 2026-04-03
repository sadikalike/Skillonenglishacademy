import Navbar from "./components/Navbar";
import HomeComponent from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeComponent />
 <About />
  <Courses />
   <Testimonials />
   <Contact />
      {/* Other sections will come here */}
      
    </main>
  );
}

