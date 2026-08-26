import { useState, useCallback } from "react";
import { fetchOpenMeteoWeather, reverseGeocode } from "@/lib/weather";

export function useWeather() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState(null);

  const fetchLocalWeather = useCallback(async () => {
    setLoading(true);
    setError(null);
    setCity(null);
    try {
      const position = await new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
          reject(new Error("浏览器不支持定位"));
          return;
        }
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: false,
          timeout: 10000,
        });
      });
      const { latitude, longitude } = position.coords;
      const [weather, locationName] = await Promise.all([
        fetchOpenMeteoWeather(latitude, longitude),
        reverseGeocode(latitude, longitude),
      ]);
      setCity(locationName);
      setLoading(false);
      return weather;
    } catch (err) {
      setError(err.message || "定位失败，请检查定位权限");
      setLoading(false);
      return null;
    }
  }, []);

  return { loading, error, city, fetchLocalWeather };
}
