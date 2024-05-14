import { subMenu } from "@/src/shared/data/submenu";
import { NavItem } from "./navItem";

export const NavList = () => {
  return (
    <nav className="visible relative h-fit border-[1px] border-white border-opacity-15 laptopmax:hidden">
        {subMenu.map((item, idx) => (
          <NavItem
            key={item.title}
            item={item}
            idx={idx}
            length={subMenu.length}
          />
        ))}
    </nav>
  );
}
