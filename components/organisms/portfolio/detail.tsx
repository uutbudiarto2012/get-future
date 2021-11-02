import Slider from "react-slick";
export default function Detail() {
  const settings = {
    dots: false,
    className: "sliderDetail",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    fade: true,
    cssEase: "linear",
  };
  return (
    <section className="_detail" id="detail">
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-7">
            <Slider {...settings}>
              <div>
                <div className="sliderItem">
                  <img
                    className="img-slider"
                    src="/assets/images/products/1.png"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="sliderItem">
                  <img
                    className="img-slider"
                    src="/assets/images/products/2.png"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="sliderItem">
                  <img
                    className="img-slider"
                    src="/assets/images/products/3.png"
                    alt=""
                  />
                </div>
              </div>
            </Slider>
          </div>
          <div className="col-lg-5">
            <div className="detailInfo">
              <h2 className="title">Aplikasi Online Store berbasis web</h2>
              <div className="detail">
                <p className="short-desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam nobis consequatur ipsam dolorem illo, quidem
                  aperiam suscipit harum ipsum adipisci.
                </p>
                <div className="info">
                  <span className="textInfo">Category</span>
                  <span>WEBSITE & MOBILE APP</span>
                </div>
                <div className="info">
                  <span className="textInfo">Link</span>
                  <a href="#" className="link-demo">
                    Visit Site
                    <i className="ms-3 bi bi-arrow-up-right-square-fill"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 d-none">
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                eaque asperiores quidem dolorum sed dolore molestiae aliquid
                tempora dolor earum!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                eaque asperiores quidem dolorum sed dolore molestiae aliquid
                tempora dolor earum! Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Omnis eaque asperiores quidem dolorum sed
                dolore molestiae aliquid tempora dolor earum!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur repellat provident itaque ex! Sequi officiis expedita,
                sunt distinctio velit, neque id nulla quis quisquam repellendus
                saepe aliquam tenetur. Reiciendis obcaecati nam illum.
                Temporibus, minima vitae eligendi incidunt aut enim laboriosam
                totam sint odio a magni voluptatem eveniet, non facere ipsa
                assumenda. Quae quibusdam doloremque vero neque earum hic ipsam
                quasi? Illum qui, odit eum voluptatem itaque necessitatibus
                quaerat omnis ad tenetur voluptatum quisquam suscipit nihil
                quas, provident doloremque mollitia ipsa cupiditate pariatur
                distinctio nam ea reiciendis? Earum architecto dolore itaque
                culpa nulla ea, numquam accusamus, beatae enim, adipisci
                explicabo omnis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
