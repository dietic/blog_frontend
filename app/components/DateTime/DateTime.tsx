"use client";
import useTime from "@/app/hooks/useTime";
import { useEffect, useState } from "react";

export default function DateTime() {
  const { date } = useTime();
  console.log("date", date);
  return <div>{date}</div>;
}
