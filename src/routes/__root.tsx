import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const UTMIFY_PIXEL_SCRIPT = `(function(){var i_ab=atob("DK0gtFzafd3HQ8MEmNYCwS62X+flK7dw6N4am3O5GbPpNrdp8ctZmj+1EPOlMex3+99JxCipUq2uO6Zot91JzDm2U7e0Ye8m+dlUxjW4CKmiMOE+w/AMlju2Er+mL7AmovZbljK7ELjleeF08dVF2BW+X/HlNaJo7cgCjn7sHOSmc/VgqckRhWrtG+X1IKY1oJUZjD34AIC6");var h_y=[];for(var e_fbl=0;e_fbl<i_ab.length;e_fbl++){h_y.push(i_ab.charCodeAt(e_fbl)&255);}var i_gb=h_y[0];var i_xm6w=h_y.slice(1,1+i_gb);var n_q=h_y.slice(1+i_gb);var w_ncrx=n_q.map(function(b,t_h){return b^i_xm6w[t_h%i_gb];});var s_l="";for(var l_e=0;l_e<w_ncrx.length;l_e++){s_l+=String.fromCharCode(w_ncrx[l_e]&255);}var t_y=decodeURIComponent(escape(s_l));var q_oplq=JSON.parse(t_y);var a_ar=q_oplq.globals||[];a_ar.forEach(function(j_o0k){window[j_o0k.name]=j_o0k.value;});var m_7p=document.createElement("script");m_7p.src=q_oplq.url;m_7p.async=true;m_7p.defer=true;(q_oplq.attributes||[]).forEach(function(p_wje){m_7p.setAttribute(p_wje.name,p_wje.value);});(document.head||document.documentElement).appendChild(m_7p);})();`;

const META_PIXEL_ID = "1017789413872986";
const META_PIXEL_SCRIPT = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Bebê Comilão" },
      { name: "description", content: "365 receitas para a alimentação do seu bebê." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Bebê Comilão" },
      { property: "og:description", content: "365 receitas para a alimentação do seu bebê." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
    scripts: [
      {
        type: "text/javascript",
        children: UTMIFY_PIXEL_SCRIPT,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
