import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SITE } from "@/data/site";
import appCss from "../styles.css?url";

const APP_NAME = "Rom Lee Music";
const OG = SITE.shareImage;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Rom Lee Music (także Leszek) — Lieder von Liebe, Hoffnung, Heimat und Frieden. Prof. Dr. Roman Leischik. Hagen / Portocolom.",
      },
      { name: "theme-color", content: "#c45a18" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "image_src", href: OG },
    ],
  }),
  component: () => (
    <html lang="de" className="antialiased" suppressHydrationWarning>
      <head>
        <meta property="og:title" content={APP_NAME} />
        <meta property="og:description" content={SITE.shareText} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE.shareUrl} />
        <meta property="og:site_name" content={APP_NAME} />
        <meta property="og:image" content={OG} />
        <meta property="og:image:secure_url" content={OG} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Sonnenuntergang Portocolom — Rom Lee Music" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={APP_NAME} />
        <meta name="twitter:description" content={SITE.shareText} />
        <meta name="twitter:image" content={OG} />
        <link rel="image_src" href={OG} />
        <HeadContent />
      </head>
      <body className="bg-bg text-fg">
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
