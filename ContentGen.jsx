import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Copy } from "lucide-react";

const templates = [
  { type: "weather", title: "恶劣天气预警通知", content: "各位桨友，受台风外围影响，本周日风力预计达6级以上，所有公开水域活动取消。建议改为室内核心训练或理论课程。请大家相互转告，注意安全。" },
  { type: "beginner", title: "新手安全须知", content: "欢迎新伙伴加入！下水前请务必：1.穿戴救生衣和脚绳；2.结伴而行，禁止独自下水；3.选择风浪较小的浅水区；4.提前学习上下板动作；5.手机放入防水袋并告知亲友行程。" },
  { type: "incident", title: "事故警示通报", content: "近期某水域发生桨板漂流失联事件，原因：未佩戴脚绳、独自夜划、未报备行程。请各俱乐部引以为戒，严格落实装备检查和结伴制度。" },
];

export default function ContentGen() {
  const [type, setType] = useState("weather");
  const [content, setContent] = useState(templates[0].content);

  const handleGenerate = () => {
    const t = templates.find((x) => x.type === type);
    if (t) setContent(t.content);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">安全宣导内容生成</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader><CardTitle>生成设置</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">内容类型</label>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="weather">天气预警</SelectItem>
                  <SelectItem value="beginner">新手须知</SelectItem>
                  <SelectItem value="incident">事故警示</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleGenerate} className="w-full">生成内容</Button>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>生成结果</CardTitle>
            <Button size="sm" variant="ghost" onClick={() => navigator.clipboard.writeText(content)}>
              <Copy className="w-4 h-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <Textarea value={content} onChange={(e) => setContent(e.target.value)} rows={10} className="resize-none" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
