/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import "./Exhibition.scss";
import { IoIosArrowDown } from "react-icons/io";
// @ts-ignore
import { ReactComponent as MapMarkerGradient } from "/public/img/map-marker-gradient.svg";
// @ts-ignore
import { ReactComponent as MapMarkerGray } from "/public/img/map-marker-gray.svg";

const Exhibition = () => {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("Moscow");

  return (
    <div className="exhibition">
      <div className="exhibition__col-one">
        <div className="exhibition__col-one-title-wrapper">
          <img src="/img/logo-lg.svg" alt="Logo" title="Logo" />
          <h1>Exhibition</h1>
        </div>
        <div className="exhibition__col-one-images">
          <div className="exhibition__col-one-image-wrapper">
            <img src="/img/1.jpg" alt="" />
          </div>
          <div className="exhibition__col-one-image-wrapper">
            <img src="/img/2.jpg" alt="" />
          </div>
          <div className="exhibition__col-one-image-wrapper">
            <img src="/img/3.jpg" alt="" />
          </div>
          <div className="exhibition__col-one-image-wrapper">
            <img src="/img/4.jpg" alt="" />
          </div>
          <div className="exhibition__col-one-image-wrapper">
            <img src="/img/5.jpg" alt="" />
          </div>
          <div className="exhibition__col-one-image-wrapper">
            <img src="/img/6.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="exhibition__col-second">
        <div className="exhibition__col-second-titles">
          <div className="exhibition__col-second-title-wrapper">
            <h2>{location || "Moscow"}</h2>
            <IoIosArrowDown
              size={55}
              color="white"
              className="exhibition__col-second-arrow-icon"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div
            className={`exhibition__col-second-dropdown ${
              open
                ? "exhibition__col-second-dropdown--block"
                : "exhibition__col-second-dropdown--hidden"
            }`}
          >
            {location !== "Moscow" && (
              <h2
                onClick={() => {
                  setLocation("Moscow");
                  setOpen(false);
                }}
              >
                Moscow
              </h2>
            )}
            {location !== "U.K" && (
              <h2
                onClick={() => {
                  setLocation("U.K");
                  setOpen(false);
                }}
              >
                U.K
              </h2>
            )}
            {location !== "Dubai" && (
              <h2
                onClick={() => {
                  setLocation("Dubai");
                  setOpen(false);
                }}
              >
                Dubai
              </h2>
            )}
          </div>
        </div>
        <div className="exhibition__col-second-map">
          <img
            src="/img/map-bg.svg"
            alt="Map image"
            title="Map"
            className="exhibition__col-second-map-itself"
          />
          {/* <img
            src="/img/map-marker-gradient.svg"
            alt="Map image"
            title="Map marker"
            className="exhibition__col-second-map-marker--gradient"
          /> */}
          {/* MOSCOW */}
          {location === "Moscow" ? (
            <MapMarkerGradient className="exhibition__col-second-map-marker--gradient-moscow" />
          ) : (
            <MapMarkerGray className="exhibition__col-second-map-marker--gray-moscow" onClick={() => setLocation('Moscow')} />
          )}
          {/* UK */}
          {location === "U.K" ? (
            <MapMarkerGradient className="exhibition__col-second-map-marker--gradient-uk" />
          ) : (
            <MapMarkerGray className="exhibition__col-second-map-marker--gray-uk" onClick={() => setLocation('U.K')} />
          )}
          {/* DUBAI */}
          {location === "Dubai" ? (
            <MapMarkerGradient className="exhibition__col-second-map-marker--gradient-dubai" />
          ) : (
            <MapMarkerGray className="exhibition__col-second-map-marker--gray-dubai" onClick={() => setLocation('Dubai')} />
          )}
        </div>
        <h1 className="exhibition__col-second-title-bottom">Exhibition</h1>
      </div>
    </div>
  );
};

export default Exhibition;
