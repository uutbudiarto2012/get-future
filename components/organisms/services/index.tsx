export default function index() {
  return (
    <section id="service" className="_service">
      <div className="container-lg">
        <div className="service-wrapper">
          <div className="_section_header text-center">
            <h2>Layanan Kami</h2>
            <span>Apa yang bisa Anda percayakan kepada Kami?</span>
          </div>
          <div className="row justify-content-around">
            <div className="col-lg-3">
              <div className="card-service">
                <img
                  className="d-block mx-auto img-service"
                  data-aos="fade-down"
                  src="/assets/images/website.png"
                  alt="jasa pembuatan website murah"
                />
                <h2 className="title">Website Solusi</h2>
                <span>
                  Aplikasi website seperti toko online, lelang online, dan
                  banyak fungsi lainnya.
                </span>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card-service">
                <img
                  className="d-block mx-auto img-service"
                  data-aos="fade-down"
                  src="/assets/images/mobile.png"
                  alt="jasa pembuatan website murah"
                />
                <h2 className="title">Mobile Solusi</h2>
                <span>
                  Kami membuat aplikasi mobile yang mendukung multi platform
                  seperti Android dan iOS.
                </span>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card-service">
                <img
                  className="d-block mx-auto img-service"
                  data-aos="fade-down"
                  src="/assets/images/game.png"
                  alt="jasa pembuatan website murah"
                />
                <h2 className="title">Game Development</h2>
                <span>
                  Pembuatan Game mobile dan Game berbasis web, game fun dan atau
                  game edukasi.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
