"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import AnimatedCursor from "react-animated-cursor";

export default function Cursor() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const getCustomColor = () => {
    if (theme === "dark") return "255,255,255";
    if (theme === "light") return "0,0,0";
    return "#000";
  };

  return (
    <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color={getCustomColor()}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </div>
  );
}


// const Cursor = () => {
//   const theme = useTheme();
//   const [mount, setMount] = useState();

//   const getCusomColor = () => {
//     if (theme.theme === "dark") {
//       return "#fff";
//     } else if (theme.theme === "light") {
//       return "#000";
//     }
//   };

//   useEffect(() => {
//     setMount(true);
//   }, []);
//   return (
//     <>
//       {mount && (
//         <CustomCursor
//           targets={[".link"]}
//           customClass="custom-cursor"
//           dimensions={30}
//           fill={getCusomColor()}
//           smoothness={{
//             movement: 0.2,
//             scale: 0.1,
//             opacity: 0.2,
//           }}
//           targetOpacity={0.5}
//           targetScale={2}
//         />
//       )}
//     </>
//   );
// };

// export default Cursor;
