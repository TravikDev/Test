import { Rubik, Sofia_Sans } from "next/font/google";

const rubik600 = Rubik({ subsets: ["latin"], weight: ["600", "400"] });
const rubik400 = Rubik({ subsets: ["latin"], weight: "400" });
const sofiaSans = Sofia_Sans({ subsets: ["latin"], weight: ["800"] });
export { rubik400, rubik600, sofiaSans };
