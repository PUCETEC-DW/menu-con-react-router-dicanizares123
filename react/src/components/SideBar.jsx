import { Link, useLocation } from "react-router-dom";
import { FaHome, FaInfoCircle, FaCog, FaChartBar } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  const { pathname } = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/about", label: "Acerca de", icon: <FaInfoCircle /> },
    { path: "/dashboard", label: "Dashboard", icon: <FaChartBar /> },
    { path: "/settings", label: "Configuración", icon: <FaCog /> },
  ];

  return (
    <div className="sidebar">
      <ul>
        {navItems.map(({ path, label, icon }) => (
          <li key={path} className={pathname === path ? "active" : ""}>
            <Link to={path}>
              <span className="icon">{icon}</span>
              <span className="label">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
