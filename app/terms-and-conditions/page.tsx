import { sofiaSans } from "@/styles/fonts";
import { twMerge } from "tailwind-merge";
import DetailsList from "./detailsCategoriesList";

export default function TermsAndConditions(props: any) {
  console.log(props);
  return (
    <>
      <h1
        className={twMerge(
          sofiaSans.className,
          "text-5xl leading-[57.6px] gap-6 min-h-[58px]"
        )}
      >
        Terms and Conditions
      </h1>

      <DetailsList />
    </>
  );
}
