import React, { type PropsWithChildren } from "react";
import useBoop from "../hooks/use-boop";
const BoopAnimations = () => {
  const [isLockPlayed, setIsLockPlayed] = React.useState(false);
  const [circleStyle, circleTrigger] = useBoop({
    timing: 325,
    y: -4,
    timingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  }) as [React.CSSProperties, any];
  const [shackleStyle, shackleTrigger] = useBoop({
    timing: 300,
    y: -4,
    strokeDashoffset: 5,
    timingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  }) as [React.CSSProperties, any];
  const [boxStyle, boxTrigger] = useBoop({
    timing: 300,
    y: -4,
    timingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  }) as [React.CSSProperties, any];
  return (
    <div className="grid-container">
      <button
        onMouseEnter={() => {
          circleTrigger();
          boxTrigger();
          shackleTrigger();
        }}
        className="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          overflow="visible"
        >
          <circle
            cx="12"
            cy="16"
            r="1"
            className="lock-hole"
            style={circleStyle}
            // className={isLockPlayed ? "animation-lock-hole" : ""}
          />
          <rect
            x="3"
            y="10"
            width="18"
            height="12"
            rx="2"
            style={boxStyle}
            // className={isLockPlayed ? "animation-lock-box" : ""}
            // onAnimationEnd={() => setIsLockPlayed(false)}
          />
          <path
            d="M7 10V7a5 5 0 0 1 10 0v3"
            style={shackleStyle}
            className="lock-shackle"
            // className={
            //   isLockPlayed
            //     ? "animation-lock-shackle lock-shackle"
            //     : "lock-shackle"
            // }
            // onAnimationEnd={() => setIsLockPlayed(false)}
          />
        </svg>
        Lock
      </button>
    </div>
  );
};
export default BoopAnimations;
