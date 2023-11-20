/* eslint-disable @typescript-eslint/ban-ts-comment */
import "./BecomeAPartner.scss";
// @ts-ignore
import { ReactComponent as Logo } from '/public/img/header__logo.svg';
// @ts-ignore
import { ReactComponent as ArrowRightLong } from '/public/img/arrow-right-white-long.svg';

const BecomeAPartner = () => {
  return (
    <section className="partner">
      <div className="partner__container">
        <div className="partner__hero">
          <h1>BECOME A PARTNER</h1>
          <img
            src="/img/partner-wing.svg"
            alt="Wing"
            title="Wing"
            className="partner__img-wing"
          />
          <img
            src="/img/partner-cube-gradient.svg"
            alt="Cube gradient"
            title="Cube"
            className="partner__img-cube-gradient"
          />
          <img
            src="/img/partner-reactangle.png"
            alt="Reactangle"
            title="Reactnagle"
            className="partner__img-reactangle"
          />
          <button className="partner__button">
            Become a Partner
            <img
              src="/img/arrow-left-white.svg"
              alt="Arrow left icon"
              title="Arrow icon"
            />
          </button>
        </div>
      </div>
      <div className="partner__submission">
        <img
          src="/img/partner-balls.svg"
          alt="Black balls"
          title="Black balls"
          className="partner__img-balls"
        />
        <div className="partner__submission-container">
          <div className="partner__col-one">
            <Logo className='partner__header-logo' />
            <h2 className="partner__col-one-title">Become a part of our team</h2>
            <p className="partner__col-one-description">
              Are you interested in becoming a Wholesaler or Distributor of
              Hillme? Look no further! Simply fill out the Contact Form below
              and we will get back to you within two business days. Let's embark
              on a journey of growth and success together!
            </p>
            <h2 className="partner__col-one-title-second">OUR GLOBAL PARTNERSHIP</h2>
            <ArrowRightLong className='partner__arrow-left-long' />
            <div>
              <span>Indicators</span>
            </div>
          </div>
          <form>our form</form>
        </div>
      </div>
    </section>
  );
};

export default BecomeAPartner;
