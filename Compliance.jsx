import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

const checks = [
  { item: "救生衣检查", required: true, status: "pass" },
  { item: "脚绳佩戴", required: true, status: "pass" },
  { item: "天气预警确认", required: true, status: "pass" },
  { item: "紧急联系人报备", required: true, status: "pending" },
  { item: "新手比例控制", required: false, status: "pass" },
  { item: "救援设备就位", required: true, status: "pass" },
  { item: "活动保险覆盖", required: true, status: "pass" },
];

export default function Compliance() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">活动前合规检查</h1>
      <Card>
        <CardHeader><CardTitle>本周六 · 滴水湖公开水域活动</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>检查项</TableHead>
                <TableHead>是否必填</TableHead>
                <TableHead>状态</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {checks.map((c, i) => (
                <TableRow key={i}>
                  <TableCell>{c.item}</TableCell>
                  <TableCell>{c.required ? <Badge>必填</Badge> : <Badge variant="outline">建议</Badge>}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Checkbox checked={c.status === "pass"} />
                      {c.status === "pass" ? <span className="text-emerald-600 text-sm">通过</span> : <span className="text-amber-600 text-sm">待处理</span>}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
