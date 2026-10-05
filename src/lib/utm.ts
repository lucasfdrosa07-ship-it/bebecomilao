import { useEffect, useState } from "react";

// Repassa os parâmetros de rastreamento da URL atual (UTMs + fbclid) para os links de checkout.
const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "src",
  "sck",
];

export function withTrackingParams(url: string): string {
  if (typeof window === "undefined") return url;
  try {
    const current = new URLSearchParams(window.location.search);
    const target = new URL(url);
    for (const key of TRACKED_PARAMS) {
      const value = current.get(key);
      if (value && !target.searchParams.has(key)) {
        target.searchParams.set(key, value);
      }
    }
    return target.toString();
  } catch {
    return url;
  }
}

// Hook SSR-safe: renderiza a URL pura no servidor e, após a hidratação,
// atualiza o href com os parâmetros de rastreamento da URL atual.
export function useTrackedCheckoutUrl(url: string): string {
  const [tracked, setTracked] = useState(url);
  useEffect(() => {
    setTracked(withTrackingParams(url));
  }, [url]);
  return tracked;
}
