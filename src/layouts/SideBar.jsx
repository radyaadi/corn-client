import { NavLink } from "react-router-dom";
import { MENU_LIST } from "../constants/menu-list";

const SideBar = () => {
  return (
    <div className="fixed left-0 top-14 min-h-[calc(100vh-3.5rem)] w-[15rem] border border-r-2 border-b-gray-600 bg-white shadow-md">
      <ul className="mt-10">
        {MENU_LIST.map((menu, index) => {
          return (
            <NavLink key={index} to={menu.path}>
              {({ isActive }) => {
                return (
                  <li
                    className={`${
                      isActive
                        ? "bg-[#f65555] text-white"
                        : "hover:bg-[#f655554a] hover:text-[#f65555]"
                    } px-5 py-3 text-[1rem] duration-200 ease-in-out`}
                  >
                    {menu.name}
                  </li>
                );
              }}
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
