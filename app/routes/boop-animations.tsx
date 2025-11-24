import React, { type PropsWithChildren } from "react";

const BoopAnimations = () => {
  const [isLockPlayed, setIsLockPlayed] = React.useState(false);

  return (
    <div className="grid-container">
      <button onMouseEnter={() => setIsLockPlayed(true)} className="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          overflow="visible"
        >
          <circle
            cx="12"
            cy="16"
            r="1"
            className={isLockPlayed ? "animation-lock-hole" : ""}
          />
          <rect
            x="3"
            y="10"
            width="18"
            height="12"
            rx="2"
            className={isLockPlayed ? "animation-lock-box" : ""}
            onAnimationEnd={() => setIsLockPlayed(false)}
          />
          <path
            d="M7 10V7a5 5 0 0 1 10 0v3"
            className={isLockPlayed ? "animation-lock-shackle" : ""}
            onAnimationEnd={() => setIsLockPlayed(false)}
          />
        </svg>
        Lock
      </button>
    </div>
  );
};
export default BoopAnimations;
