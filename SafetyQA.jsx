import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen } from "lucide-react";

const qaData = [
  { q: "新手第一次下水需要注意什么？", a: "必须选择官方认证水域，穿戴救生衣和脚绳，避免独自下水，风力3级以下，有经验丰富者陪同。先在浅水区练习上下板和平衡。", source: "中国桨板运动安全白皮书" },
  { q: "哪些天气条件下绝对不能下水？", a: "雷电天气、风力6级以上、能见度低于200米、水温低于10°C且无湿衣、暴雨或冰雹天气。", source: "国家体育总局水上运动管理中心" },
  { q: "什么是脚绳（Leash）？为什么重要？", a: "脚绳是连接运动员脚踝与桨板的弹性绳索。落水时保证桨板不会漂走，是自救和避免撞击他人的关键装备。", source: "ISA国际冲浪协会安全规范" },
  { q: "夜间可以划桨板吗？", a: "不建议夜间下水。如必须夜划，需穿戴反光衣、携带灯光、组队进行，并提前向管理部门报备。", source: "地方水上运动管理条例" },
  { q: "落水后如何自救？", a: "保持冷静，抓住桨板，利用脚绳将板拉回身边。若被浪打翻，远离板头避免撞击，从板侧重新上板。", source: "红十字会水上救援指南" },
  { q: "如何选择合适的水域？", a: "优先选择有救生员、水质良好、水流平缓、船只少的官方水域。避开航道、闸口、施工区和养殖区。", source: "俱乐部安全管理规范" },
];

export default function SafetyQA() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(null);

  const filtered = query ? qaData.filter((d) => d.q.includes(query) || d.a.includes(query)) : qaData;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">合规与安全问答</h1>
      <div className="flex gap-2 mb-8">
        <Input placeholder="搜索安全问题，如“救生衣”“夜间”..." value={query} onChange={(e) => setQuery(e.target.value)} />
        <Button onClick={() => setQuery("")} variant="outline">重置</Button>
      </div>
      <div className="space-y-4">
        {filtered.map((item, idx) => (
          <Card key={idx} className="cursor-pointer hover:border-sky-300 transition-colors" onClick={() => setActive(active === idx ? null : idx)}>
            <CardHeader>
              <CardTitle className="text-base font-medium flex items-start gap-2">
                <BookOpen className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                {item.q}
              </CardTitle>
            </CardHeader>
            {active === idx && (
              <CardContent className="pt-0">
                <p className="text-slate-700 mb-3 leading-relaxed">{item.a}</p>
                <Badge variant="secondary" className="text-xs">来源：{item.source}</Badge>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
      {filtered.length === 0 && <p className="text-center text-slate-400 mt-8">未找到相关问题，试试其他关键词</p>}
    </div>
  );
}
