import { PortfolioItem } from "../../molecules";

export default function Related() {
  return (
    <section className="_content related" id="product">
        <div
          className="_ill_header_section"
          data-bg="/assets/illustration/ill-product-header.png"
        >
          <h2 className="title">Pekerjaan Lain</h2>
        </div>
        <div className="container-lg">
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
            </div>
          </div>
        </div>
      </section>
  )
}
