import Exhibition from "../../components/Exhibition/Exhibition";
import VerticalCarousel from "../../components/VerticalCarousel/VerticalCarousel";
import "./Home.scss";

const Home = () => {
  return (
    <main className="home">
      <div className="home__container">
        <div className="home__titles">
          <h1 className="home__titles-one">HILLME</h1>
          <h1 className="home__titles-two">TECH</h1>
          <p className="home__titles-desc">
            We are pleased to introduce Hillme, a service-oriented company that
            integrates R&D, production, and sales. Our company specializes in
            the development and production of Pod Starter Kit with disposable
            prefilled cartridges electronic cigarettes (ENDS equipment),
            disposable electronic cigarettes, electronic atomizers (CBD/THC),
            and other related products. We are committed to providing OEM/ODM
            one-stop solutions and five-star services for customers worldwide.
          </p>
          <div className="home__titles-buttons">
            <button className="home__titles-button-one">All catalog</button>
            <button className="home__titles-button-two">Verify</button>
          </div>
        </div>
        <VerticalCarousel />
      </div>
      <Exhibition />
    </main>
  );
};

export default Home;
