import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { LifeBuoy, Anchor, Radio, Sun } from "lucide-react";

const categories = [
  { title: "必备装备", icon: LifeBuoy, items: ["救生衣（合身且扣好）", "脚绳（Leash）", "桨板及尾鳍完好", "桨无裂痕"] },
  { title: "安全确认", icon: Anchor, items: ["确认水域为官方/开放场地", "了解进出水点", "确认有救援电话或人员", "告知亲友下水计划和返航时间"] },
  { title: "通信与健康", icon: Radio, items: ["手机放入防水袋并充满电", "携带哨子或荧光棒", "涂抹防晒霜", "确认身体状态良好（无饮酒/疲劳）"] },
  { title: "环境观察", icon: Sun, items: ["确认风向风力", "观察水流和潮汐", "避开船只航道", "确认离岸距离在安全范围"] },
];

export default function Checklist() {
  const [checked, setChecked] = useState(new Set());
  const toggle = (id) => {
    const next = new Set(checked);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setChecked(next);
  };
  const total = categories.reduce((sum, c) => sum + c.items.length, 0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-center">下水前检查清单</h1>
      <p className="text-center text-slate-500 mb-8">已完成 {checked.size} / {total} 项</p>
      <div className="space-y-6">
        {categories.map((cat) => (
          <Card key={cat.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <cat.icon className="w-5 h-5 text-sky-600" />
                {cat.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {cat.items.map((item, idx) => {
                const id = cat.title + idx;
                return (
                  <div key={id} className="flex items-center gap-3">
                    <Checkbox id={id} checked={checked.has(id)} onCheckedChange={() => toggle(id)} />
                    <label htmlFor={id} className={checked.has(id) ? "line-through text-slate-400" : "text-slate-700"}>
                      {item}
                    </label>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        ))}
      </div>
      {checked.size === total && (
        <div className="mt-8 p-4 bg-emerald-50 text-emerald-700 rounded-lg text-center font-medium">
          所有检查项已完成，祝下水愉快，安全第一！
        </div>
      )}
    </div>
  );
}
