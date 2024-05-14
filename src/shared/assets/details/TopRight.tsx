import type { PropsSvg } from "@/src/shared/types/props";

export const TopRight = ({ className, fill }: PropsSvg) => (
  <svg
    className={className}
    width="30"
    height="36"
    viewBox="0 0 30 36"
    fill={fill || "none"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.5"
      d="M30 0H0.666666L24.6964 5.35046L30 36V0Z"
      fill="#F48F6B"
    />
  </svg>
);
