// hooks/use-boop.js
import React, { type PropsWithChildren } from "react";
import usePrefersReducedMotion from "./use-prefersReducedMotion";
function useBoop({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  timingFunction = "linear",
  strokeDashoffset = 0,
}: PropsWithChildren<{
  x?: number;
  y?: number;
  rotation?: number;
  scale?: number;
  timing?: number;
  timingFunction?: string;
  strokeDashoffset?: number;
}>) {
  const [isBooped, setIsBooped] = React.useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const style = {
    display: "inline-block",
    backfaceVisibility: "hidden",
    transition: `all ${timing}ms ${timingFunction}`,
    transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
    strokeDashoffset: isBooped ? strokeDashoffset : 0,
  };

  React.useEffect(() => {
    if (!isBooped) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);

  const trigger = React.useCallback(() => {
    setIsBooped(true);
  }, []);
  console.log(prefersReducedMotion);
  let applicableStyle = prefersReducedMotion ? {} : style;
  return [applicableStyle, trigger];
}
export default useBoop;
