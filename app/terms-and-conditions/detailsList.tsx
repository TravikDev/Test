import BottomLeft from "@/assets/details/BottomLeft";
import BottomRight from "@/assets/details/BottomRight";
import BottomRightInactive from "@/assets/details/BottomRightInactive";
import TopLeft from "@/assets/details/TopLeft";
import TopLeftInactive from "@/assets/details/TopLeftInactive";
import TopRight from "@/assets/details/TopRight";
import { rubik400, rubik600, sofiaSans } from "@/styles/fonts";
import { PropsDetailsList } from "@/types/props";
import { twMerge } from "tailwind-merge";

export default function DetailsList({ subItems }: PropsDetailsList) {
  return (
    <div className="flex flex-col gap-2">
      {subItems.map((item, idx) => (
        <details
          key={item.title}
          open={idx === 0 && item.title === "General Rules"}
          className="relative flex flex-col border-details-inactive border-[1px] border-opacity-15 p-5 open:px-6 bg-background-details-inactive open:bg-background-details-active open:border-details-active open:border-[3px] open:border-b-[6px] open:shadow-[rgba(232,74,17,0.5)_0px_4px_8px_0px] group"
        >
          <summary className="flex justify-between items-center cursor-pointer group-open:mb-4">
            <TopLeftInactive className="absolute top-[6px] left-[6px] group-open:hidden visible" />
            <BottomRightInactive className="absolute bottom-[6px] right-[6px] group-open:hidden visible" />
            <h3
              className={twMerge(sofiaSans.className, "text-[20px] leading-6")}
            >
              {item.title}
            </h3>

            <div className="flex justify-center items-center w-[15px] h-[15px] z-10 group-open:rotate-0 rotate-45">
              <div className="bg-white w-[18px] h-[1.5px] rotate-45 rounded absolute"></div>
              <div className="bg-white w-[18px] h-[1.5px] -rotate-45 rounded absolute"></div>
            </div>
          </summary>

          <TopLeft className="absolute top-0 left-0" fill="#F48F6B" />
          <TopRight className="absolute top-0 right-0" fill="#F48F6B" />
          <div className="flex flex-col gap-4 divide-y-[1px] divide-white divide-opacity-15">
            <p
              className={twMerge(
                rubik400.className,
                "text-base leading-[21.28px]"
              )}
            >
              {item.description}
            </p>
            <ol
              className={twMerge(
                rubik400.className,
                "flex flex-col text-sm leading-[18.62px] divide-y-[1px] divide-opacity-15 divide-white gap-4 mb-1"
              )}
            >
              <li className="flex min-h-8 pt-4">
                <p
                  className={twMerge(
                    rubik600.className,
                    "text-base leading-4 top-2 w-5 ml-4 mr-5 text-details-enum"
                  )}
                >
                  1.1
                </p>
                The first deposit&nbsp;
                <span
                  className={twMerge(
                    rubik600.className,
                    "text-sm leading-[18.62px]"
                  )}
                >
                  bonus is 100% up to €200 + 70 Free Spins
                </span>
                .
              </li>
              <li className="flex min-h-8 pt-4">
                <p
                  className={twMerge(
                    rubik600.className,
                    "text-base leading-4 top-2 w-5 ml-4 mr-5 text-details-enum"
                  )}
                >
                  1.2
                </p>
                To receive a&nbsp;
                <span
                  className={twMerge(
                    rubik600.className,
                    "text-sm leading-[18.62px]"
                  )}
                >
                  100% bonus
                </span>{" "}
                on the first deposit, players must deposit at least&nbsp;
                <span
                  className={twMerge(
                    rubik600.className,
                    "text-sm leading-[18.62px]"
                  )}
                >
                  €20
                </span>
                .
              </li>
              <li className="flex min-h-8 pt-4">
                <p
                  className={twMerge(
                    rubik600.className,
                    "text-base leading-4 top-2 w-5 ml-4 mr-5 text-details-enum"
                  )}
                >
                  1.3
                </p>
                To receive a&nbsp;
                <span
                  className={twMerge(
                    rubik600.className,
                    "text-sm leading-[18.62px]"
                  )}
                >
                  100% bonus and 70 Free Spins
                </span>{" "}
                on the first deposit, players need to make a&nbsp;
                <span
                  className={twMerge(
                    rubik600.className,
                    "text-sm leading-[18.62px]"
                  )}
                >
                  deposit of €50 or more
                </span>
                .
              </li>
            </ol>
          </div>

          <BottomLeft className="absolute bottom-0 left-0" fill="#F48F6B" />
          <BottomRight className="absolute bottom-0 right-0" fill="#F48F6B" />
          <div className="absolute h-[3px] w-calc-full-plus-6 bg-details-active-orange -bottom-[6px] -left-[3px]"></div>
        </details>
      ))}
    </div>
  );
}
