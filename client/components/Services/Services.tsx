import React from "react";
import Image from "next/image";
// internal
import styles from "./Services.module.css";
import images from "../../img";

const Services = () => {
  return (
    <div className={styles.service}>
      <div className={styles.service_box}>
        <div className={styles.service_box_item}>
          <Image src={images.service1} alt="service" width={100} height={100} />
          <p className={styles.service_box_item_step}>
            <span>step 1</span>
          </p>
          <h3>Filter & Discover</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            suscipit dolores vel minima aspernatur
          </p>
        </div>
        <div className={styles.service_box_item}>
          <Image src={images.service2} alt="service" width={100} height={100} />
          <p className={styles.service_box_item_step}>
            <span>step 1</span>
          </p>
          <h3>Filter & Discover</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            suscipit dolores vel minima aspernatur
          </p>
        </div>
        <div className={styles.service_box_item}>
          <Image src={images.service3} alt="service" width={100} height={100} />
          <p className={styles.service_box_item_step}>
            <span>step 1</span>
          </p>
          <h3>Connect Wallet</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            suscipit dolores vel minima aspernatur
          </p>
        </div>
        <div className={styles.service_box_item}>
          <Image src={images.service4} alt="service" width={100} height={100} />
          <p className={styles.service_box_item_step}>
            <span>step 1</span>
          </p>
          <h3>Filter & Discover</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            suscipit dolores vel minima aspernatur
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
