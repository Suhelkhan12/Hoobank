import React from "react";
import styles from "../style";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={`${styles.heading2}`}>
        What people are <br className="sm:block hidden" /> saying about us
      </h1>

      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph}`}>
          Explore the voices of satisfied customers who have experienced
          exceptional service and results with us.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-center justify-between w-full relative z-[1] feedback-container">
      {feedback.map((feedback, ind) => (
        <FeedbackCard key={feedback.id} {...feedback} />
      ))}
    </div>
  </section>
);

export default Testimonials;
