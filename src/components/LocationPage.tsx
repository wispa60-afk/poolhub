import type { ReactNode } from "react"
import { getAllArticles } from "@/lib/articles"
import { ArticleCard } from "@/components/ArticleCard"
import { LocalTradies } from "@/components/LocalTradies"

interface LocationPageProps {
  city: string
  state: string
  costRange: string
  tips: string
  children?: ReactNode
}

export async function LocationPage({ city, state, costRange, tips, children }: LocationPageProps) {
  const articles = (await getAllArticles()).slice(0, 3)
  const place = city === "Gold Coast" ? "on the Gold Coast" : `in ${city}`
  const quoteUrl = `https://tradihubai.com.au/jobs/new?trade=pool-building&ref=poolhub-${city.toLowerCase().replace(/\s+/g, "-")}`

  return (
    <>
      {/* Hero */}
      <section className="mb-10">
        <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Pool Builders {place}{" "}
          <span style={{ color: "var(--accent)" }}>
            — Costs, Rules &amp; Quotes
          </span>
        </h1>
        <p className="mt-3 text-lg text-zinc-400 max-w-2xl">
          What a pool costs {place}, {state}, what to check before you sign, and a free way to ask local builders to quote.
        </p>
        <div className="mt-6">
          <a
            href={quoteUrl}
            className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-lg"
            style={{ background: "var(--accent)" }}
          >
            Post My Pool Job &rarr;
          </a>
        </div>
      </section>

      {/* Trust signals */}
      <section className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-400">
        {[
          "Free to post",
          "No obligation",
        ].map((label) => (
          <span key={label} className="flex items-center gap-1.5">
            <svg className="w-4 h-4" style={{ color: "var(--accent)" }} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
            {label}
          </span>
        ))}
      </section>

      {/* Brief content */}
      <section className="mb-10 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-white mb-4">
          Pool Building Costs {place}
        </h2>
        <p className="text-zinc-400 leading-relaxed mb-4">
          Typical pool installation costs {place}: {costRange}. Prices vary based on pool type (concrete, fibreglass, or above-ground), size, site access, and landscaping requirements.
        </p>
        <h3 className="text-lg font-semibold text-white mb-3">
          What to Look For in a {city} Pool Builder
        </h3>
        <p className="text-zinc-400 leading-relaxed">
          {tips}
        </p>
      </section>

      {children}

      <LocalTradies category="pool building" seed={`location-${city}`} />

      {/* Second CTA */}
      <section className="mb-10 rounded-xl border border-teal-500/30 bg-gradient-to-b from-teal-500/10 to-transparent p-6 sm:p-8 text-center">
        <p className="text-base sm:text-lg font-semibold text-white mb-4">
          Ready to build? Post your job free and local builders can quote you.
        </p>
        <a
          href={quoteUrl}
          className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition-all shadow-lg"
          style={{ background: "var(--accent)" }}
        >
          Post My Pool Job &rarr;
        </a>
        <p className="mt-3 text-xs text-zinc-500">No obligation.</p>
      </section>

      {/* Related articles */}
      {articles.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-6 text-xl font-bold text-white">
            Pool Guides from PoolHub
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}
