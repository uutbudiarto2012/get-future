export default function index() {
  return (
    <section id="hero" className="_hero">
      <div className="container-lg">
        <div className="_hero_wrapper row justify-content-between align-items-center">
          <div className="left col-md-7">
            <h1>Website & Applikasi Developer</h1>
            <p>
              Fokuslah pada bisnis dan biarkan Kami yang menangani kompleksitas
              kebutuhan <span className="textYellow">Teknologi</span> Anda!
            </p>
            <div className="btnHerro">
              <a href="#" className="btn-contact">
                Get Started
              </a>
            </div>
          </div>
          <div className="right col-md-5">
            <img
              className="img-fluid"
              src="/assets/illustration/2.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
