import Image from "next/image";

const equipo = () => {
  const stado = [
    {
      img: "/img/card1.jpg",
      titulo: "CHEF",
      nombre: "JOSHUA FIELDS",
      des: "Everything We Bake, We Bake With Love. Designer Desserts.",
    },
    {
      img: "/img/card2.jpg",
      titulo: "BAKER",
      nombre: "DAVID WILLIS",
      des: "Everything We Bake, We Bake With Love. Designer Desserts.",
    },
    {
      img: "/img/card3.jpg",
      titulo: "BAKER",
      nombre: "ROBERTA COLLINS",
      des: "Everything We Bake, We Bake With Love. Designer Desserts.",
    },
  ];

  return (
    <section className="mt-7">
      <h2
        className="text-center"
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          fontFamily: "'Cormorant', serif",
        }}
      >
        NUESTRO EQUIPO
      </h2>
      <p className="text-center" style={{ color: "#545454" }}>
        Lorem ipsum dolor sit amet, sed an dicat sententiae in has.
      </p>

      <div className="w-screen h-auto my-20 flex justify-center">
        <div
          className="h-full w-full flex flex-wrap justify-center"
          style={{ maxWidth: "1300px" }}
        >
          {stado.map((value, key) => {
            return (
              <div
                key={key}
                className="m-3"
                style={{ width: "346px", height: "460px" }}
              >
                <Image
                  src={value.img}
                  alt={value.img}
                  width={1000}
                  height={1000}
                  className="w-full h-1/2 object-cover"
                />
                <div
                  className="w-full h-1/2 flex flex-col justify-between items-center py-10 relative"
                  style={{ backgroundColor: "#f6f2e5" }}
                >
                  <h3
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      fontFamily: "'Cormorant', serif",
                      textAlign: "center",
                    }}
                  >
                    {value.nombre}
                  </h3>
                  <p
                    style={{
                      textAlign: "center",
                      color: "#545454",
                    }}
                  >
                    {value.des}
                  </p>
                  <div className="h-6 w-16 bg-red-900"></div>
                  <div
                    className="h-6 w-16 absolute flex justify-center items-center"
                    style={{
                      top: "-8px",
                      left: "calc(50% - 32px)",
                      backgroundColor: "#bc9331",
                      color: "#fff",
                    }}
                  >
                    {value.titulo}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <article>
          <img src="" alt="" />
        </article> */}
      </div>
    </section>
  );
};

export default equipo;
