import { Footer, Navbar, Partwork, Popchat, Team } from "../../components/organisms";

export default function About() {
  return (
    <>
    <Navbar />
    <section className="_about" id="about">
      <div className="_ill_header_about" data-bg="./assets/illustration/ill-product-header.png">
        <h2 className="title">Tentang Kami</h2>
        <span className="text">
          Teknologi untuk Membangun Negeri, dari Kami untuk Indonesia
        </span>
      </div>
      <div className="container-lg">
        <div className="card-about">
          <div className="row justify-content-center">
            <div className="col-lg-3">
              <div className="part-about">
                <span>Team yang handal dan berpengalaman</span>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="part-about">
                <span>Skill dan Keahlian yang dapat diuji</span>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="part-about">
                <span>Komitmen dan transparan</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <h1 className="header-about">
             Kami adalah salah satu jasa pembuatan aplikasi dan website, terpercaya Di Indonesia
            </h1>
          </div>
          <div className="col-md-7">
            <div className="text-about">
              <p>Kami selalu berusaha memberikan yang terbaik bagi para client yang mempercayakan kebutuhanya kepada Kami</p>
              <p>
                Kami yakin bahwa kepercayaan dan kepuasan pelanggan adalah masa depan Kami, maka kami tetap selalu berusaha menjaga keprcayaan client kepada Kami.
              </p>
              <p>
                Misi Kami adalah turut berkontribusi dalam pembangunan negeri melalui bidang yang kami kuasai, sekecil apapun yang kita berikan kepada Negeri saat ini Kami yakin akan memiliki dapak yang bermanfaat di masa depan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Team />
    <Partwork />
    <Popchat />
    <Footer />
    </>
  )
}
