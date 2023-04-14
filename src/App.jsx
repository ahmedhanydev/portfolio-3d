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

  // const NoInspect = () => {
  //   useEffect(() => {

  //   }, []);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    const handleKeyDown = (event) => {
      if (event.keyCode === 123) {
        // F12 key
        event.preventDefault();
      }
    };
    const handleContextMenu = (event) => {
      event.preventDefault();
    };
    window.addEventListener("contextmenu", handleContextMenu);

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("contextmenu", handleContextMenu);
    };
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
