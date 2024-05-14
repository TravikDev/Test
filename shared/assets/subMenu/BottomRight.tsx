import type { PropsSvg } from "@/shared/types/props";

export const BottomRight = ({ className, fill }: PropsSvg) => (
  <svg
    className={className}
    width="20"
    height="18"
    viewBox="0 0 20 18"
    fill={fill || "none"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 18H0.666666L15.4352 12.9527L20 0.666666V18Z"
      fill="url(#paint0_linear_102_13485)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_102_13485"
        x1="4.50266"
        y1="18.3611"
        x2="4.50266"
        y2="-1.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#E84A11" />
        <stop offset="1" stopColor="#F4E02B" />
      </linearGradient>
    </defs>
  </svg>
);