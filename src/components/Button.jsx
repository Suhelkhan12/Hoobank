import React from "react";

const Button = ({ styles }) => {
  return (
    <div>
      <button
        type="button"
        className={`py-3 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[4px] ${styles} btn-hover`}
      >
        Get Started
      </button>
    </div>
  );
};

export default Button;
