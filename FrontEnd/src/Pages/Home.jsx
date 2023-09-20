import React from "react";
import Header from "../Components/Header";
import "./home.css";
const Home = () => {
  return (
    <div>
      <Header />
      <div className="homeImage  h-screen bg-cover relative">
        <p className="fixed text-9xl font-extrabold text-black m-32">
          STRAW<span className="text-white">HAT</span> <span className="text-white">REAL</span>ESTATE
        </p>
      </div>
    </div>
  );
};

export default Home;
