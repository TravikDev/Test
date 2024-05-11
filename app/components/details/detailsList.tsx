import BottomLeft from "@/shared/assets/details/BottomLeft";
import BottomRight from "@/shared/assets/details/BottomRight";
import BottomRightInactive from "@/shared/assets/details/BottomRightInactive";
import TopLeft from "@/shared/assets/details/TopLeft";
import TopLeftInactive from "@/shared/assets/details/TopLeftInactive";
import TopRight from "@/shared/assets/details/TopRight";
import DetailsPointsList from "./detailsPointsList";
import { rubik400, sofiaSans } from "@/shared/styles/fonts";
import { PropsDetailsList } from "@/shared/types/props";
import { twMerge } from "tailwind-merge";

export default function DetailsList({ subItems }: PropsDetailsList) {
  return (
    <div className="flex flex-col gap-2">
      {subItems.map((item, idx) => (
        <details
          key={item.title}
          open={idx === 0 && item.title === "General Rules"}
          className="group relative flex flex-col border-[1px] border-details-inactive border-opacity-15 bg-background-details-inactive py-0 transition duration-300 ease-out open:border-[3px] open:border-b-[6px] open:border-details-active open:bg-background-details-active open:px-6 open:py-5 open:shadow-[rgba(232,74,17,0.5)_0px_4px_8px_0px] hover:bg-background-details-active"
        >
          <summary className="flex cursor-pointer items-center justify-between p-5 group-open:mb-5 group-open:p-0">
            <TopLeftInactive className="visible absolute left-[6px] top-[6px] group-open:hidden" />
            <BottomRightInactive className="visible absolute bottom-[6px] right-[6px] group-open:hidden" />
            <h3
              className={twMerge(sofiaSans.className, "text-[20px] leading-6")}
            >
              {item.title}
            </h3>

            <span className="z-10 flex h-[15px] w-[15px] rotate-45 items-center justify-center transition-transform duration-200 group-open:rotate-0">
              <span className="absolute h-[1.5px] w-[18px] rotate-45 rounded bg-white"></span>
              <span className="absolute h-[1.5px] w-[18px] -rotate-45 rounded bg-white"></span>
            </span>
          </summary>

          <div className="flex flex-col gap-4 divide-y-[1px] divide-white divide-opacity-15">
            <p
              className={twMerge(
                rubik400.className,
                "text-base leading-[21.28px]",
              )}
            >
              {item.description}
            </p>
            <ol
              className={twMerge(
                rubik400.className,
                "mb-1 flex flex-col gap-4 divide-y-[1px] divide-white divide-opacity-15 text-sm leading-[18.62px]",
              )}
            >
              {item.list?.map((item, pointIdx) => (
                <DetailsPointsList
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  bold={item.bold}
                  categoryIdx={idx}
                  pointIdx={pointIdx}
                />
              ))}
            </ol>
          </div>

          <TopLeft className="absolute left-0 top-0" fill="#F48F6B" />
          <TopRight className="absolute right-0 top-0" fill="#F48F6B" />
          <BottomLeft className="absolute bottom-0 left-0" fill="#F48F6B" />
          <BottomRight className="absolute bottom-0 right-0" fill="#F48F6B" />
          <div className="absolute -bottom-[6px] -left-[3px] h-[3px] w-calc-full-plus-6 bg-details-active-orange"></div>
        </details>
      ))}
    </div>
  );
}
