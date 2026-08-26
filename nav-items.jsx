import { Home, Shield, ClipboardCheck, MessageSquare, FileText } from "lucide-react";

export const navItems = [
  { title: "首页", to: "/", icon: <Home className="h-4 w-4" /> },
  { title: "风险评估", to: "/assessment", icon: <Shield className="h-4 w-4" /> },
  { title: "检查清单", to: "/checklist", icon: <ClipboardCheck className="h-4 w-4" /> },
  { title: "安全问答", to: "/qa", icon: <MessageSquare className="h-4 w-4" /> },
  { title: "危险复盘", to: "/review", icon: <FileText className="h-4 w-4" /> },
];
