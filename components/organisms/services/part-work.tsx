export default function Partwork() {
  return (
    <section className="_part" id="part">
      <div className="container-lg">
        <h3 className="title mt-5">
          Kami menyediakan jasa part work, seperti :
        </h3>
        <div className="row">
          <div className="col-md-6">
            <div className="card-part-work">
              <div className="icon-title">
                <img src="/assets/illustration/design-html.svg" alt="" />
                <span className="title">Covert Design UI ke HTML</span>
              </div>
              <div className="desc">
                Jasa Convert design figma, adobe xd,jpg ke html dan css yang
                responsive dan berjalan diberbagai browser.
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-part-work">
              <div className="icon-title">
                <img src="/assets/illustration/design-react.svg" alt="" />
                <span className="title">Covert Design UI ke REACT APP</span>
              </div>
              <div className="desc">
                Jasa Convert design figma, adobe xd ke react app yang responsive
                dan berjalan diberbagai browser.
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-part-work">
              <div className="icon-title">
                <img src="/assets/illustration/htm-react.svg" alt="" />
                <span className="title">
                  Covert HTML ke Component REACT APP
                </span>
              </div>
              <div className="desc">
                Jasa Convert design figma, adobe xd, ke page dan component
                reactjs yang responsive dan berjalan diberbagai browser.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
