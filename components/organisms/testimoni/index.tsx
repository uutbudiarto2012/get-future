import Slider from "react-slick";

export default function Testimoni() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    dots: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section id="testimoni" className="_testimoni">
      <div className="container-lg">
        <div className="testimoni-wrapper">
          <div className="_section_header text-center">
            <h2>Testimoni</h2>
            <span>Beberapa Catatan Menarik dari Pelanggan Kami</span>
          </div>
        </div>
        <Slider {...settings}>
          <div>
            <div className="card-testimoni">
              <div className="textBubble">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                nobis omnis, at dolores laborum voluptatem quo esse! Doloribus,
                molestiae saepe.
              </div>
              <div className="customerWrapper">
                <img
                  className="img-customer"
                  src="/assets/images/user.png"
                  alt="user"
                />
                <div className="info">
                  <h3>Nama</h3>
                  <span>Pemilik apa</span>
                  <div className="rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card-testimoni">
              <div className="textBubble">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                nobis omnis, at dolores laborum voluptatem quo esse! Doloribus,
                molestiae saepe.
              </div>
              <div className="customerWrapper">
                <img
                  className="img-customer"
                  src="/assets/images/user.png"
                  alt="user"
                />
                <div className="info">
                  <h3>Nama</h3>
                  <span>Pemilik apa</span>
                  <div className="rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card-testimoni">
              <div className="textBubble">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                nobis omnis, at dolores laborum voluptatem quo esse! Doloribus,
                molestiae saepe.
              </div>
              <div className="customerWrapper">
                <img
                  className="img-customer"
                  src="/assets/images/user.png"
                  alt="user"
                />
                <div className="info">
                  <h3>Nama</h3>
                  <span>Pemilik apa</span>
                  <div className="rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card-testimoni">
              <div className="textBubble">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                nobis omnis, at dolores laborum voluptatem quo esse! Doloribus,
                molestiae saepe.
              </div>
              <div className="customerWrapper">
                <img
                  className="img-customer"
                  src="/assets/images/user.png"
                  alt="user"
                />
                <div className="info">
                  <h3>Nama</h3>
                  <span>Pemilik apa</span>
                  <div className="rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
