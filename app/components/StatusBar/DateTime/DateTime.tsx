"use client";
import useTime from "@/app/hooks/useTime";

export default function DateTime() {
  const { date } = useTime();
  return (
    <div className="relative cursor-pointer flex items-center">{date}</div>
  );
}
