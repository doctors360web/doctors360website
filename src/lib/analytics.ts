const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

export function initGA() {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false,
  });
}

export function pageview(url: string, title?: string) {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || !window.gtag) return;
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_location: url,
    page_title: title,
    send_page_view: true,
  });
}

export function trackEvent(action: string, params?: Record<string, unknown>) {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', action, params);
}
