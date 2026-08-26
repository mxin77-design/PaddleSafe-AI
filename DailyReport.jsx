import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wind, Thermometer, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const reports = [
  { area: "滴水湖", wind: "东南风4-5级", temp: "26°C", vis: "良好", level: "medium", reason: "下午风力可能增强至5级，新手建议改期" },
  { area: "淀山湖", wind: "东北风3级", temp: "25°C", vis: "良好", level: "low", reason: "条件适宜，注意防晒" },
  { area: "黄浦江", wind: "南风5-6级", temp: "27°C", vis: "一般", level: "high", reason: "风浪较大，禁止新手下水，进阶以上需组队" },
];

export default function DailyReport() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">每日水域风险播报</h1>
      <div className="space-y-4">
        {reports.map((r) => (
          <Card key={r.area} className={r.level === "high" ? "border-red-300" : r.level === "medium" ? "border-amber-300" : "border-emerald-300"}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{r.area}</span>
                <Badge className={r.level === "high" ? "bg-red-100 text-red-700 hover:bg-red-100" : r.level === "medium" ? "bg-amber-100 text-amber-700 hover:bg-amber-100" : "bg-emerald-100 text-emerald-700 hover:bg-emerald-100"}>
                  {r.level === "high" ? "高风险" : r.level === "medium" ? "中风险" : "低风险"}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-6 text-sm text-slate-600">
              <span className="flex items-center gap-1"><Wind className="w-4 h-4" />{r.wind}</span>
              <span className="flex items-center gap-1"><Thermometer className="w-4 h-4" />{r.temp}</span>
              <span className="flex items-center gap-1"><Eye className="w-4 h-4" />能见度{r.vis}</span>
              <span className="w-full text-slate-500 mt-1">建议：{r.reason}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
