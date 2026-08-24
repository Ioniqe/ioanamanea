import { createFileRoute, Link } from "@tanstack/react-router";

import { GithubIcon, LinkedinMonogramIcon } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  ABOUT,
  LINKS,
  PROFILE,
  PROJECTS,
  SKILLS,
  WEBSITE_URL,
} from "@/lib/data";

const ICONS = {
  github: GithubIcon,
  linkedin: LinkedinMonogramIcon,
};

const Home = () => {
  const nameParts = PROFILE.name.split(" ");
  const firstName = nameParts.slice(0, -1).join(" ");
  const lastName = nameParts.at(-1);

  return (
    <main
      className="mx-auto max-w-3xl space-y-10 px-4 py-16 sm:px-6 sm:py-20"
      id="main-content"
    >
      <header className="mx-auto flex max-w-xl flex-col items-center text-center">
        <div className="bg-primary-accessible mb-5 rounded-full p-[6px]">
          <Avatar className="ring-background size-32 ring-2 sm:size-36">
            <AvatarImage alt={PROFILE.name} src={PROFILE.avatar} />
            <AvatarFallback className="text-2xl">
              {PROFILE.name
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="mb-3">
          <h1 className="font-heading text-4xl font-normal tracking-tight sm:text-5xl">
            {firstName} <span className="font-bold">{lastName}</span>
          </h1>
          <p className="text-primary-accessible mt-2 text-sm font-semibold tracking-widest uppercase">
            {PROFILE.title}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {LINKS.map((link) => {
            const Icon = ICONS[link.icon as keyof typeof ICONS];
            return (
              <a
                aria-label={link.name}
                className="border-border bg-background text-muted-foreground hover:text-foreground hover:border-primary-accessible flex size-9 items-center justify-center rounded-full border transition-colors"
                href={link.href}
                key={link.name}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon className="size-4" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            );
          })}
        </div>
      </header>

      <section className="text-center">
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          {ABOUT.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <Link
          className="border-primary-accessible text-foreground hover:text-primary-accessible mt-6 inline-block border-b-2 pb-1 text-sm font-semibold tracking-widest uppercase transition-colors"
          to="/cv"
        >
          Review my CV
        </Link>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading border-b pb-2 text-xl font-semibold">
          Personal projects I&apos;m currently working on
        </h2>
        <div className="space-y-4">
          {PROJECTS.map((project) => (
            <div key={project.id}>
              <h3 className="font-medium">
                {project.url ? (
                  <a
                    className="hover:text-primary-accessible underline decoration-transparent transition-colors hover:decoration-current"
                    href={project.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {project.name}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading border-b pb-2 text-xl font-semibold">
          Skills
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div className="space-y-2" key={category}>
              <h3 className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: `${WEBSITE_URL}/` }],
  }),
  component: Home,
});
