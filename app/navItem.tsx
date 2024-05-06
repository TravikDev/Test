"use client";

import { rubik600 } from "@/styles/fonts";
import { PropsNav } from "@/types/props";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export default function NavItem({ item }: PropsNav) {
  const pathname = usePathname();

  return (
    <Link href={item.url}>
      <li
        className={twMerge(
          rubik600.className,
          "px-4 py-3 text-[16px] font-bold leading-[21.28px] transition ease-in hover:bg-background-details-active",
          pathname === item.url ? "bg-submenu-active" : "bg-submenu-inactive",
        )}
      >
        <p className="h-[21px] w-[199px]">{item.title}</p>
      </li>
    </Link>
  );
}
