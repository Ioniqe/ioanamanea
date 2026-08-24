import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeftIcon, DownloadIcon, GlobeIcon } from "lucide-react";

import { GithubIcon, LinkedinMonogramIcon } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  EDUCATION,
  EXPERIENCE,
  LANGUAGES,
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

const Cv = () => (
  <>
    <nav
      aria-label="CV actions"
      className="fixed top-4 left-4 z-10 flex items-center gap-2 print:hidden"
    >
      <Button asChild size="icon-sm" variant="outline">
        <Link aria-label="Back to home" title="Back to home" to="/">
          <ArrowLeftIcon />
        </Link>
      </Button>
    </nav>

    <main
      className="mx-auto max-w-4xl px-4 py-16 sm:px-8 print:max-w-none print:p-0"
      id="main-content"
    >
      <header className="mb-10 flex flex-col items-center gap-4 text-center print:mb-4 print:flex-row print:items-center print:gap-3 print:text-left">
        <div className="bg-primary-accessible rounded-full p-1 print:p-0.5">
          <Avatar className="ring-background size-20 ring-2 print:size-14 print:ring-1">
            <AvatarImage alt={PROFILE.name} src={PROFILE.avatar} />
            <AvatarFallback className="text-xl print:text-base">
              {PROFILE.name
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>

        <div>
          <h1 className="font-heading text-3xl font-semibold tracking-tight print:text-xl">
            {PROFILE.name}
          </h1>
          <p className="text-primary-accessible mt-1 text-sm font-semibold tracking-widest uppercase print:mt-0 print:text-xs">
            {PROFILE.title}
          </p>
          <p className="text-muted-foreground mt-2 text-sm print:mt-0.5 print:text-xs">
            {PROFILE.location}
          </p>
          <div className="text-muted-foreground mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm print:mt-0.5 print:justify-start print:gap-x-3 print:text-xs">
            <a
              className="hover:text-primary-accessible inline-flex items-center gap-1.5 underline decoration-transparent transition-colors hover:decoration-current"
              href={WEBSITE_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <GlobeIcon className="size-3.5" />
              ioanamanea.net
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            {LINKS.map((link) => {
              const Icon = ICONS[link.icon as keyof typeof ICONS];
              return (
                <a
                  className="hover:text-primary-accessible inline-flex items-center gap-1.5 underline decoration-transparent transition-colors hover:decoration-current"
                  href={link.href}
                  key={link.name}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon className="size-3.5" />
                  {link.name}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              );
            })}
          </div>
        </div>

        <Button
          className="mt-2 h-14 px-8 text-base print:hidden"
          onClick={() => window.print()}
          size="lg"
        >
          <DownloadIcon className="size-5" />
          Download CV
        </Button>
      </header>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12 print:grid-cols-3 print:gap-6">
        <div className="space-y-10 lg:col-span-2 print:col-span-2 print:space-y-6">
          <section>
            <h2 className="font-heading border-primary-accessible mb-4 border-b-2 pb-2 text-lg font-semibold print:mb-2 print:[break-after:avoid] print:pb-1 print:text-base">
              Experience
            </h2>
            <div className="space-y-6 print:space-y-4">
              {EXPERIENCE.map((exp) => (
                <div className="print:[break-inside:avoid]" key={exp.id}>
                  <h3 className="font-medium print:text-sm">{exp.title}</h3>
                  <p className="text-muted-foreground text-sm print:text-xs">
                    <a
                      className="decoration-muted-foreground/50 hover:text-foreground underline"
                      href={exp.companyUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {exp.company}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </p>
                  <p className="text-muted-foreground mt-0.5 text-xs font-medium tracking-wide uppercase">
                    {exp.period} — {exp.location}
                  </p>
                  <ul className="text-muted-foreground mt-2 space-y-1.5 text-sm leading-relaxed print:text-xs">
                    {exp.description.map((item) => (
                      <li className="flex gap-2" key={item}>
                        <span className="bg-primary-accessible mt-1.5 size-1.5 shrink-0 rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-heading border-primary-accessible mb-4 border-b-2 pb-2 text-lg font-semibold print:mb-2 print:[break-after:avoid] print:pb-1 print:text-base">
              Education
            </h2>
            <div className="space-y-6 print:space-y-4">
              {EDUCATION.map((edu) => (
                <div className="print:[break-inside:avoid]" key={edu.degree}>
                  <h3 className="font-medium print:text-sm">{edu.degree}</h3>
                  <p className="text-muted-foreground text-sm print:text-xs">
                    {edu.university}
                  </p>
                  <p className="text-muted-foreground mt-0.5 text-xs font-medium tracking-wide uppercase">
                    {edu.period} — {edu.location}
                  </p>
                  {edu.achievements.length > 0 && (
                    <ul className="text-muted-foreground mt-2 space-y-1.5 text-sm leading-relaxed print:text-xs">
                      {edu.achievements.map((achievement) => (
                        <li className="flex gap-2" key={achievement}>
                          <span className="bg-primary-accessible mt-1.5 size-1.5 shrink-0 rounded-full" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-heading border-primary-accessible mb-4 border-b-2 pb-2 text-lg font-semibold print:mb-2 print:[break-after:avoid] print:pb-1 print:text-base">
              Personal projects I&apos;m currently working on
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((project) => (
                <div className="print:[break-inside:avoid]" key={project.id}>
                  <h3 className="font-medium print:text-sm">{project.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed print:text-xs">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-10 print:space-y-6">
          <section>
            <h2 className="font-heading border-primary-accessible mb-4 border-b-2 pb-2 text-lg font-semibold print:mb-2 print:[break-after:avoid] print:pb-1 print:text-base">
              Skills
            </h2>
            <div className="space-y-4">
              {Object.entries(SKILLS).map(([category, items]) => (
                <div className="print:[break-inside:avoid]" key={category}>
                  <h3 className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                    {category}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
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

          <section>
            <h2 className="font-heading border-primary-accessible mb-4 border-b-2 pb-2 text-lg font-semibold print:mb-2 print:[break-after:avoid] print:pb-1 print:text-base">
              Languages
            </h2>
            <p className="text-muted-foreground text-sm print:text-xs">
              {LANGUAGES.join(", ")}
            </p>
          </section>
        </div>
      </div>
    </main>
  </>
);

const CV_TITLE = `CV — ${PROFILE.name}`;
const CV_DESCRIPTION = `The CV of ${PROFILE.name}, ${PROFILE.title} — experience, education, skills and personal projects.`;
const CV_URL = `${WEBSITE_URL}/cv`;

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: CV_TITLE },
      { name: "description", content: CV_DESCRIPTION },
      { property: "og:title", content: CV_TITLE },
      { property: "og:description", content: CV_DESCRIPTION },
      { property: "og:url", content: CV_URL },
      { name: "twitter:title", content: CV_TITLE },
      { name: "twitter:description", content: CV_DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: CV_URL }],
  }),
  component: Cv,
});
