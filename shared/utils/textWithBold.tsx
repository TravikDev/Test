import { rubik400, rubik600 } from "@/shared/styles/fonts";
import { PropsBoldText } from "@/shared/types/props";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

export const TextWithBold = ({ text, bold }: PropsBoldText) => {
  let parts = [text];

  bold.forEach((boldPart) => {
    const index = parts.findIndex((part) => part.includes(boldPart));
    const before = parts[index].split(boldPart)[0];
    const after = parts[index].split(boldPart)[1];
    parts.splice(index, 1, before, boldPart, after);
  });

  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={index}>
          {bold.includes(part) ? (
            <strong
              key={index}
              className={twMerge(
                bold.includes(part) ? rubik600.className : rubik400.className,
              )}
            >
              {part}
            </strong>
          ) : (
            <>{part}</>
          )}
        </Fragment>
      ))}
    </>
  );
};
