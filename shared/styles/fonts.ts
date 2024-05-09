import { Rubik, Sofia_Sans } from "next/font/google";

const rubik600 = Rubik({
  subsets: ["latin"],
  weight: "600",
  adjustFontFallback: false,
  // weight: ["600", "400"],
  // style: ["normal", "italic"],
  //   preload: true
});
const rubik400 = Rubik({
  subsets: ["latin"],
  weight: "400",
  adjustFontFallback: false,
});
const sofiaSans = Sofia_Sans({
  subsets: ["latin"],
  weight: "800",
  adjustFontFallback: false,
});
export { rubik400, rubik600, sofiaSans };
