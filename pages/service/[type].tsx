import { useRouter } from "next/router"
import { Footer, Navbar, Partwork, Popchat } from "../../components/organisms";
export default function Type() {
  const {isReady,query} = useRouter();
  return (
    <>
    <Navbar />
    <section className="_price" id="price">
      <div className="_ill_header_section" data-bg="/assets/illustration/ill-product-header.png">
        <h2 className="title">Paket Otodidak</h2>
        <span className="text">3 Fokus utama Jasa Pembuatan Website</span>
      </div>
      <div className="gf-card-info-mt-50 in-focus">
        <div className="container-lg">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="card border-0">
                <div className="card-body">
                  <img src="/assets/illustration/responsive.png" alt="" />
                  <span className="title">Responsive</span>
                  <p>
                    Tampilan website dapat berjalan di berbagai perangkat, baik dalam perangkat desktop, mobile, dan tablet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0">
                <div className="card-body">
                  <img src="/assets/illustration/competitive.png" alt="" />
                  <span className="title">Competitive</span>
                  <p>
                    Meningkatkan performa website dan kecepatan loading agar dapat bersaing pada situs pencarian.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0">
                <div className="card-body">
                  <img src="/assets/illustration/userfriendly.png" alt="" />
                  <span className="title">Userfriendly</span>
                  <p>
                    Memberi kemudahan kepada pengguna dalam menggunakan website di berbagai platform seperti Windows, Linux, dan Mac OS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="type-wrapper mt-5">
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-2 col-6">
              <div className="gf-card-type">
                <img className="img-type" src="/assets/illustration/company-profile.png" alt="" />
                <span className="type-name">
                  Company profile
                </span>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="gf-card-type">
                <img className="img-type" src="/assets/illustration/personal.png" alt="" />
                <span className="type-name">
                  Personal
                </span>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="gf-card-type">
                <img className="img-type" src="/assets/illustration/portfolio.png" alt="" />
                <span className="type-name">
                  Portfolio
                </span>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="gf-card-type">
                <img className="img-type" src="/assets/illustration/blog.png" alt="" />
                <span className="type-name">
                  Blog
                </span>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="gf-card-type">
                <img className="img-type" src="/assets/illustration/news-portal.png" alt="" />
                <span className="type-name">
                  News Portal
                </span>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="gf-card-type">
                <img className="img-type" src="/assets/illustration/ecommerce.png" alt="" />
                <span className="type-name">
                  Toko Online
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-6">
            <h3>Tahap Pembuatan Website</h3>
            <p>
              Kami menciptakan system yang relevan dan sesuai dengan kebutuhan bisnis perusahaan dan organisasi . Tim kami berkomitmen untuk bekerja secara maksimal untuk menciptakan produk yang murah dan berkualitas.
            </p>
          </div>
          <div className="w-100"></div>
          <div className="col-lg-3">
            <div className="card-step">
              <div className="item-step">
                <div className="title">Consultation</div>
                <div className="text">Tahap diskusi untuk mendapatkan informasi awal kebutuhan client</div>
                <div className="num">1</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card-step">
              <div className="item-step">
                <div className="title">Information Gathering</div>
                <div className="text">Proses pengumpulan informasi kebutuhan dan data penunjang</div>
                <div className="num">2</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card-step">
              <div className="item-step">
                <div className="title">Research & Plan</div>
                <div className="text">Proses analisa dan pembuatan rencana dan strategi</div>
                <div className="num">3</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card-step">
              <div className="item-step">
                <div className="title">Design & Prototype</div>
                <div className="text">Pembuatan desain visualisasi hasil dengan prototype</div>
                <div className="num">4</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card-step">
              <div className="item-step">
                <div className="title">Development</div>
                <div className="text">Pengembangan aplikasi oleh tim spesialis</div>
                <div className="num">5</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card-step">
              <div className="item-step">
                <div className="title">Tester</div>
                <div className="text">Proses pengecekan (QC), ujicoba dan revisi final aplikasi</div>
                <div className="num">6</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card-step">
              <div className="item-step">
                <div className="title">Deployment</div>
                <div className="text">Instalasi atau proses uplaod system pada server</div>
                <div className="num">7</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card-step">
              <div className="item-step">
                <div className="title">Release</div>
                <div className="text">Aplikasi atau system siap digunakan</div>
                <div className="num">8</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-lg">
        <div className="row justify-content-center">
          <div className="col-lg-9 mt-5">
            <div className="form-contact">
              <div className="btn-action">
                <span className="text">
                  Jika Anda tertarik dan ingin berkonsultasi, silahkan hubungi kami di : 
                </span>
                <a href="#" className="btn-whatsapp">
                  <i className="bi bi-whatsapp me-2"></i>
                  Whatsapp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Partwork />
    <Popchat />
    <Footer />
    </>
  )
}
