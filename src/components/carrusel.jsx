import Flecha from "@/svg/flecha";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carrusel = () => {
  const [actual, setActual] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  const imgCarrucel = ["edi/carru1.jpg", "edi/carru2.jpg", "edi/carru3.jpg"];
  const msgCarrucel = ["Construction", "Renovation", "Waterproofing"];

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("setInterval");

      setActual((actual) => {
        let result;
        if (actual == imgCarrucel.length - 1) {
          // console.log("reinicia");
          return (result = 0);
        }
        result = actual + 1;
        return result;
      });
    }, 12000);
    return () => {
      clearInterval(interval);
    };
  }, [imgCarrucel.length]);

  const controlCarrusel = (e) => {
    e.stopPropagation();
    console.log("cambio");
  };

  return (
    <section className="relative z-0">
      <div className="w-full relative" style={{ height: "600px" }}>
        <div
          className="flecha absolute z-50 top-2/4 left-2 h-auto w-auto flex justify-center items-center cursor-pointer p-3 rounded-full scale-110"
          onClick={(e) => {
            e.stopPropagation();
            console.log(imgCarrucel.length);
            if (actual == imgCarrucel.length - 1) {
              console.log("reinicia");
              setActual(0);
              return;
            }
            setActual(actual + 1);
          }}
        >
          <Flecha
            style={{ stroke: "#fff", fill: "#fff" }}
            className="lg:block hidden rotate-180"
          />
        </div>
        <div
          className="flecha absolute z-30 top-2/4 right-2 h-auto w-auto flex justify-center items-center cursor-pointer p-3 rounded-full scale-110"
          onClick={(e) => {
            e.stopPropagation();
            console.log(imgCarrucel.length);
            if (actual == 0) {
              console.log("reinicia");
              setActual(imgCarrucel.length - 1);
              return;
            }
            setActual(actual - 1);
          }}
        >
          <Flecha
            style={{ stroke: "#fff", fill: "#fff" }}
            className="lg:block hidden rotate-0"
          />
        </div>

        <div className=" h-full w-full relative">
          <AnimatePresence>
            {imgCarrucel.map((value, key) => {
              if (actual == key) {
                return (
                  <motion.div
                    initial={{ x: screenWidth, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -screenWidth, opacity: 0 }}
                    transition={{ type: "tween", duration: 2 }}
                    key={key}
                    style={{
                      backgroundImage: `url('${value}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "brightness(59%)",
                    }}
                    className="h-full w-full absolute top-0 left-0 z-20"
                  ></motion.div>
                );
              }
            })}
          </AnimatePresence>

          <div
            className=" lg:hidden w-32 h-10 absolute z-30 bottom-0 flex justify-between items-center "
            style={{ left: "calc(50% - 64px)" }}
          >
            {imgCarrucel.map((value, key) => {
              return (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setActual(key);
                    // console.log(key);
                  }}
                  key={key}
                  className={`h-5 w-5 hover:bg-white ${
                    actual == key ? "bg-white" : ""
                  } border-2 border-white rounded-full transition-colors cursor-pointer`}
                ></div>
              );
            })}
          </div>

          <div
            className="scale-50 md:scale-75 lg:scale-100 absolute z-30 flex flex-col justify-between items-center"
            style={{
              width: "auto",
              height: "250px",
              top: "calc(50% - 150px)",
              left: "0",
            }}
          >
            <div
              className="h-24 flex items-center relative text-start"
              style={{
                fontSize: "65px",
                fontWeight: "bold",
                width: "500px",
                fontFamily: "'Cormorant', serif",
                color: "#ffff",
              }}
            >
              <AnimatePresence>
                {msgCarrucel.map((value, key) => {
                  if (actual == key) {
                    return (
                      <motion.span
                        className="absolute top-0 left-0 h-full w-full flex justify-center items-center"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ type: "tween", duration: 2, delay: 0.5 }}
                        key={key}
                      >
                        {value}
                      </motion.span>
                    );
                  }
                })}
              </AnimatePresence>
            </div>
            <div
              className="h-24 flex justify-start items-center relative"
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                width: "500px",
                fontFamily: "'Cormorant', serif",
                color: "#ffff",
              }}
            >
              <AnimatePresence>
                {msgCarrucel.map((value, key) => {
                  if (actual == key) {
                    return (
                      <motion.span
                        className="absolute top-0 left-0 h-full w-full flex justify-center items-center text-center"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ type: "tween", duration: 2, delay: 0.5 }}
                        key={key}
                      >
                        imply dummy text of the printing and typesetting
                        industry. Lorem Ipsum
                      </motion.span>
                    );
                  }
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carrusel;
