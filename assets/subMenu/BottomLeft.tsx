import type { PropsSvg } from "@/shared/types/props";

const BottomLeft = ({ className }: PropsSvg) => (
  <svg
    className={className}
    width="32"
    height="20"
    viewBox="0 0 32 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 20H31.3333L5.03571 13.5185L0 0V20Z"
      fill="url(#paint0_linear_102_13484)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_102_13484"
        x1="25.1164"
        y1="20.4167"
        x2="25.1164"
        y2="-2.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#E84A11" />
        <stop offset="1" stopColor="#F4E02B" />
      </linearGradient>
    </defs>
  </svg>
);
export default BottomLeft;
