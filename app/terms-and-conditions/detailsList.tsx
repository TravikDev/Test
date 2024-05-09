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
          className="group relative flex flex-col border-[1px] border-details-inactive border-opacity-15 py-5 bg-background-details-inactive transition duration-300 ease-out open:border-[3px] open:border-b-[6px] open:border-details-active open:bg-background-details-active open:px-6 open:shadow-[rgba(232,74,17,0.5)_0px_4px_8px_0px] hover:bg-background-details-active"
        >
          <summary className="flex cursor-pointer items-center justify-between group-open:px-0">
            <TopLeftInactive className="visible absolute left-[6px] top-[6px] group-open:hidden" />
            <BottomRightInactive className="visible absolute bottom-[6px] right-[6px] group-open:hidden" />
            <h3
              className={twMerge(sofiaSans.className, "text-[20px] leading-6")}
            >
              {item.title}
            </h3>

            <div className="z-10 flex h-[15px] w-[15px] rotate-45 items-center justify-center transition-transform duration-200 group-open:rotate-0">
              <div className="absolute h-[1.5px] w-[18px] rotate-45 rounded bg-white"></div>
              <div className="absolute h-[1.5px] w-[18px] -rotate-45 rounded bg-white"></div>
            </div>
          </summary>

          <TopLeft className="absolute left-0 top-0" fill="#F48F6B" />
          <TopRight className="absolute right-0 top-0" fill="#F48F6B" />
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
              <li className="flex min-h-8 pt-4">
                <p
                  className={twMerge(
                    rubik600.className,
                    "top-2 ml-4 mr-5 w-5 text-base leading-4 text-details-enum",
                  )}
                >
                  1.1
                </p>
                <p>
                  The first deposit&nbsp;
                  <span
                    className={twMerge(
                      rubik600.className,
                      "text-sm leading-[18.62px]",
                    )}
                  >
                    bonus is 100% up to €200 + 70 Free Spins
                  </span>
                  .
                </p>
              </li>
              <li className="flex min-h-8 pt-4">
                <p
                  className={twMerge(
                    rubik600.className,
                    "top-2 ml-4 mr-5 w-5 text-base leading-4 text-details-enum",
                  )}
                >
                  1.2
                </p>
                <p>
                  To receive a&nbsp;
                  <span
                    className={twMerge(
                      rubik600.className,
                      "text-sm leading-[18.62px]",
                    )}
                  >
                    100% bonus&nbsp;
                  </span>
                  on the first deposit, players must deposit at least&nbsp;
                  <span
                    className={twMerge(
                      rubik600.className,
                      "text-sm leading-[18.62px]",
                    )}
                  >
                    €20
                  </span>
                  .
                </p>
              </li>
              <li className="flex min-h-8 flex-row pt-4">
                <p
                  className={twMerge(
                    rubik600.className,
                    "top-2 ml-4 mr-5 w-5 text-base leading-4 text-details-enum",
                  )}
                >
                  1.3
                </p>
                <p>
                  To receive a&nbsp;
                  <span
                    className={twMerge(
                      rubik600.className,
                      "text-sm leading-[18.62px]",
                    )}
                  >
                    100% bonus and 70 Free Spins
                  </span>
                  &nbsp; on the first deposit, players need to make a&nbsp;
                  <span
                    className={twMerge(
                      rubik600.className,
                      "text-sm leading-[18.62px]",
                    )}
                  >
                    deposit of €50 or more
                  </span>
                  .
                </p>
              </li>
            </ol>
          </div>

          <BottomLeft className="absolute bottom-0 left-0" fill="#F48F6B" />
          <BottomRight className="absolute bottom-0 right-0" fill="#F48F6B" />
          <div className="absolute -bottom-[6px] -left-[3px] h-[3px] w-calc-full-plus-6 bg-details-active-orange"></div>
        </details>
      ))}
    </div>
  );
}
