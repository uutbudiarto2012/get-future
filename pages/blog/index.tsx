import { Navbar, Posts } from "../../components/organisms";
import Aos from "aos";
import { useEffect } from "react";

export default function Blog() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />
      <Posts />
    </>
  );
}
