import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import { useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="mt-52">
            <HashLoader color={"#cc68e0"} loading={loading} size={200} />
          </div>
        </div>
      ) : (
        <div className="relative z-0 bg-primary  ">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />

          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
