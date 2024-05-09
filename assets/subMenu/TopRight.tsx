import type { PropsSvg } from "@/shared/types/props";

const TopRight = ({ className }: PropsSvg) => (
  <svg
    className={className}
    width="23"
    height="24"
    viewBox="0 0 23 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23 0H0.333334L18.0109 5.04935L23 24V0Z"
      fill="url(#paint0_linear_102_13487)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_102_13487"
        x1="11.6667"
        y1="-1.7561"
        x2="11.6667"
        y2="25.1707"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F4E02B" />
        <stop offset="1" stopColor="#F48F6B" />
      </linearGradient>
    </defs>
  </svg>
);
export default TopRight;
