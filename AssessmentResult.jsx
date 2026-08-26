import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { getAlternativeAdvice } from "@/lib/riskEngine";

export default function AssessmentResult({ result, input }) {
  return (
    <div className="space-y-4">
      <Card className={result.score >= 60 ? "border-red-400" : result.score >= 30 ? "border-amber-400" : "border-emerald-400"}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            {result.score >= 60 ? <XCircle className="text-red-500" /> : result.score >= 30 ? <AlertTriangle className="text-amber-500" /> : <CheckCircle className="text-emerald-500" />}
            {result.recommendation}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-500 mb-3">综合风险分：{result.score}</p>
          <div className="space-y-2">
            {result.factors.map((f, i) => (
              <div key={i} className={`flex justify-between items-center p-2 rounded text-sm ${f.risk === "high" ? "bg-red-50 text-red-700" : "bg-amber-50 text-amber-700"}`}>
                <span>{f.name}</span>
                <span className="font-medium">{f.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100">
            <p className="text-xs font-medium text-slate-500 mb-2">风险等级划分</p>
            <div className="space-y-1 text-xs">
              <div className={`flex justify-between px-2 py-1 rounded ${result.score < 30 ? "bg-emerald-50 text-emerald-700 font-medium" : "text-slate-500"}`}>
                <span>低风险（建议下水）</span>
                <span>0 – 29 分</span>
              </div>
              <div className={`flex justify-between px-2 py-1 rounded ${result.score >= 30 && result.score < 60 ? "bg-amber-50 text-amber-700 font-medium" : "text-slate-500"}`}>
                <span>中风险（谨慎下水）</span>
                <span>30 – 59 分</span>
              </div>
              <div className={`flex justify-between px-2 py-1 rounded ${result.score >= 60 ? "bg-red-50 text-red-700 font-medium" : "text-slate-500"}`}>
                <span>高风险（不建议下水）</span>
                <span>60 分以上</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      {result.score >= 30 && (
        <Card className="bg-sky-50 border-sky-200">
          <CardHeader><CardTitle className="text-sky-800 text-base">替代训练建议</CardTitle></CardHeader>
          <CardContent><p className="text-sky-700 text-sm">{getAlternativeAdvice(input)}</p></CardContent>
        </Card>
      )}
    </div>
  );
}
