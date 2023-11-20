import "../../pages/Home/Home.scss";
import { useState } from "react";
import { data } from "../../utils/data";

const VerticalCarousel = () => {
  const [arrow, setArrow] = useState(false);
  const [arrowSecond, setArrowSecond] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleArrow = (direction: string): void => {
    if (direction === "u") {
      setCurrentSlide(currentSlide !== 0 ? currentSlide - 1 : 4);
    }

    if (direction === "d") {
      setCurrentSlide(currentSlide !== 4 ? currentSlide + 1 : 0);
    }
  };

  return (
    <>
      <div className="home__cards-container">
        <div
          className="home__cards-wrapper"
          style={{ transform: `translateY(${-100 * currentSlide}vh)` }}
        >
          {data.carousel.map((slide) => (
            <div className="home__cards">
              <div className="home__cards-one">
                <img src={slide.imageMainCard} alt="Product image main card" />
                <div className="home__cards-item-left">
                  <img src="/img/smoke-icon.svg" alt="Smoke icon" />
                  <a href="tel:600-2000">{slide.tel}</a>
                </div>
                <div className="home__cards-item-right">
                  <h3>New Product:</h3>
                  <h2>{slide.newProductTitle}</h2>
                </div>
                <button className="home__cards-item-bottom">
                  more detailed
                </button>
              </div>
              <div className="home__cards-two-col">
                <div className="home__cards-two-col-1">
                  <img
                    src="/img/card__bg-2.svg"
                    alt="Card gradient background"
                  />
                  <button className="home__cards-two-col-1-button-top">
                    Hillme
                  </button>
                  <div className="home__cards-two-col-1-desc">
                    <h2>{slide.productOne.title}</h2>
                    <p>{slide.productOne.descOne}</p>
                    <p>{slide.productOne.descSecond}</p>
                    <p>{slide.productOne.descThird}</p>
                  </div>
                  <img
                    src={slide.productOne.image}
                    alt="Xstar X6500"
                    className="home__cards-two-col-1-img"
                  />
                  <button
                    className="home__cards-two-col-1-button-bottom"
                    onMouseEnter={() => setArrow(true)}
                    onMouseLeave={() => setArrow(false)}
                  >
                    <img
                      src="/img/arrow-left-white.svg"
                      alt="Arrow left icon"
                      className={`home__cards-two-col-1-arrow ${
                        arrow
                          ? "home__cards-two-col-1-arrow--hidden"
                          : "home__cards-two-col-1-arrow--block"
                      }`}
                    />
                    <img
                      src="/img/arrow-left-black.svg"
                      alt="Arrow left icon"
                      className={`home__cards-two-col-1-arrow ${
                        arrow
                          ? "home__cards-two-col-1-arrow--block"
                          : "home__cards-two-col-1-arrow--hidden"
                      }`}
                    />
                  </button>
                </div>
                <div className="home__cards-two-col-2">
                  <img
                    src="/img/card__bg-3.svg"
                    alt="Card gradient background"
                    title="Arrow left icon"
                  />
                  <button className="home__cards-two-col-2-button-top">
                    Hillme
                  </button>
                  <div className="home__cards-two-col-2-desc">
                    <h2>{slide.productSecond.title}</h2>
                    <p>{slide.productSecond.descOne}</p>
                    <p>{slide.productSecond.descSecond}</p>
                    <p>{slide.productSecond.descThird}</p>
                  </div>
                  <img
                    src={slide.productSecond.image}
                    alt="Xstar X7000"
                    className="home__cards-two-col-2-img"
                  />
                  <button
                    className="home__cards-two-col-2-button-bottom"
                    onMouseEnter={() => setArrowSecond(true)}
                    onMouseLeave={() => setArrowSecond(false)}
                  >
                    <img
                      src="/img/arrow-left-white.svg"
                      alt="Arrow left icon"
                      className={`home__cards-two-col-2-arrow ${
                        arrowSecond
                          ? "home__cards-two-col-2-arrow--hidden"
                          : "home__cards-two-col-2-arrow--block"
                      }`}
                    />
                    <img
                      src="/img/arrow-left-black.svg"
                      alt="Arrow left icon"
                      className={`home__cards-two-col-2-arrow ${
                        arrowSecond
                          ? "home__cards-two-col-2-arrow--block"
                          : "home__cards-two-col-2-arrow--hidden"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="home__arrows">
        <img
          src="/img/arrow-up.svg"
          alt="Arrow up icon"
          title="Arrow icon"
          onClick={() => handleArrow("u")}
        />
        <div className="home__arrows-indicators">
          <div className="home__arrows-indicators-wrapper">
            {data.carousel.map((slide, i) => (
              <div
                key={i}
                className={`home__arrows-indicators-itself ${
                  currentSlide === i
                    ? "home__arrows-indicators-itself--active"
                    : "home__arrows-indicators-itself--opacity"
                }`}
                onClick={() => setCurrentSlide(i)}
              />
            ))}
          </div>
        </div>
        <img
          src="/img/arrow-down.svg"
          alt="Arrow down icon"
          title="Arrow icon"
          onClick={() => handleArrow("d")}
        />
      </div>
    </>
  );
};

export default VerticalCarousel;
