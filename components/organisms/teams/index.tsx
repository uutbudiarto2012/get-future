import Slider from "react-slick";
export default function Team() {
  const settins = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
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
    <section id="ourteam" className="_ourteam">
      <div className="container-lg">
        <div className="ourteam-wrapper">
          <div className="_section_header text-center">
            <h2>Team Kami</h2>
            <span>
              Siapa saja team Kami yang selalu siap mencarikan solusi?
            </span>
          </div>
        </div>
        <div className="ourteamSlider">
          <Slider {...settins}>
            <div>
              <div className="card-team">
                <div className="image-wrapper">
                  <img
                    className="img-team"
                    src="./assets/images/team/1.png"
                    alt=""
                  />
                </div>
                <div className="info-wrapper">
                  <h5 className="name">Uut Budiarto S.Kom</h5>
                  <span>Fullstack Developer</span>
                </div>
              </div>
            </div>
            <div>
              <div className="card-team">
                <div className="image-wrapper">
                  <img
                    className="img-team"
                    src="./assets/images/team/1.png"
                    alt=""
                  />
                </div>
                <div className="info-wrapper">
                  <h5 className="name">Uut Budiarto S.Kom</h5>
                  <span>Fullstack Developer</span>
                </div>
              </div>
            </div>
            <div>
              <div className="card-team">
                <div className="image-wrapper">
                  <img
                    className="img-team"
                    src="./assets/images/team/1.png"
                    alt=""
                  />
                </div>
                <div className="info-wrapper">
                  <h5 className="name">Uut Budiarto S.Kom</h5>
                  <span>Fullstack Developer</span>
                </div>
              </div>
            </div>
            <div>
              <div className="card-team">
                <div className="image-wrapper">
                  <img
                    className="img-team"
                    src="./assets/images/team/1.png"
                    alt=""
                  />
                </div>
                <div className="info-wrapper">
                  <h5 className="name">Uut Budiarto S.Kom</h5>
                  <span>Fullstack Developer</span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
