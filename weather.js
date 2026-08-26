// 将风速（km/h）转换为蒲福风级
export function kmToBeaufort(km) {
  if (km < 1) return 0;
  if (km < 6) return 1;
  if (km < 12) return 2;
  if (km < 20) return 3;
  if (km < 29) return 4;
  if (km < 39) return 5;
  if (km < 50) return 6;
  if (km < 62) return 7;
  if (km < 75) return 8;
  if (km < 89) return 9;
  if (km < 103) return 10;
  if (km < 118) return 11;
  return 12;
}

export async function fetchOpenMeteoWeather(latitude, longitude) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("天气数据获取失败");
  const data = await res.json();
  const { windspeed, temperature } = data.current_weather;
  return {
    windSpeed: kmToBeaufort(windspeed),
    temperature: Math.round(temperature),
  };
}

export async function reverseGeocode(latitude, longitude) {
  try {
    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=zh`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    return data.city || data.locality || data.principalSubdivision || null;
  } catch {
    return null;
  }
}
