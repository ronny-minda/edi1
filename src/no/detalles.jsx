import Footer from "@/components/footer";
import Head from "next/head";
import Image from "next/image";

const Detalles = () => {
  return (
    <>
      <Head>
        <title>Detalles</title>
      </Head>
      <h1
        className="text-center my-7"
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          fontFamily: "'Cormorant', serif",
        }}
      >
        Detalles
      </h1>
      <section className="w-full h-auto flex justify-center mb-10">
        <div
          className="w-full h-auto p-4 lg:p-0 flex flex-col lg:flex-row justify-center"
          style={{ maxWidth: "1100px" }}
        >
          <div className="h-full w-full lg:w-3/12 p-2">
            <div className="sticky top-10">
              <h3
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  fontFamily: "'Cormorant', serif",
                }}
              >
                ENDLESS VARIATIONS
              </h3>
              <p>
                Sed in munere sensibus, vel cu equidem aliquando. Assum fierent
                ne cum. Sit quod insolens maiestatis at.
              </p>
              <h4>
                <b>Ingredients:</b>
              </h4>
              <ul>
                <li>1 tablespoon plus</li>
                <li>1 teaspoon active dry yeast.</li>
                <li>1 cup whole milk, heated to 110°F.</li>
                <li>2 to 2 1/2 cups (320 to 400 grams) bread flour.</li>
                <li>1 teaspoon pure vanilla extract.</li>
                <li>3 large egg yolks.</li>
                <li>2 tablespoons (30 grams) superfine sugar.</li>
                <li>1/2 teaspoon table salt.</li>
                <li>
                  <b>Calories:</b> 579cal
                </li>
                <li>
                  <b>Preparation:</b> 2hours
                </li>
              </ul>
            </div>
          </div>
          <div className="h-auto w-full lg:w-3/4 p-2">
            <Image
              width={1000}
              height={1000}
              className="my-5"
              src="img/detalles/detalle2.jpg"
              alt="detalle2"
            />
            <Image
              width={1000}
              height={1000}
              className="my-5"
              src="img/detalles/detalle3.jpg"
              alt="detalle3"
            />
            <Image
              width={1000}
              height={1000}
              className="my-5"
              src="img/detalles/detalle1.jpg"
              alt="detalle1"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Detalles;
