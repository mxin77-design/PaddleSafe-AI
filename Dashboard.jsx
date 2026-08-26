import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, AlertTriangle, Users, CheckCircle } from "lucide-react";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">俱乐部仪表盘</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">今日活动</CardTitle>
            <Activity className="w-4 h-4 text-sky-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-slate-500">2场公开水域，1场泳池</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">待处理风险</CardTitle>
            <AlertTriangle className="w-4 h-4 text-amber-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-slate-500">滴水湖风力预报5级</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">参与者</CardTitle>
            <Users className="w-4 h-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-slate-500">新手8人，进阶12人，高级4人</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">合规率</CardTitle>
            <CheckCircle className="w-4 h-4 text-sky-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">96%</div>
            <p className="text-xs text-slate-500">较上周提升2%</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle>本周活动分布</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between text-sm"><span>周六 滴水湖</span><span className="text-amber-600 font-medium">待确认风力</span></div>
              <div className="flex justify-between text-sm"><span>周日 淀山湖</span><span className="text-emerald-600 font-medium">条件良好</span></div>
              <div className="flex justify-between text-sm"><span>周日 室内泳池</span><span className="text-sky-600 font-medium">已确认</span></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>快捷操作</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-slate-100 rounded text-sm">生成明日安全播报</div>
              <div className="p-3 bg-slate-100 rounded text-sm">导出本周合规检查表</div>
              <div className="p-3 bg-slate-100 rounded text-sm">发送新手安全须知</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
