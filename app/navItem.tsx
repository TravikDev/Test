"use client";

import BottomLeft from "@/assets/subMenu/BottomLeft";
import BottomRight from "@/assets/subMenu/BottomRight";
import TopLeft from "@/assets/subMenu/TopLeft";
import TopRight from "@/assets/subMenu/TopRight";
import { rubik600 } from "@/shared/styles/fonts";
import { PropsNav } from "@/shared/types/props";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export default function NavItem({ item, idx, length }: PropsNav) {
  const pathname = usePathname();

  return (
    <Link href={item.url} className="z-10">
      <li
        className={twMerge(
          rubik600.className,
          "z-10 px-4 py-3 text-[16px] font-bold leading-[21.28px] transition ease-in hover:bg-background-details-active",
          pathname === item.url ? "bg-submenu-active" : "bg-submenu-inactive",
        )}
      >
        {idx === 0 && (
          <>
            <TopLeft className="absolute -left-[1px] -top-[1px]" />
            <TopRight className="absolute -right-[1px] -top-[1px]" />
          </>
        )}
        {idx === length && (
          <>
            <BottomLeft className="absolute -bottom-[1px] -left-[1px]" />
            <BottomRight className="absolute -bottom-[1px] -right-[1px]" />
          </>
        )}
        <p className="h-[21px] w-[199px]">{item.title}</p>
      </li>
    </Link>
  );
}
