import BottomLeft from "@/assets/subMenu/BottomLeft";
import BottomRight from "@/assets/subMenu/BottomRight";
import TopLeft from "@/assets/subMenu/TopLeft";
import TopRight from "@/assets/subMenu/TopRight";
import NavItem from "./navItem";
import { subMenu } from "@/assets/data/submenu";

export default function NavList() {
  return (
    <nav className="visible relative h-fit border-[1px] border-white border-opacity-15 laptopmax:hidden">
      <TopLeft className="absolute -left-[1px] -top-[1px]" />
      <TopRight className="absolute -right-[1px] -top-[1px]" />
      <BottomLeft className="absolute -bottom-[1px] -left-[1px]" />
      <BottomRight className="absolute -bottom-[1px] -right-[1px]" />
      <ul className="divide-y-[1px] divide-white divide-opacity-15">
        {subMenu.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </ul>
    </nav>
  );
}
