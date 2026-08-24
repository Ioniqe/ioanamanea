import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export const NotFound = () => (
  <main
    className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-5 px-4 text-center"
    id="main-content"
  >
    <p className="text-primary-accessible text-sm font-semibold tracking-widest uppercase">
      404
    </p>
    <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
      This page doesn&apos;t exist
    </h1>
    <p className="text-muted-foreground leading-relaxed">
      The link may be broken, or the page may have moved.
    </p>
    <Button asChild>
      <Link to="/">Go home</Link>
    </Button>
  </main>
);
