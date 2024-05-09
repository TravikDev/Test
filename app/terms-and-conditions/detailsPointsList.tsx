import { TextWithBold } from "@/shared/utils/textWithBold";
import { rubik600 } from "@/styles/fonts";
import { PropsDetailsPointsList } from "@/types/props";
import { twMerge } from "tailwind-merge";

export default function DetailsPointsList({
  id,
  title,
  bold,
}: PropsDetailsPointsList) {
  return (
    <li className="flex min-h-8 pt-4">
      <p
        className={twMerge(
          rubik600.className,
          "top-2 ml-4 mr-5 w-5 text-base leading-4 text-details-enum",
        )}
      >
        {id}
      </p>
      <p>
        <TextWithBold text={title} bold={bold} />
      </p>
    </li>
  );
}
