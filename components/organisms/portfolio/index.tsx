import {PortfolioItem} from '../../molecules'
export default function index() {
  return (
    <section className="_content" id="product">
        <div
          className="_ill_header_section"
          data-bg="./assets/illustration/ill-product-header.png"
        >
          <h2 className="title">Produk Kami</h2>
          <span className="text">
            Beberapa Produk dan Pekerjaan yang telah Kami selesaikan.
          </span>
        </div>
        <div className="container-lg">
          <div className="card-category">
            <div className="row justify-content-center">
              <div className="col-md-3 col-4 text-center">
                <a href="#/" className="category-item active">
                  WEBSITE
                </a>
              </div>
              <div className="col-md-3 col-4 text-center">
                <a href="#/" className="category-item">
                  MOBILE
                </a>
              </div>
              <div className="col-md-3 col-4 text-center">
                <a href="#/" className="category-item">
                  GAMES
                </a>
              </div>
            </div>
          </div>
          <div className="product-wrapper">
            <div className="row">
              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />
            </div>
          </div>
        </div>
      </section>
  )
}
