import React, { useContext } from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../../components/Card/Card";
import Resume from "./Resume.pdf";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 1, type: "spring" };

  return (
    <div className="services" id="Services">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}> My Awesome </span>
        <span> Skills </span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          commodi,
          <br />
          ispum is simpley dummy text of painting
        </span>
        <a href={Resume} download>
          <button className="button s-button"> Download CV </button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="card">
        <motion.div
          whileInView={{ left: "14rem" }}
          initial={{ left: "25rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Wix, Sketch, Framer X, Wireframe.cc"}
          />
        </motion.div>

        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Wed/App Developer"}
            detail={"Html, Css, Javascript, Reactjs, MERN Stack, ReactNative"}
          />
        </div>

        <motion.div
          whileInView={{ left: "14rem" }}
          initial={{ left: "25rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={Humble}
            heading={"Backend Services"}
            detail={"MySQL, MySQL-Community, FireBase, MongoDB"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
