"use client";

import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    window.location.href = "/auth/login";
  }, []);

  return <div>Nigga</div>;
}
