import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { calculateRisk } from "@/lib/riskEngine";
import { useWeather } from "@/hooks/useWeather";
import AssessmentResult from "@/components/AssessmentResult";

export default function Assessment() {
  const [input, setInput] = useState({
    windSpeed: 3, waterTemp: 22, hasRain: false, isOfficialSite: true,
    hasRescue: true, isNight: false, isSolo: false,
    experienceLevel: "beginner", hasLifeJacket: true, hasLeash: true,
  });
  const [result, setResult] = useState(null);
  const { loading, error, city, fetchLocalWeather } = useWeather();
  const update = (k, v) => setInput((p) => ({ ...p, [k]: v }));

  const handleFetchWeather = async () => {
    const weather = await fetchLocalWeather();
    if (weather) {
      setInput((p) => ({
        ...p,
        windSpeed: weather.windSpeed,
        waterTemp: weather.temperature,
      }));
    }
  };

  const switches = [
    ["降雨", "hasRain", input.hasRain],
    ["夜间", "isNight", input.isNight],
    ["单人", "isSolo", input.isSolo],
    ["官方场地", "isOfficialSite", input.isOfficialSite],
    ["有救援", "hasRescue", input.hasRescue],
    ["救生衣", "hasLifeJacket", input.hasLifeJacket],
    ["脚绳", "hasLeash", input.hasLeash],
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">下水风险评估</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader><CardTitle>环境与装备</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div><Label>风力（级）</Label><Input type="number" value={input.windSpeed} onChange={(e) => update("windSpeed", +e.target.value)} /></div>
              <div><Label>天气温度（°C）</Label><Input type="number" value={input.waterTemp} onChange={(e) => update("waterTemp", +e.target.value)} /></div>
            </div>
            <Button
              variant="outline"
              className="w-full"
              onClick={handleFetchWeather}
              disabled={loading}
            >
              <MapPin className="w-4 h-4 mr-2" />
              {loading ? "正在定位并获取天气..." : "获取当前位置天气"}
            </Button>
            {city && <p className="text-xs text-emerald-600">已定位：{city}</p>}
            {error && <p className="text-xs text-red-500">{error}</p>}
            <div>
              <Label>经验水平</Label>
              <Select value={input.experienceLevel} onValueChange={(v) => update("experienceLevel", v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">新手</SelectItem>
                  <SelectItem value="intermediate">进阶</SelectItem>
                  <SelectItem value="advanced">高级</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {switches.map(([label, key, val]) => (
                <div key={key} className="flex items-center justify-between py-1">
                  <Label className="cursor-pointer">{label}</Label>
                  <Switch checked={val} onCheckedChange={(v) => update(key, v)} />
                </div>
              ))}
            </div>
            <Button className="w-full bg-sky-600 hover:bg-sky-700" onClick={() => setResult(calculateRisk(input))}>
              开始评估
            </Button>
          </CardContent>
        </Card>

        {result && <AssessmentResult result={result} input={input} />}
      </div>
    </div>
  );
}
