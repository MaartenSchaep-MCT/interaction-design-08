import React, { type PropsWithChildren } from "react";
import useBoop from "../hooks/use-boop";
const BoopAnimations = () => {
  const [isLockPlayed, setIsLockPlayed] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  React.useEffect(() => {
    const lockIcon = document.querySelector(".lock-icon");
    if (lockIcon) {
      const styles = getComputedStyle(lockIcon);
      const duration = Number(
        styles.getPropertyValue("--max-animation-duration"),
      );

      setDuration(duration);
    }
  }, []);
  const triggerLock = () => {
    setIsLockPlayed(true);
    console.log(duration);
    setTimeout(() => {
      setIsLockPlayed(false);
    }, duration);
  };
  // const [circleStyle, circleTrigger] = useBoop({
  //   timing: 325,
  //   y: -4,
  //   timingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  // }) as [React.CSSProperties, any];
  // const [shackleStyle, shackleTrigger] = useBoop({
  //   timing: 300,
  //   y: -4,
  //   strokeDashoffset: 5,
  //   timingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  // }) as [React.CSSProperties, any];
  // const [boxStyle, boxTrigger] = useBoop({
  //   timing: 300,
  //   y: -4,
  //   timingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  // }) as [React.CSSProperties, any];

  const [alarmMoveUp, alarmMoveUpTrigger] = useBoop({
    timing: 250,
    y: -4,
    timingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  }) as [React.CSSProperties, any];
  const [leftAlarmLineStyle, leftAlarmLineTrigger] = useBoop({
    timing: 225,
    y: -4,
    x: -2,
    transitionDelay: 50,
    timingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  }) as [React.CSSProperties, any];
  const [rightAlarmLineStyle, rightAlarmLineTrigger] = useBoop({
    timing: 225,
    y: -4,
    x: 2,
    transitionDelay: 50,

    timingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  }) as [React.CSSProperties, any];
  const [clockLineStyle, clockLineTrigger] = useBoop({
    timing: 250,
    y: -4,
    rotation: 360,
    timingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  }) as [React.CSSProperties, any];
  const [clockLineSmallStyle, clockLineSmallTrigger] = useBoop({
    timing: 250,
    y: -4,
    rotation: -180,
    timingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  }) as [React.CSSProperties, any];
  return (
    <div className="grid-container">
      <button
        onMouseEnter={() => {
          triggerLock();
          // circleTrigger();
          // boxTrigger();
          // shackleTrigger();
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
          className="lock-icon"
        >
          <circle
            cx="12"
            cy="16"
            r="1"
            // className="lock-hole"
            // style={circleStyle}
            className={isLockPlayed ? "animation-lock-hole" : ""}
          />
          <rect
            x="3"
            y="10"
            width="18"
            height="12"
            rx="2"
            // style={boxStyle}
            className={isLockPlayed ? "animation-lock-box" : ""}
            // onAnimationEnd={() => setIsLockPlayed(false)}
          />
          <path
            d="M7 10V7a5 5 0 0 1 10 0v3"
            // style={shackleStyle}
            // className="lock-shackle"
            className={
              isLockPlayed
                ? "animation-lock-shackle lock-shackle"
                : "lock-shackle"
            }
            // onAnimationEnd={() => setIsLockPlayed(false)}
          />
        </svg>
        Lock
      </button>
      <button
        onMouseEnter={() => {
          alarmMoveUpTrigger();
          leftAlarmLineTrigger();
          rightAlarmLineTrigger();
          clockLineTrigger();
          clockLineSmallTrigger();
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
          style={{ overflow: "visible" }}
          className="lucide lucide-alarm-clock-icon lucide-alarm-clock"
        >
          <circle cx="12" cy="13" r="8" style={alarmMoveUp} />
          <path d="M12 9v4" style={clockLineStyle} className="clock-line" />
          <path
            d="M12 13l2 2"
            style={clockLineSmallStyle}
            className="clock-line"
          />
          <path d="M5 3 2 6" style={leftAlarmLineStyle} />
          <path d="m22 6-3-3" style={rightAlarmLineStyle} />
          <path d="M6.38 18.7 4 21" style={alarmMoveUp} />
          <path d="M17.64 18.67 20 21" style={alarmMoveUp} />
        </svg>
        Alarm
      </button>
    </div>
  );
};
export default BoopAnimations;
