import { ArrowDownToLine, ArrowUpRight } from 'lucide-react'

import { education, experience, projects, site } from '../../data/site'
import { Lines, Parallax, Reveal } from '../components/motion'

export function About() {
  return (
    <article className="mx-auto max-w-[1400px] px-5 pt-28 sm:px-8 sm:pt-36">
      <Lines as="h1" className="font-display text-balance text-[clamp(44px,7.5vw,112px)]" lines={['Web developer,', 'front to back']} />
      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
        <Reveal>
          <Parallax src="/images/portrait.jpg" alt={site.name} className="aspect-[3/4] rounded-image" strength={6} />
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="link-draw inline-flex items-center gap-1 text-muted hover:text-fg">
                  {s.label}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <div>
          <Reveal className="text-pretty text-[19px] leading-relaxed sm:text-[22px]">
            <p>
              I am a web developer in {site.location} with a Computer Science degree and a roundabout path here: four years of finance
              system support, a short stretch in QA, then building websites.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex flex-col gap-5 text-[17px] leading-relaxed text-muted">
            <p>
              Since 2022 I have worked on e-commerce at Vismay International Corporation, customizing Shopify themes with Liquid,
              JavaScript and CSS for Platinum Karaoke, GameXtreme and Whitehaus, and maintaining WordPress sites alongside them. On my own
              time I build React sites and small full-stack apps with Node, Express and MySQL.
            </p>
            <p>
              I like the unglamorous parts: making a layout hold together on a small phone, testing a change on a duplicate theme before it
              touches a live store, setting up a domain properly so a site stays up. I am currently going deeper into full-stack
              development — bigger APIs, better data modelling, more of the back end.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center gap-3">
            <a href={site.resume} download className="inline-flex h-12 items-center gap-2 rounded-[14px] bg-fg px-6 text-[15px] font-medium text-bg transition-colors hover:bg-[#2b2925]">
              <ArrowDownToLine className="size-4" />
              Download résumé
            </a>
            <a href={`mailto:${site.email}`} className="inline-flex h-12 items-center gap-2 rounded-[14px] border border-line-strong px-6 text-[15px] font-medium transition-colors hover:border-fg">
              Email me
              <ArrowUpRight className="size-4" />
            </a>
          </Reveal>

          <Reveal delay={0.15} className="mt-16">
            <h2 className="text-[14px] text-muted">Experience</h2>
            <ol className="mt-4 divide-y divide-line border-y border-line">
              {experience.map((e) => (
                <li key={e.title} className="grid gap-1 py-5 sm:grid-cols-[160px_1fr]">
                  <span className="text-[14px] tabular-nums text-faint">{e.period}</span>
                  <span>
                    <span className="block text-[16px] font-medium">{e.title}</span>
                    <span className="block text-[14.5px] text-muted">{e.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.18} className="mt-12">
            <h2 className="text-[14px] text-muted">Education</h2>
            <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2 border-t border-line pt-4">
              <span>
                <span className="block text-[16px] font-medium">{education.degree}</span>
                <span className="block text-[14.5px] text-muted">{education.school}</span>
              </span>
              <span className="text-[14px] tabular-nums text-faint">{education.period}</span>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-16 grid grid-cols-3 gap-6">
            {[
              ['11', 'years in IT'],
              [String(projects.length), 'projects shown'],
              ['4', 'companies'],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-[52px] leading-none sm:text-[72px]">{value}</p>
                <p className="mt-2 text-[14px] text-muted">{label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </article>
  )
}
