import { DetailsCategoriesList } from "@/app/_components/details/detailsCategoriesList";
import { sofiaSans } from "@/shared/styles/fonts";
import { twMerge } from "tailwind-merge";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Description",
};

export default function TermsAndConditions() {
  return (
    <>
      <h1
        className={twMerge(
          sofiaSans.className,
          "min-h-[58px] gap-6 text-5xl leading-[57.6px]",
        )}
      >
        Terms and Conditions
      </h1>

      <DetailsCategoriesList />
    </>
  );
}
