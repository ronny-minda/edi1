import Cell from "@/svg/cell";
import Corazon from "@/svg/corazon";
import Facebook from "@/svg/facebook";
import Mundo from "@/svg/mundo";
import Papel from "@/svg/papel";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full h-auto flex flex-col justify-center items-center"
      style={{ backgroundColor: "#1d1c1c" }}
    >
      <div className="h-full w-5/6 flex flex-wrap justify-center">
        <div
          className="h-80 m-2 flex flex-col items-center justify-center p-2"
          style={{ maxWidth: "250px", width: "250px" }}
        >
          <Link href="/">
            <Image
              width={1000}
              height={1000}
              src="/img/logo.png"
              alt="logo"
              style={{ width: "200px", height: "44px", objectFit: "contain" }}
            />
          </Link>

          <p className="mt-10" style={{ color: "#fff" }}>
            Just like a perfectly baked pastry, we created Panadería with
            special love – and it shows.
          </p>
        </div>
        <div
          className="h-80 m-2 flex flex-col items-center justify-center"
          style={{ maxWidth: "200px", width: "200px" }}
        >
          <h4
            className=""
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              textAlign: "center",
              fontFamily: "'Cormorant', serif",
              color: "#ffff",
            }}
          >
            USEFUL LINKS
          </h4>
          <div className="w-full h-3/4 flex flex-col justify-center">
            <Link href="/" className="w-full my-3 flex">
              <Corazon style={{ stroke: "#fff", fill: "#fff" }} />
              <span className="ml-1" style={{ color: "#fff", stroke: "#fff" }}>
                ABOUT US
              </span>
            </Link>
            <Link href="/" className="w-full my-3 flex">
              <Mundo style={{ stroke: "#fff", fill: "#fff" }} />
              <span className="ml-1" style={{ color: "#fff", stroke: "#fff" }}>
                LOCATIONS
              </span>
            </Link>
            <Link href="/" className="w-full my-3 flex">
              <Papel style={{ stroke: "#fff", fill: "#fff" }} />
              <span className="ml-1" style={{ color: "#fff", stroke: "#fff" }}>
                CAREERS
              </span>
            </Link>
            <Link href="/" className="w-full my-3 flex">
              <Cell style={{ stroke: "#fff", fill: "#fff" }} />
              <span className="ml-1" style={{ color: "#fff", stroke: "#fff" }}>
                CALL US 5555-00-444
              </span>
            </Link>
          </div>
        </div>
        <div
          className="h-80 m-2 flex flex-col items-center justify-center"
          style={{ maxWidth: "200px", width: "200px" }}
        >
          <h4
            className=""
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              textAlign: "center",
              fontFamily: "'Cormorant', serif",
              color: "#ffff",
            }}
          >
            NEWS
          </h4>
          <div className="w-full h-3/4">
            <div className="h-20 w-full my-2 flex">
              <div style={{ width: "35%" }}>
                <Image
                  width={1000}
                  height={1000}
                  src="/img/footer1.jpg"
                  alt="footer1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div style={{ width: "65%" }}>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontFamily: "'Cormorant', serif",
                    color: "#ffff",
                  }}
                >
                  BAKING HAPPY.
                </p>
                <p
                  style={{
                    fontSize: "10px",
                    textAlign: "center",
                  }}
                >
                  MARCH 18, 2019
                </p>
              </div>
            </div>
            <div className="h-20 w-full my-2 flex">
              <div style={{ width: "35%" }}>
                <Image
                  width={1000}
                  height={1000}
                  src="/img/footer2.jpg"
                  alt="footer1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div style={{ width: "65%" }}>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontFamily: "'Cormorant', serif",
                    color: "#ffff",
                  }}
                >
                  BAKING HAPPY.
                </p>
                <p
                  style={{
                    fontSize: "10px",
                    textAlign: "center",
                  }}
                >
                  MARCH 18, 2019
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          className="h-80 bg-slate-400 m-2 flex flex-col items-center justify-center"
          style={{ maxWidth: "200px", width: "200px" }}
        >
          <h4
            className=""
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              textAlign: "center",
              fontFamily: "'Cormorant', serif",
              color: "#ffff",
            }}
          >
            INSTAGRAM
          </h4>
          <div className="w-full h-3/4 bg-lime-500"></div>
        </div> */}
      </div>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "center",
          fontFamily: "'Cormorant', serif",
          color: "#ffff",
        }}
      >
        © 2023 All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
