export function analyzeIncident(text) {
  const risks = [];
  const errors = [];
  const suggestions = [];

  if (text.includes("独自") || text.includes("一个人")) {
    risks.push("独自下水，无同伴救援");
    errors.push("未遵守结伴而行原则");
    suggestions.push("始终与至少一人结伴，新手需有教练陪同");
  }
  if (text.includes("没穿") || text.includes("未穿")) {
    risks.push("未穿戴救生衣");
    errors.push("忽视基础防护装备");
    suggestions.push("无论水平高低，必须穿戴合规救生衣");
  }
  if (text.includes("风浪") || text.includes("浪大")) {
    risks.push("对水文条件判断不足");
    errors.push("未提前查看天气预报");
    suggestions.push("出发前确认风力、浪高，超过能力范围果断取消");
  }
  if (text.includes("离岸") || text.includes("划远")) {
    risks.push("离岸过远，体力透支");
    errors.push("未规划安全路线");
    suggestions.push("新手离岸不超过200米，规划往返路线并告知同伴");
  }
  if (text.includes("手机") || text.includes("联系")) {
    risks.push("通信手段不足");
    errors.push("未携带防水通信设备");
    suggestions.push("携带手机+哨子，告知亲友返航时间");
  }

  if (risks.length === 0) {
    risks.push("信息不足，可能存在未识别的风险");
    errors.push("事故描述过于简略，不利于复盘");
    suggestions.push("建议详细记录时间、地点、天气、装备、人员、经过");
  }

  return { risks, errors, suggestions };
}
