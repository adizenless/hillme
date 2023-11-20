import "./VerifyAge.scss";
import { motion, AnimatePresence } from "framer-motion";

interface VerifyAgeProps {
  verified: boolean;
  setVerified: React.Dispatch<React.SetStateAction<boolean>>;
}

const VerifyAge = ({ verified, setVerified }: VerifyAgeProps) => {
  return (
    <div>
      <AnimatePresence>
        {!verified && (
          <motion.div
            key="modal"
            initial={{ opacity: 0.9 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ y: -100 }}
            className="verify-age"
          >
            <motion.div
              key="modal2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ x: 1000 }}
              className="verify-age__modal"
            >
              <img
                src="/img/header__logo.svg"
                alt="Logo"
                className="verify-age__logo"
              />
              <h1 className="verify-age__title">
                Please verify that you 21 years of age or over.
              </h1>
              <p className="verify-age__description">
                we need to make sure that you can use our website
              </p>
              <div className="verify-age__buttons">
                <div className="verify-age__button-wrapper verify-age__button-wrapper--one">
                  <button
                    onClick={() => {
                      setVerified(false);
                      window.location.reload();
                    }}
                    className="verify-age__button verify-age__button--one"
                  >
                    I AM NOT YET 21
                  </button>
                </div>
                <div className="verify-age__button-wrapper verify-age__button-wrapper--two">
                  <button
                    onClick={() => setVerified(true)}
                    className="verify-age__button  verify-age__button--two"
                  >
                    I AM 21+
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VerifyAge;
