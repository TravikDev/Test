import { TextWithBold } from "@/src/shared/utils/textWithBold";
import { rubik600 } from "@/src/shared/styles/fonts";
import { twMerge } from "tailwind-merge";
import type { PropsDetailsPointsList } from "@/src/shared/types/props";


export const DetailsPointsList = ({
  // id,
  title,
  bold,
  categoryIdx,
  pointIdx
}: PropsDetailsPointsList) => {
  return (
    <li className="flex min-h-8 pt-4">
      <p
        className={twMerge(
          rubik600.className,
          "top-2 ml-4 mr-5 w-5 text-base leading-4 text-details-enum",
        )}
      >
        {categoryIdx+1}.{pointIdx+1}
      </p>
      <p>
        <TextWithBold text={title} bold={bold} />
      </p>
    </li>
  );
}
