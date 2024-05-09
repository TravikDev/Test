import { sofiaSans } from "@/shared/styles/fonts";
import { twMerge } from "tailwind-merge";
import DetailsCategoriesList from "../terms-and-conditions/detailsCategoriesList";

export default function ContactUs() {
  return (
    <>
      <h1
        className={twMerge(
          sofiaSans.className,
          "min-h-[58px] gap-6 text-5xl leading-[57.6px]",
        )}
      >
        Contact Us
      </h1>

      <DetailsCategoriesList />
    </>
  );
}
