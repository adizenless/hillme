import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__grid">
          <div className="about__col-one">
            <div className="about__title">
              <img src="/img/logo-lg.svg" alt="Logo" title="Logo" />
              <h1>About</h1>
            </div>
            <div className="about__gradient-container">
              <div className="about__text-container">
                <h2>
                  10 <span>year</span>
                </h2>
                <p>Professional product development and production</p>
              </div>
              <div className="about__text-container">
                <h2>
                  500+ <span>kind</span>
                </h2>
                <p>Product specificatons for your choice</p>
              </div>
              <div className="about__text-container">
                <h2>
                  10000 <span>piece</span>
                </h2>
                <p>Engineering project case experience</p>
              </div>
            </div>
          </div>
          <div className="about__col-second">
            <p>
              We are pleased to introduce <span>Hillme</span>, a
              service-oriented company that integrates R&D, production, and
              sales. Our company specializes in the development and production
              of Pod Starter Kit with disposable prefilled cartridges electronic
              cigarettes (ENDS equipment), disposable electronic cigarettes,
              electronic atomizers (CBD/THC), and other related products. We are
              committed to providing OEM/ODM one-stop solutions and five-star
              services for customers worldwide.
            </p>
            <div className="about__images">
              <div className="about__image-container">
                <img src="/img/about-1.svg" alt="" />
                <p>Marketing Support</p>
              </div>
              <div className="about__image-container">
                <img src="/img/about-2.svg" alt="" />
                <p>After Sales Service Strategy</p>
              </div>
              <div className="about__image-container">
                <img src="/img/about-3.svg" alt="" />
                <p>Flexible cooperation system</p>
              </div>
              <div className="about__image-container">
                <img src="/img/about-4.svg" alt="" />
                <p className="about__paragraph">Brand Operation</p>
              </div>
              <div className="about__image-container">
                <img src="/img/about-5.svg" alt="" />
                <p>Competitive pricing</p>
              </div>
              <div className="about__image-container">
                <img src="/img/about-6.svg" alt="" />
                <p>Design</p>
              </div>
              <div className="about__image-container">
                <img src="/img/about-7.svg" alt="" />
                <p>Supply chain </p>
              </div>
              <div className="about__image-container">
                <img src="/img/about-8.svg" alt="" />
                <p>R&D</p>
              </div>
            </div>
          </div>
          <div className="about__col-third">
            <h2>About Hillme</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
