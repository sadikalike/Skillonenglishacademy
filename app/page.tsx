import Navbar from "./components/Navbar";
import HomeComponent from "./components/home";
import About from "./components/About";
import Courses from "./components/Courses";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";

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

