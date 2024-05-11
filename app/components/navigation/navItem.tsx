"use client";

import Link from "next/link";
import BottomLeft from "@/shared/assets/subMenu/BottomLeft";
import BottomRight from "@/shared/assets/subMenu/BottomRight";
import TopLeft from "@/shared/assets/subMenu/TopLeft";
import TopRight from "@/shared/assets/subMenu/TopRight";
import { rubik600 } from "@/shared/styles/fonts";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import type { PropsNav } from "@/shared/types/props";

export default function NavItem({ item, idx, length }: PropsNav) {
  const pathname = usePathname();

  return (
    <Link href={item.url}>
      <div
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
        {idx === length - 1 && (
          <>
            <BottomLeft className="absolute -bottom-[1px] -left-[1px]" />
            <BottomRight className="absolute -bottom-[1px] -right-[1px]" />
          </>
        )}
        <p className="h-[21px] w-[199px]">{item.title}</p>
      </div>
    </Link>
  );
}
