export default function Footer() {
  return (
    <section id="footer" className="_footer">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-3 text-center mb-5 mb-md-0">
            <img src="/assets/logo/logo.svg" alt="" className="logoImg mb-3" />
            <h2 className="logoText">GET FUTURE</h2>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-4 mb-3">
                <ul>
                  <li>
                    <span className="d-block">
                      <i className="bi bi-envelope me-2"></i>
                      Email
                    </span>
                    <a className="contact" href="">
                      <span>support@getfuture.id</span>
                    </a>
                  </li>
                  <li>
                    <span className="d-block">
                      <i className="bi bi-telephone me-2"></i>
                      Telepon
                    </span>
                    <a className="contact" href="">
                      (021) 1234 1234
                    </a>
                  </li>
                  <li>
                    <span className="d-block">
                      <i className="bi bi-geo-alt me-2"></i>
                      Alamat
                    </span>
                    <a className="contact" href="">
                      Jln Peta Selatan No 6AE Kalideres <br />
                      Jakarta Barat <br />
                      11840
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 mb-3">
                <ul>
                  <li>
                    <a className="menu-link" href="">
                      Products
                    </a>
                  </li>
                  <li>
                    <a className="menu-link" href="">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="menu-link" href="">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a className="menu-link" href="">
                      About
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 mb-3">
                <div className="socialWrapper">
                  <h5>Temukan Kami</h5>
                  <div className="socialItem">
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-telegram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
