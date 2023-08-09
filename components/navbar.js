import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../components/navbar.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles["nav-container"]}>
      <div className={`${styles.logo} logo`}>
        {/* Replace the link below with your portfolio logo */}
        <h2>SANDHYA RANI</h2>
      </div>
      <ul className={styles["nav-links"]}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
