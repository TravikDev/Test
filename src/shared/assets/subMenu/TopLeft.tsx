import type { PropsSvg } from "@/src/shared/types/props";

export const TopLeft = ({ className, fill }: PropsSvg) => (
  <svg
    className={className}
    width="18"
    height="27"
    viewBox="0 0 18 27"
    fill={fill || "none"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 0H17.3333L5.09804 5.38401L0 26.6667V0Z"
      fill="url(#paint0_linear_102_13486)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_102_13486"
        x1="8.66667"
        y1="-1.95122"
        x2="8.66667"
        y2="27.9675"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#F4E02B" />
        <stop offset="1" stopColor="#F48F6B" />
      </linearGradient>
    </defs>
  </svg>
);
