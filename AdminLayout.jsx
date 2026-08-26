import { Link, Outlet, useLocation } from "react-router-dom";
import { LayoutDashboard, FileBarChart, ClipboardCheck, Users, FileText } from "lucide-react";

const adminNav = [
  { title: "仪表盘", to: "/admin", icon: LayoutDashboard },
  { title: "每日播报", to: "/admin/daily-report", icon: FileBarChart },
  { title: "合规检查", to: "/admin/compliance", icon: ClipboardCheck },
  { title: "参与者分层", to: "/admin/participants", icon: Users },
  { title: "内容生成", to: "/admin/content", icon: FileText },
];

export default function AdminLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shrink-0">
        <div className="p-6 font-bold text-white text-lg flex items-center gap-2">
          <LayoutDashboard className="w-6 h-6" />
          B端后台
        </div>
        <nav className="flex-1 px-4 space-y-2">
          {adminNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                location.pathname === item.to ? "bg-sky-600 text-white" : "hover:bg-slate-800"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.title}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
