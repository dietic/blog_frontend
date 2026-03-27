import { useEffect, useState } from "react";

export default function useTime() {
  const [date, setDate] = useState<string | null>("");
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  useEffect(() => {
    const interval = setInterval(
      () => setDate(new Date().toLocaleDateString("en-GB", options)),
      1000,
    );
    return () => clearInterval(interval);
  }, []);

  return { date };
}
