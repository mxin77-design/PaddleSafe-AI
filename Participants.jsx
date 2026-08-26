import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const participants = [
  { name: "张三", level: "beginner", hours: 5, cert: false },
  { name: "李四", level: "intermediate", hours: 30, cert: true },
  { name: "王五", level: "advanced", hours: 120, cert: true },
  { name: "赵六", level: "beginner", hours: 2, cert: false },
  { name: "孙七", level: "intermediate", hours: 45, cert: true },
];

function levelLabel(l) {
  return l === "beginner" ? "新手" : l === "intermediate" ? "进阶" : "高级";
}
function levelColor(l) {
  return l === "beginner" ? "bg-amber-100 text-amber-700 hover:bg-amber-100" : l === "intermediate" ? "bg-sky-100 text-sky-700 hover:bg-sky-100" : "bg-emerald-100 text-emerald-700 hover:bg-emerald-100";
}

export default function Participants() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">参与者能力分层</h1>
      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>姓名</TableHead>
                <TableHead>等级</TableHead>
                <TableHead>累计时长</TableHead>
                <TableHead>认证状态</TableHead>
                <TableHead>建议分组</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {participants.map((p, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{p.name}</TableCell>
                  <TableCell><Badge className={levelColor(p.level)}>{levelLabel(p.level)}</Badge></TableCell>
                  <TableCell>{p.hours} 小时</TableCell>
                  <TableCell>{p.cert ? <span className="text-emerald-600">已认证</span> : <span className="text-slate-400">未认证</span>}</TableCell>
                  <TableCell>{p.level === "beginner" ? "教练组" : p.level === "intermediate" ? "自由组（需报备）" : "领队组"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
