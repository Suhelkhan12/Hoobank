import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a <span className="bottom-color">Better</span> card{" "}
        <br className="sm:block hidden" />{" "}
        <span className="bottom-color">Deal</span> in few easy steps
      </h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Streamlined Process for Seamless Transactions.
      </p>

      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
