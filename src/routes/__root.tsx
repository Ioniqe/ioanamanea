import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import { NotFound } from "@/components/not-found";
import { ThemeToggle } from "@/components/theme-toggle";
import { PROFILE, WEBSITE_URL } from "@/lib/data";

import appCss from "../styles/app.css?url";

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var isDark = stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", isDark);
  } catch (e) {}
})();
`;

const SITE_TITLE = `${PROFILE.name} — ${PROFILE.title}`;
const SITE_DESCRIPTION = `${PROFILE.name} — ${PROFILE.title}. Personal site and CV.`;
const SITE_IMAGE = `${WEBSITE_URL}${PROFILE.avatar}`;

const RootDocument = ({ children }: Readonly<{ children: ReactNode }>) => (
  <html lang="en">
    <head>
      {/* oxlint-disable-next-line react/no-danger */}
      <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      <HeadContent />
    </head>
    <body className="bg-background text-foreground">
      <a
        className="focus:bg-background focus:ring-ring sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-1/2 focus:z-30 focus:-translate-x-1/2 focus:rounded-md focus:px-4 focus:py-2 focus:ring-2"
        href="#main-content"
      >
        Skip to content
      </a>
      <div className="fixed top-4 right-4 z-20 print:hidden">
        <ThemeToggle />
      </div>
      {children}
      <Scripts />
    </body>
  </html>
);

const RootComponent = () => (
  <RootDocument>
    <Outlet />
  </RootDocument>
);

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: PROFILE.name },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:url", content: WEBSITE_URL },
      { property: "og:image", content: SITE_IMAGE },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: SITE_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
  }),
  notFoundComponent: NotFound,
  component: RootComponent,
});
