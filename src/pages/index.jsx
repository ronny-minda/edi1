import { motion } from "framer-motion";

import Carrusel from "@/components/carrusel";
import Comentarios from "@/components/comentarios";
import Footer from "@/components/footer";
import Linea from "@/components/linea";
import Equipo from "@/components/equipo";
import Mapa from "@/components/mapa";
import Flecha from "@/svg/flecha";
import Contacto from "@/components/contacto";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const producto = [
    {
      img: "/img/product1.png",
      titulo: "BREAKFAST",
      des: "Lorem ipsum dolor sit amet, his convenire similique.",
    },
    {
      img: "/img/product2.png",
      titulo: "PASTRY",
      des: "Lorem ipsum dolor sit amet, his convenire similique.",
    },
    {
      img: "/img/product3.png",
      titulo: "SANDWICHES",
      des: "Lorem ipsum dolor sit amet, his convenire similique.",
    },
    {
      img: "/img/product4.png",
      titulo: "COFFEE",
      des: "Lorem ipsum dolor sit amet, his convenire similique.",
    },
  ];
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Carrusel />
      <section className="flex justify-center my-16">
        <div
          className="flex flex-wrap justify-center"
          style={{ maxWidth: "1300px" }}
        >
          {producto.map((value, key) => {
            return (
              <article className="flex" key={key}>
                <div className="flex flex-col items-center h-80 w-80">
                  <Image
                    height={1000}
                    width={1000}
                    src={value.img}
                    alt={value.img}
                    className="h-56 w-80 object-contain"
                  />
                  <h3
                    className="my-4"
                    style={{
                      fontSize: "26px",
                      fontWeight: "bold",
                      fontFamily: "'Cormorant', serif",
                      textAlign: "center",
                    }}
                  >
                    {value.titulo}
                  </h3>
                  <p style={{ color: "#545454", textAlign: "center" }}>
                    {value.des}
                  </p>
                </div>
                <div
                  className="h-80"
                  style={{ width: "1px", backgroundColor: "#eae6e3" }}
                ></div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="w-screen lg:flex mb-20 ">
        <div className="lg:w-1/2 lg:mr-2">
          <Image
            height={1000}
            width={1000}
            src="/img/horno1.jpg"
            alt="horno1"
            className="h-96 w-full object-cover"
          />
        </div>
        <div
          className="h-96 w-full lg:w-1/2 flex justify-center items-center"
          style={{ backgroundColor: "#f6f3e4" }}
        >
          <div className="max-w-md">
            <h2
              className="text-3xl font-bold"
              style={{
                fontFamily: "'Cormorant', serif",
              }}
            >
              HAVE YOU TRIED OUR NEW BROWNIES YET?
            </h2>
            <p className="text-base mt-3" style={{ color: "#545454" }}>
              Duis sed odio sit amet nibh vulputate. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec.
            </p>
            <div className="w-20 h-6 mt-3 cursor-pointer overflow-hidden">
              <motion.div
                style={{ x: -100 }}
                whileHover={{
                  x: 0,
                  transition: { duration: 0.5 },
                }}
                className="w-40 h-6 flex justify-between items-center"
              >
                <span>Leer mas</span>
                <Flecha style={{ stroke: "#000" }} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Linea />
      <Comentarios img={"img/comentario1.jpg"} color={"#fff"} />
      <Equipo />
      <Contacto />
      <Mapa />
      <Footer />
    </>
  );
}
