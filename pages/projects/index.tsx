import Aos from "aos";
import { useEffect } from "react";
import {
  Footer, Navbar,
  Partwork,
  Popchat,
  Portfolio
} from "../../components/organisms";

export default function Projects() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />
      <Portfolio />
      <Partwork />
      <Popchat />
      <Footer />
    </>
  );
}
