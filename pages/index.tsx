import AOS from "aos";
import { useEffect } from "react";
import {
  Footer,
  Hero,
  Navbar,
  Partner,
  Partwork,
  Popchat,
  Service,
  Team,
  Testimoni
} from "../components/organisms";

export default function index() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Testimoni />
      <Partner />
      <Team />
      <Partwork />
      <Popchat />
      <Footer />
    </>
  );
}
