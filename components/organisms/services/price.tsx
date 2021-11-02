import Link from "next/link";
interface PriceProps {
  title: string;
  caption: string;
}
export default function Price(props: PriceProps) {
  const { title, caption } = props;
  return (
    <section className="_price mb-5" id="price">
      <div
        className="_ill_header_section"
        data-bg="/assets/illustration/ill-product-header.png"
      >
        <h2 className="title">{title}</h2>
        <span className="text">{caption}</span>
      </div>
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-3">
            <div className="card-price free">
              <div className="header">
                <span>OTODIDAK</span>
              </div>
              <div className="price">
                <div className="badge">FULL GRATIS</div>
                <span className="amount">Rp 0</span>
                <Link href="/service/free">
                  <a className="order-action">DOWNLOAD</a>
                </Link>
              </div>
              <div className="benefit">
                <div className="list-item">
                  <div className="icon disabled">
                    <i className="bi bi-check"></i>
                  </div>
                  <div className="benefit-item">Revisi</div>
                </div>
                <div className="list-item">
                  <div className="icon disabled">
                    <i className="bi bi-check"></i>
                  </div>
                  <div className="benefit-item">Garansi</div>
                </div>
                <div className="list-item">
                  <div className="icon">
                    <i className="bi bi-check"></i>
                  </div>
                  <div className="benefit-item">Source code</div>
                </div>
                <div className="list-item">
                  <div className="icon">
                    <i className="bi bi-check"></i>
                  </div>
                  <div className="benefit-item">
                    1 Halaman Website Siap Pakai
                  </div>
                </div>
                <div className="list-item">
                  <div className="icon">
                    <i className="bi bi-check"></i>
                  </div>
                  <div className="benefit-item">Assets dan tools</div>
                </div>
                <div className="list-item">
                  <div className="icon disabled">
                    <i className="bi bi-check"></i>
                  </div>
                  <div className="benefit-item">Free Domain</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card-price basic">
              <div className="header">
                <span>PERSONAL</span>
              </div>
              <div className="price">
                <small>Mulai dari</small>
                <span className="amount">Rp 1.000.000</span>
                <Link href="/service/basic">
                  <a className="order-action">Pilih Paket</a>
                </Link>
              </div>
              <div className="benefit">
                <div className="list-item">
                  <div className="icon">
                    <i className="bi bi-check"></i>
                  </div>
                  <div className="benefit-item">Revisi</div>
                </div>
                <div className="list-item">
                  <div className="icon">
                    <i className="bi bi-check"></i>
                  </div>
                  <div className="benefit-item">Garansi</div>
                </div>
                <div className="list-item">
                  <div className="icon">
                    <i className="bi bi-check"></i>
                  </div>
                  <div className="benefit-item">Source code</div>
                </div>
                <div className="list-item">
                  <div className="icon">
                    <i className="bi bi-check"></i>
                  </div>
                  <div className="benefit-item">
                    Halaman Website dan admin panel
                  </div>
                </div>
                <div className="list-item">
                  <div className="icon">
                    <i className="bi bi-check"></i>
                  </div>
                  <div className="benefit-item">
                    Custom design sesuai kebutuhan
                  </div>
                </div>
                <div className="list-item">
                  <div className="icon">
                    <i className="bi bi-check"></i>
                  </div>
                  <div className="benefit-item">Assets dan tools</div>
                </div>
                <div className="list-item">
                  <div className="icon">
                    <i className="bi bi-check"></i>
                  </div>
                  <div className="benefit-item">Free Domain 1 Tahun</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card-price premium">
              <div className="header">
                <span>CORPORATE</span>
              </div>
              <div className="price">
                <small>Mulai dari</small>
                <span className="amount">Rp 5.500.000</span>
                <Link href="/service/premium">
                  <a href="service-package.html" className="order-action">
                    Pilih Paket
                  </a>
                </Link>
              </div>
              <div className="benefit">
                <div className="list-item">
                  <div className="icon">
                    <i className="bi bi-check"></i>
                  </div>
                  <div className="benefit-item">Revisi</div>
                </div>
                <div className="list-item">
                  <div className="icon">
                    <i className="bi bi-check"></i>
                  </div>
                  <div className="benefit-item">Garansi</div>
                </div>
                <div className="list-item">
                  <div className="icon">
                    <i className="bi bi-check"></i>
                  </div>
                  <div className="benefit-item">Source code</div>
                </div>
                <div className="list-item">
                  <div className="icon">
                    <i className="bi bi-check"></i>
                  </div>
                  <div className="benefit-item">
                    Halaman Website dan admin panel
                  </div>
                </div>
                <div className="list-item">
                  <div className="icon">
                    <i className="bi bi-check"></i>
                  </div>
                  <div className="benefit-item">
                    Custom design sesuai kebutuhan
                  </div>
                </div>
                <div className="list-item">
                  <div className="icon">
                    <i className="bi bi-check"></i>
                  </div>
                  <div className="benefit-item">Assets dan tools</div>
                </div>
                <div className="list-item">
                  <div className="icon">
                    <i className="bi bi-check"></i>
                  </div>
                  <div className="benefit-item">Free Domain 1 Tahun</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card-price bisnis">
              <div className="header">
                <span>STARTUP</span>
              </div>
              <div className="price">
                <div className="badge bg-danger text-white">
                  GRATIS KONSULTASI
                </div>
                <span className="amount">Rp. -</span>
                <Link href="/service/bisnis">
                  <a href="service-package.html" className="order-action">
                    Hubungi Kami
                  </a>
                </Link>
              </div>
              <div className="benefit">
                <div className="list-item">
                  <div className="icon">
                    <i className="bi bi-check"></i>
                  </div>
                  <div className="benefit-item">Revisi</div>
                </div>
                <div className="list-item">
                  <div className="icon">
                    <i className="bi bi-check"></i>
                  </div>
                  <div className="benefit-item">Garansi</div>
                </div>
                <div className="list-item">
                  <div className="icon">
                    <i className="bi bi-check"></i>
                  </div>
                  <div className="benefit-item">Source code</div>
                </div>
                <div className="list-item">
                  <div className="icon">
                    <i className="bi bi-check"></i>
                  </div>
                  <div className="benefit-item">
                    Custom Design dan fitur sesuai kebutuhan
                  </div>
                </div>
                <div className="list-item">
                  <div className="icon">
                    <i className="bi bi-check"></i>
                  </div>
                  <div className="benefit-item">Assets dan tools</div>
                </div>
                <div className="list-item">
                  <div className="icon">
                    <i className="bi bi-check"></i>
                  </div>
                  <div className="benefit-item">Full service</div>
                </div>
                <div className="list-item">
                  <div className="icon">
                    <i className="bi bi-check"></i>
                  </div>
                  <div className="benefit-item">
                    Include Aplikasi mobile{" "}
                    <small className="text-info">optional</small>
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
