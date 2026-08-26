export function calculateRisk(input) {
  let score = 0;
  const factors = [];

  if (input.windSpeed >= 7) {
    score += 30;
    factors.push({ name: "风力过大", value: input.windSpeed + "级", risk: "high" });
  } else if (input.windSpeed >= 5) {
    score += 15;
    factors.push({ name: "风力较强", value: input.windSpeed + "级", risk: "medium" });
  }

  if (input.waterTemp < 15) {
    score += 20;
    factors.push({ name: "天气温度较低", value: input.waterTemp + "°C", risk: "medium" });
  }
  if (input.hasRain) {
    score += 15;
    factors.push({ name: "降雨天气", value: "有雨", risk: "medium" });
  }
  if (!input.isOfficialSite) {
    score += 10;
    factors.push({ name: "非官方场地", value: "未认证", risk: "medium" });
  }
  if (!input.hasRescue) {
    score += 10;
    factors.push({ name: "无救援条件", value: "无", risk: "medium" });
  }
  if (input.isNight) {
    score += 25;
    factors.push({ name: "夜间活动", value: "夜间", risk: "high" });
  }

  if (input.isSolo && input.experienceLevel === "beginner") {
    score += 25;
    factors.push({ name: "新手独自下水", value: "单人", risk: "high" });
  } else if (input.isSolo) {
    score += 10;
    factors.push({ name: "独自下水", value: "单人", risk: "medium" });
  }

  if (!input.hasLifeJacket) {
    score += 25;
    factors.push({ name: "未穿救生衣", value: "无", risk: "high" });
  }
  if (!input.hasLeash) {
    score += 15;
    factors.push({ name: "无脚绳", value: "无", risk: "medium" });
  }
  if (input.experienceLevel === "beginner") {
    score += 10;
    factors.push({ name: "经验不足", value: "新手", risk: "medium" });
  }

  let recommendation;
  if (score >= 60) recommendation = "不建议下水";
  else if (score >= 30) recommendation = "谨慎下水";
  else recommendation = "建议下水";

  return { score, factors, recommendation };
}

export function getAlternativeAdvice(input) {
  if (input.windSpeed >= 6)
    return "今天风力较大，建议进行陆地平衡训练：单脚站立、平衡板练习、瑜伽战士式、深蹲单腿稳定。";
  if (input.hasRain)
    return "雨天不适合下水，建议进行核心力量训练：平板支撑、俄罗斯转体、死虫式、侧桥支撑。";
  if (!input.hasLifeJacket || !input.hasLeash)
    return "装备不齐，建议进行划桨动作练习：陆上模拟划桨、肩部柔韧性训练、弹力带拉桨。";
  if (input.isNight)
    return "夜间能见度低，建议进行体能储备：慢跑、游泳、拉伸放松、观看教学视频。";
  if (input.waterTemp < 15)
    return "水温较低，建议在室内进行模拟器训练或泳池适应性训练。";
  return "水域条件一般，可以在室内进行瑜伽、普拉提或力量训练，保持身体状态。";
}
