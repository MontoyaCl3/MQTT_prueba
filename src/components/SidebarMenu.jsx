import { useState } from "react";
import { LuLayoutPanelLeft,LuSettings,LuChartColumn,LuArrowLeftToLine,LuArrowRightToLine } from "react-icons/lu";

const pages = [
  {
    name: "Panel General",
    icon: <LuLayoutPanelLeft />,
    to: "/"
  },
  {
    name: "Configuración",
    icon: <LuSettings />,
    to: "/"
  },
  {
    name: "Visualización",
    icon: <LuChartColumn />,
    to: "/"
  }
];



export default function SidebarMenu() {
  const [collapsed, setCollapsed] = useState();

  return (
    <aside
      className={`h-screen bg-amber-200 transition-all duration-300 flex flex-col ${
        collapsed ? "w-16" : "w-40"
      }`}
    >

      <div className="w-full h-30 overflow-hidden flex justify-center">
        <img src="public\LOGO_PYMEX.svg" className="w-40"></img>
      </div>

      {/* Menú */}
      <nav className="flex flex-col gap-2 px-2">
        {pages.map((item, id) => (
          <button
            key={id}
            className="flex items-center gap-2 p-2 bg-white rounded hover:bg-amber-300 transition"
          >
            {item.icon}
            {!collapsed && <span>{item.name}</span>}
          </button>
        ))}
      </nav>
      <div className="flex justify-end p-2">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-black hover:text-gray-700"
        >
          {collapsed ? <LuArrowRightToLine /> : <LuArrowLeftToLine />}
        </button>
      </div>
    </aside>
  );
}
