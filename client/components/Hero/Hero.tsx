import React from "react";
import Image from "next/image";
// internal
import styles from "./Hero.module.css";
import { Button } from "@/components";
import Images from "../../img";

const Hero = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroSection_box}>
        <div className={styles.heroSection_box_left}>
          <h1>Discover, collect and sell NFTs</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            laudantium earum nam labore.
          </p>
          <Button btnText="Start Your Search" />
        </div>
        <div className={styles.heroSection_box_right}>
          <Image src={Images.hero} alt="hero" width={600} height={600} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
