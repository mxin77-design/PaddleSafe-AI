import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { AlertTriangle, Lightbulb, CheckCircle } from "lucide-react";
import { analyzeIncident } from "@/lib/incidentAnalyzer";

export default function IncidentReview() {
  const [text, setText] = useState("");
  const [report, setReport] = useState(null);
  const [isPublic, setIsPublic] = useState(false);
  const [submissions, setSubmissions] = useState([]);

  const handleSubmit = () => {
    setReport(analyzeIncident(text));
    if (isPublic && text.trim()) {
      setSubmissions((prev) => [...prev, { id: Date.now(), content: text.trim() }]);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">危险复盘生成</h1>
      <Card className="mb-8">
        <CardHeader><CardTitle>描述你的经历</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="请描述事件经过，包括时间、地点、天气、人员、装备、发生了什么..."
            rows={6}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <Switch id="public" checked={isPublic} onCheckedChange={setIsPublic} />
              <Label htmlFor="public" className="cursor-pointer text-sm text-slate-700">匿名公开</Label>
            </div>
            <Button onClick={handleSubmit}>生成复盘报告</Button>
          </div>
        </CardContent>
      </Card>

      {report && (
        <div className="space-y-4">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800 text-base flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                风险点
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-red-700 space-y-1 text-sm">{report.risks.map((r, i) => <li key={i}>{r}</li>)}</ul>
            </CardContent>
          </Card>
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800 text-base flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                错误决策
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-amber-700 space-y-1 text-sm">{report.errors.map((r, i) => <li key={i}>{r}</li>)}</ul>
            </CardContent>
          </Card>
          <Card className="border-emerald-200 bg-emerald-50">
            <CardHeader>
              <CardTitle className="text-emerald-800 text-base flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                改进建议
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-emerald-700 space-y-1 text-sm">{report.suggestions.map((r, i) => <li key={i}>{r}</li>)}</ul>
            </CardContent>
          </Card>
        </div>
      )}

      {submissions.length > 0 && (
        <div className="mt-10 space-y-4">
          <h2 className="text-xl font-bold text-center text-slate-800">匿名公开复盘</h2>
          {submissions.map((sub) => (
            <Card key={sub.id} className="bg-slate-50 border-slate-200">
              <CardContent className="pt-6">
                <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap">{sub.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
