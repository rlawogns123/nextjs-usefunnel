"use client";

import { useEffect, useState } from "react";

import Signup from "@/components/Signup";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return <main>{isMounted ? <Signup /> : null}</main>;
}
