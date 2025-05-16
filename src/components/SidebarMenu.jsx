import { BsBarChartLine,BsGear,BsLayoutWtf } from "react-icons/bs";
import { Link } from "react-router-dom";

const pages = [
  {
    name: "Panel General",
    icon: <BsLayoutWtf />,
    to: "/"
  },
  {
    name: "Configuración",
    icon: <BsGear />,
    to: "/config"
  },
  {
    name: "Visualización",
    icon:<BsBarChartLine />,
    to: "/graphs"
  }
];

export default function SidebarMenu() {
  return (
    <aside className="w-50 h-screen bg-amber-200">
      <div className="w-full h-30 overflow-hidden flex justify-center">
        <img src="public\LOGO_PYMEX.svg" className="w-40"></img>
      </div>
      <hr/>
      <nav className="p-3 space-y-3">
        {pages.map((item, id) => (
          <Link
            key={id}
            to={item.to}
            className="flex items-center gap-2 w-full p-2 bg-white rounded hover:bg-amber-300 transition"
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}