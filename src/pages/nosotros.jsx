import Comentarios from "@/components/comentarios";
import Footer from "@/components/footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlechaUp from "@/svg/flechaUp";
import Head from "next/head";
import Image from "next/image";

const Nosotros = () => {
  return (
    <>
      <div
        className="h-72 w-full bg-red-500 flex justify-center items-center"
        style={{
          marginTop: "80px",
          backgroundImage: `url('edi/noso1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="h-4/5 w-2/4 relative flex justify-center items-center flex-col p-12 shadow-md"
          style={{ backgroundColor: "#00000059" }}
        >
          <h1
            className="text-center font-bold"
            style={{
              color: "#fff",
              fontSize: "40px",
            }}
          >
            NOSOTROS
          </h1>
          <p
            className="text-center"
            style={{
              color: "#fff",
            }}
          >
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus
          </p>
          <div className="svgfondo w-3 h-full bg-red-500 absolute top-0 right-full"></div>
          <div className="svgfondo w-full h-3 bg-red-500 absolute bottom-full left-0"></div>
        </div>
      </div>
      <div className="w-screen h-auto mt-32 flex flex-col lg:flex-row ">
        <div className="h-20 w-1/2 bg-red-400"></div>
        <div className="h-20 w-1/2 bg-blue-400"></div>
      </div>
    </>
  );
};

export default Nosotros;
