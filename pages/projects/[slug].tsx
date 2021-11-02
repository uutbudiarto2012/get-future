import Aos from "aos";
import { useEffect } from "react";
import {
  Footer,
  Navbar,
  Partwork,
  Popchat,
  PortfolioDetail,
  RelatedPortfolio,
} from "../../components/organisms";

export default function Detail() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Navbar />
      <PortfolioDetail />
      <RelatedPortfolio />
      <Partwork />
      <Popchat />
      <Footer />
    </div>
  );
}
