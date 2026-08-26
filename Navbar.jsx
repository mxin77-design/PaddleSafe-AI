import { Link, useLocation } from "react-router-dom";
import { navItems } from "@/nav-items";
import { Shield } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  if (location.pathname.startsWith("/admin")) return null;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-sky-700 shrink-0">
          <Shield className="w-6 h-6" />
          <span className="hidden sm:inline">桨板安全助手</span>
        </Link>
        <div className="flex gap-3 sm:gap-5 text-xs sm:text-sm font-medium overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-1 sm:gap-1.5 transition-colors whitespace-nowrap shrink-0 ${
                location.pathname === item.to ? "text-sky-700" : "text-slate-600 hover:text-sky-600"
              }`}
            >
              <span className="hidden sm:inline">{item.icon}</span>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
