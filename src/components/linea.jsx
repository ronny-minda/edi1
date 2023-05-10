import { motion } from "framer-motion";

const Linea = () => {
  const conten = [
    {
      img: "img/linea1.jpg",
      titulo: "BAKERS DELIGHT. YOUR LOCAL BAKER.",
      año: "1938",
      des: "Lorem ipsum dolor sit amet, sed an dicat sententiae, in has quis patrioque mnesarchum, ei fabulas apeirian vel. Vix veniam necessitatibus ad.",
    },
    {
      img: "img/linea2.png",
      titulo: "LA PASTELERÍA ES DIFERENTE A LA COCINA.",
      año: "1947",
      des: "Lorem ipsum dolor sit amet, sed an dicat sententiae, in has quis patrioque mnesarchum, ei fabulas apeirian vel. Vix veniam necessitatibus ad.",
    },
    {
      img: "img/linea3.png",
      titulo: "SER UN GRAN CHEF PASTELERO.",
      año: "1964",
      des: "Lorem ipsum dolor sit amet, sed an dicat sententiae, in has quis patrioque mnesarchum, ei fabulas apeirian vel. Vix veniam necessitatibus ad.",
    },
    {
      img: "img/linea4.png",
      titulo: "LOS PASTELEROS SON MUY PARTICULARES.",
      año: "1972",
      des: "Lorem ipsum dolor sit amet, sed an dicat sententiae, in has quis patrioque mnesarchum, ei fabulas apeirian vel. Vix veniam necessitatibus ad.",
    },
  ];

  return (
    <section className="overflow-hidden" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
      <h2
        className="my-10 text-3xl font-bold text-center"
        style={{
          fontFamily: "'Cormorant', serif",
        }}
      >
        NUESTAR HISTORIA
      </h2>
      {conten.map((value, key) => {
        return (
          <article
            key={key}
            className={`h-auto lg:h-80 w-screen flex flex-col mb-10 lg:mb-0 ${
              key % 2 == !0 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <div
              className="h-full flex justify-center items-center w-screen lg:w-2/5"
              // style={{
              //   width: "40%",
              // }}
            >
              <motion.img
                viewport={{ once: true }}
                initial={{
                  x: 100,
                  opacity: 0,
                  clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                }}
                transition={{ duration: 1 }}
                src={value.img}
                alt={value.img}
                className="lg:w-96 w-11/12"
                style={{
                  height: "251px",
                  // width: "427px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              className="hidden lg:block h-full lg:flex justify-center relative"
              style={{
                width: "20%",
              }}
            >
              <div
                className="flex items-center"
                style={{
                  width: "1px",
                  height: "100%",
                  backgroundColor: "#bc9331",
                }}
              ></div>
              <div
                className="rounded-full absolute"
                style={{
                  width: "12px",
                  height: "12px",
                  top: "calc(50% - 6px)",
                  left: "calc(50% - 6px)",
                  backgroundColor: "#bc9331",
                }}
              ></div>
              <div
                className="absolute"
                style={{
                  width: "30px",
                  height: "1px",
                  top: "calc(50% - 1px)",
                  left: key % 2 == !0 ? "calc(35% - 15px)" : "calc(65% - 15px)",
                  backgroundColor: "#bc9331",
                }}
              ></div>
              <div
                className="absolute font-bold"
                style={{
                  width: "50px",
                  height: "30px",
                  top: "calc(47% - 15px)",
                  left: key % 2 == !0 ? "calc(10% - 25px)" : "calc(90% - 25px)",
                  fontFamily: "'Cormorant', serif",
                  fontSize: "30px",
                  color: "#bc9331",
                }}
              >
                {value.año}
              </div>
            </div>
            <div
              className="h-full flex justify-center items-center w-full lg:w-2/5"
              // style={{
              //   width: "40%",
              // }}
            >
              <motion.div
                viewport={{ once: true }}
                initial={{
                  y: 100,
                  opacity: 0,
                  clipPath: "polygon(100% 100%, 0 100%, 0 100%, 100% 100%)",
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  clipPath: "polygon(100% 100%, 0 100%, 0 0, 100% 0)",
                }}
                transition={{ duration: 1 }}
                className="w-4/5 lg:w-96 flex flex-col justify-center lg:flex-none"
                style={{ height: "180px" }}
              >
                <h3
                  className="font-bold text-center lg:text-left"
                  style={{ fontFamily: "'Cormorant', serif", fontSize: "30px" }}
                >
                  {value.titulo}
                </h3>
                <p
                  className="text-center lg:text-left"
                  style={{ color: "#545454" }}
                >
                  {value.des}
                </p>
              </motion.div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Linea;
