import BottomLeft from "@/assets/subMenu/BottomLeft";
import BottomRight from "@/assets/subMenu/BottomRight";
import TopLeft from "@/assets/subMenu/TopLeft";
import TopRight from "@/assets/subMenu/TopRight";
import NavItem from "./navItem";
import { subMenu } from "@/assets/data/submenu";

export default function NavList() {
  return (
    <nav className="visible relative h-fit border-[1px] border-white border-opacity-15 laptopmax:hidden">
      <ul className="divide-y-[1px] divide-white divide-opacity-15">
        {subMenu.map((item, idx) => (
          <NavItem
            key={item.title}
            item={item}
            idx={idx}
            length={subMenu.length - 1}
          />
        ))}
      </ul>
    </nav>
  );
}
