import { Footer, Navbar, Partwork, Popchat, Price } from "../../components/organisms";

export default function Service() {
  return (
    <>
      <Navbar />
      <Price title="Layanan Kami" caption="Tentukan rencana dan kebutuhan Anda lalu pilih harga yang sesuai." />
      <Partwork />
      <Popchat />
      <Footer />
    </>
  )
}
