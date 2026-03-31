"use client";
import { useEffect, useState } from "react";

interface PastilleStatutProps {
  url: string;
  intervalMs?: number;
}

export default function PastilleStatut({ url, intervalMs = 60000 }: PastilleStatutProps) {
  const [statut, setStatut] = useState<"en-ligne" | "hors-ligne" | "inconnu">("inconnu");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let isMounted = true;
    const check = async () => {
      try {
        const res = await fetch(url, { method: "HEAD", mode: "no-cors" });
        if (isMounted) setStatut("en-ligne");
      } catch {
        if (isMounted) setStatut("hors-ligne");
      }
      timeout = setTimeout(check, intervalMs);
    };
    check();
    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, [url, intervalMs]);

  let color = "bg-gray-400", label = "Statut inconnu";
  if (statut === "en-ligne") {
    color = "bg-green-500";
    label = "Site en ligne";
  } else if (statut === "hors-ligne") {
    color = "bg-red-500";
    label = "Site hors ligne";
  }

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium text-white ${color}`}
      title={label}
      aria-label={label}
      style={{ minWidth: 90 }}
    >
      <span className="w-2 h-2 rounded-full bg-white/80 mr-1" style={{ backgroundColor: color.replace("bg-", "") }} />
      {label}
    </span>
  );
}
