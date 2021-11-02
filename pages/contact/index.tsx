import { Footer, Navbar, Partwork, Popchat } from "../../components/organisms";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="_price" id="price">
      <div className="_ill_header_section" data-bg="./assets/illustration/ill-product-header.png">
        <h2 className="title">Kontak Kami</h2>
        <span className="text"></span>
      </div>
      <div className="gf-card-info-mt-50 in-focus">
        <div className="container-lg">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="card border-0">
                <div className="card-body">
                  <img className="img-infocus" src="./assets/illustration/mail.png" alt="" />
                  <span className="title">Email</span>
                  <div>
                    support@eamil.com
                  </div>
                  <div>
                    admin@eamil.com
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0">
                <div className="card-body">
                  <img className="img-infocus" src="./assets/illustration/phone.png" alt="" />
                  <span className="title">Telepon</span>
                  <div>
                    0896-8800-8080
                  </div>
                  <div>
                    0896-7700-7070
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0">
                <div className="card-body">
                  <img className="img-infocus" src="./assets/illustration/map.png" alt="" />
                  <span className="title">Alamat</span>
                  <div>
                    Jln Mawar no 9 Blok 99, Jakarta Barat. DKI Jakarta 11860
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-lg">
        <div className="form-contact-wrapper">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="desc-contact">
                <h2 className="header">Hubungi Kami Sekarang</h2>
                <p>
                  Kami dapat terhubung dengan anda dimanapun dan kapanpun hanya dengan satu kali klik. Setelah anda mengirimkan formulir kepada kami, maka tim marketing akan membalas pesan anda dalam waktu 24 jam.
                </p>
                <p>
                  Kami siap untuk menjawab setiap pertanyaan terkait kebutuhan proyek dengan memberikan solusi terbaik. Jangan ragu untuk menghubungi praktisi kami untuk dapat menyelesaikan permasalahan bisnis anda.
                </p>
                <p>
                  Jika anda membutuhkan informasi layanan perusahaan, anda dapat mengunjungi halaman <a href="#">FAQ</a> kami untuk mendapatkan penawaran dan informasi, serta produk terbaru dari Sekawan Media.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="form-contact">
                <h3 className="title">Tinggalkan pesan kepada kami.</h3>
                <form>
                  <div className="input-form">
                    <div className="icon">
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <input className="input" type="email" placeholder="alamat email..." />
                  </div>
                  <div className="input-form">
                    <div className="icon">
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <input className="input" type="number" placeholder="telepon atau whatsapp..." />
                  </div>
                  <div className="input-form">
                    <div className="icon">
                      <i className="bi bi-person-circle"></i>
                    </div>
                    <input className="input" type="number" placeholder="nama atau perusahaan anda..." />
                  </div>
                  <div className="input-form">
                    <textarea className="input" rows={5} placeholder="Pesan singkat..."></textarea>
                  </div>
                  <div className="btn-action">
                    <button className="btn-action">Kirim</button>
                  </div>
                </form>
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
