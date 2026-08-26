import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, ClipboardCheck, MessageSquare, FileText } from "lucide-react";

const features = [
  { title: "风险评估", desc: "基于天气、水域、装备多维智能分析", to: "/assessment", icon: Shield, color: "bg-sky-100 text-sky-700" },
  { title: "检查清单", desc: "下水前必备事项逐一确认", to: "/checklist", icon: ClipboardCheck, color: "bg-emerald-100 text-emerald-700" },
  { title: "安全问答", desc: "官方规则与安全知识库", to: "/qa", icon: MessageSquare, color: "bg-amber-100 text-amber-700" },
  { title: "危险复盘", desc: "自动分析风险点与改进建议", to: "/review", icon: FileText, color: "bg-rose-100 text-rose-700" },
];

export default function Index() {
  return (
    <div>
      <section className="relative bg-sky-900 text-white py-20 overflow-hidden">
        <img
          src="https://nocode.meituan.com/photo/search?keyword=paddleboard,lake&width=1200&height=400"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">桨板安全与合规助手</h1>
          <p className="text-xl text-sky-100 mb-8">PaddleSafe AI · 智能风险评估 · 专业安全指南 · 全程合规保障</p>
          <div className="flex justify-center gap-4">
            <Link to="/assessment" className="bg-white text-sky-900 px-6 py-3 rounded-lg font-semibold hover:bg-sky-50 transition">
              立即评估
            </Link>
            <Link to="/qa" className="bg-sky-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-700 transition">
              安全问答
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-12">核心功能</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <Link key={f.to} to={f.to}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className={`w-12 h-12 rounded-full ${f.color} flex items-center justify-center mb-4`}>
                    <f.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-slate-500 text-sm">{f.desc}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">为什么安全评估很重要？</h3>
            <ul className="space-y-3 text-slate-600">
              <li>· 80% 的桨板事故与忽视天气和装备检查有关</li>
              <li>· 官方场地配备救援，能大幅降低风险</li>
              <li>· 结伴而行是水上运动的第一安全准则</li>
              <li>· 下水前检查清单是专业玩家的标配习惯</li>
            </ul>
          </div>
          <img
            src="https://nocode.meituan.com/photo/search?keyword=paddleboard,safety,equipment&width=600&height=400"
            alt=""
            className="mx-auto object-cover rounded-xl shadow-lg w-full"
          />
        </div>
      </section>
    </div>
  );
}
