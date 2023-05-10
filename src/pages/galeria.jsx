import Footer from "@/components/footer";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Galeria = () => {
  const imgGalery = [
    "/img/galeria/galery1.jpg",
    "/img/galeria/galery2.jpg",
    "/img/galeria/galery3.jpg",
    "/img/galeria/galery4.jpg",
    "/img/galeria/galery5.jpg",
    "/img/galeria/galery6.jpg",
    "/img/galeria/galery7.jpg",
    "/img/galeria/galery8.jpg",
    "/img/galeria/galery9.jpg",
  ];

  return (
    <>
      <Head>
        <title>Galeria</title>
      </Head>
      <h1
        className="text-center"
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          fontFamily: "'Cormorant', serif",
        }}
      >
        GALERIA
      </h1>
      <p className="text-center mb-10" style={{ color: "#545454" }}>
        Lorem ipsum dolor sit amet, sed an dicat sententiae in has.
      </p>

      <section className="w-full h-auto flex justify-center mb-10">
        <div
          className="w-full h-auto flex flex-wrap justify-center "
          style={{ maxWidth: "1100px" }}
        >
          {imgGalery.map((value, key) => {
            return (
              <div key={key}>
                <Imagenes value={value} />
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

const Imagenes = ({ value }) => {
  const [detalles, serDetalles] = useState(false);

  return (
    <Link
      href="/detalles"
      className="relative m-4 flex justify-center items-center"
      style={{ height: "350px", width: "300px" }}
      onMouseEnter={() => serDetalles(true)}
      onMouseLeave={() => serDetalles(false)}
    >
      {detalles && (
        <div
          className="z-10"
          style={{
            color: "#fff",
            fontSize: "25px",
            fontWeight: "bold",
            fontFamily: "'Cormorant', serif",
            textAlign: "center",
          }}
        >
          Ver Detalles
        </div>
      )}

      <Image
        src={value}
        alt={value}
        width={1000}
        height={1000}
        className="h-full w-full absolute top-0 left-0 object-cover hover:blur-sm  transition-all z-0"
      />
    </Link>
  );
};

export default Galeria;
